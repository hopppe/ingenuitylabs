// LossBoss App Store Server Notifications V2 -> Neon (subscription_events).
// App Store Connect points both Production and Sandbox here; set or inspect
// with growth/scripts/asn.mjs in the weight-loss repo.
//
// Every payload is a JWS signed by Apple. Apple's library verifies the x5c
// chain up to Apple Root CA - G3 (embedded in lib/apple-root-ca.js) and checks
// the bundle id, app id and environment before anything is stored.
// appAccountToken is the app's per-install UUID, so rows join to `events`.

const { neon } = require("@neondatabase/serverless");
const { SignedDataVerifier, Environment } = require("@apple/app-store-server-library");
const { APPLE_ROOT_CA_G3 } = require("../lib/apple-root-ca");

const BUNDLE_ID = "com.ingenuitylabs.lossboss";
const APP_APPLE_ID = 6793795249;

const verifiers = {
  Production: new SignedDataVerifier([APPLE_ROOT_CA_G3], true, Environment.PRODUCTION, BUNDLE_ID, APP_APPLE_ID),
  Sandbox: new SignedDataVerifier([APPLE_ROOT_CA_G3], true, Environment.SANDBOX, BUNDLE_ID),
};

// The environment lives inside the signed payload, so peek at it (unverified)
// only to pick the verifier; the verifier then checks it matches.
function claimedEnvironment(jws) {
  try {
    const payload = JSON.parse(Buffer.from(jws.split(".")[1], "base64url").toString());
    return payload.data?.environment ?? payload.summary?.environment ?? "Production";
  } catch {
    return "Production";
  }
}

const ts = (ms) => (ms ? new Date(ms).toISOString() : null);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const signedPayload = req.body?.signedPayload;
  if (typeof signedPayload !== "string") {
    return res.status(400).json({ error: "signedPayload required" });
  }

  const verifier = verifiers[claimedEnvironment(signedPayload)] ?? verifiers.Production;
  let n, tx, renewal;
  try {
    n = await verifier.verifyAndDecodeNotification(signedPayload);
    if (n.data?.signedTransactionInfo) tx = await verifier.verifyAndDecodeTransaction(n.data.signedTransactionInfo);
    if (n.data?.signedRenewalInfo) renewal = await verifier.verifyAndDecodeRenewalInfo(n.data.signedRenewalInfo);
  } catch (err) {
    console.error("lossboss-assn verify", err?.status ?? err);
    return res.status(401).json({ error: "Invalid signature" });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql`
      insert into subscription_events (
        notification_uuid, signed_date, environment, type, subtype, install_id,
        original_transaction_id, transaction_id, product_id, offer_type, offer_discount_type,
        price_milli, currency, storefront, expires_at, auto_renew, raw)
      values (
        ${n.notificationUUID}, ${ts(n.signedDate)}, ${n.data?.environment ?? null}, ${n.notificationType}, ${n.subtype ?? null},
        ${tx?.appAccountToken ?? null}, ${tx?.originalTransactionId ?? null}, ${tx?.transactionId ?? null},
        ${tx?.productId ?? null}, ${tx?.offerType ?? null}, ${tx?.offerDiscountType ?? null},
        ${tx?.price ?? null}, ${tx?.currency ?? null}, ${tx?.storefront ?? null}, ${ts(tx?.expiresDate)},
        ${renewal ? renewal.autoRenewStatus === 1 : null},
        ${JSON.stringify({ notification: n, transaction: tx ?? null, renewal: renewal ?? null })}::jsonb)
      on conflict (notification_uuid) do nothing`;
    return res.status(200).json({ ok: true });
  } catch (err) {
    // Non-200 makes Apple retry (up to 5 times over ~3 days).
    console.error("lossboss-assn store", err);
    return res.status(500).json({ error: "store failed" });
  }
};
