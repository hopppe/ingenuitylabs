// LossBoss anonymous product events -> Neon Postgres (DATABASE_URL, the
// "lossboss-db" store). Schema lives in the weight-loss repo at
// growth/db/schema.sql.
//
// POST { install_id, app_version, build, locale, os, device_class,
//        events: [{ name, ts, props }] }
//
// Events are anonymous: a random per-install UUID, an allowlisted event name,
// and short enum/number props. No free text, names or body data are accepted —
// anything outside the allowlist is dropped, not stored.

const { neon } = require("@neondatabase/serverless");

const EVENT_NAMES = new Set([
  "first_open", "app_open", "day_active",
  "onboarding_start", "onboarding_step", "onboarding_switch_flow", "onboarding_complete",
  "consent", "heard_from", "creator_code_entered", "perm",
  "paywall_view", "paywall_close", "offer_view", "offer_decline",
  "purchase_start", "purchase_result", "restore",
  "meal_logged", "chat_sent", "weigh_in", "workout_logged", "notification_opened",
  "error", "crash",
]);
const MAX_EVENTS = 100;
const MAX_PROPS = 8;
const MAX_STRING = 64;
const MAX_CRASH_STRING = 600; // crash.top holds a few symbolicated frames
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const PROP_KEY = /^[a-z_]{1,24}$/;

const clip = (v, n = MAX_STRING) => (typeof v === "string" ? v.slice(0, n) : null);

function cleanProps(name, props) {
  const out = {};
  if (!props || typeof props !== "object") return out;
  for (const [k, v] of Object.entries(props).slice(0, MAX_PROPS)) {
    if (!PROP_KEY.test(k)) continue;
    if (typeof v === "boolean" || (typeof v === "number" && Number.isFinite(v))) out[k] = v;
    else if (typeof v === "string") out[k] = v.slice(0, name === "crash" ? MAX_CRASH_STRING : MAX_STRING);
  }
  return out;
}

function cleanTimestamp(ts) {
  const d = new Date(ts);
  const now = Date.now();
  // Device clocks drift; anything wildly off is pinned to receipt time.
  return isNaN(d) || d > now + 86400000 || d < now - 30 * 86400000 ? new Date(now) : d;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (req.headers["x-lossboss-token"] !== process.env.LOSSBOSS_APP_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const body = req.body || {};
  if (!UUID.test(body.install_id || "") || !Array.isArray(body.events)) {
    return res.status(400).json({ error: "install_id and events required" });
  }

  const meta = {
    app_version: clip(body.app_version, 16),
    build: clip(body.build, 16),
    locale: clip(body.locale, 16),
    os: clip(body.os, 24),
    device_class: clip(body.device_class, 16),
  };

  const rows = body.events
    .slice(0, MAX_EVENTS)
    .filter((e) => e && EVENT_NAMES.has(e.name))
    .map((e) => ({
      install_id: body.install_id,
      ts: cleanTimestamp(e.ts).toISOString(),
      name: e.name,
      props: cleanProps(e.name, e.props),
      app_version: meta.app_version,
      build: meta.build,
    }));

  // Install-level answers are copied onto the install row so reports can
  // group by them without scanning events.
  const heard = rows.find((r) => r.name === "heard_from")?.props.source ?? null;
  const code = rows.find((r) => r.name === "creator_code_entered")?.props.code;
  const creatorCode = typeof code === "string" && /^[A-Z0-9]{2,20}$/.test(code) ? code : null;

  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql`
      insert into installs (install_id, app_version, build, locale, os, device_class, heard_from, creator_code)
      values (${body.install_id}, ${meta.app_version}, ${meta.build}, ${meta.locale}, ${meta.os},
              ${meta.device_class}, ${heard}, ${creatorCode})
      on conflict (install_id) do update set
        last_seen = now(),
        app_version = excluded.app_version,
        build = excluded.build,
        locale = excluded.locale,
        os = excluded.os,
        heard_from = coalesce(excluded.heard_from, installs.heard_from),
        creator_code = coalesce(excluded.creator_code, installs.creator_code)`;
    if (rows.length) {
      await sql`
        insert into events (install_id, ts, name, props, app_version, build)
        select install_id, ts, name, props, app_version, build
        from jsonb_to_recordset(${JSON.stringify(rows)}::jsonb)
          as x(install_id uuid, ts timestamptz, name text, props jsonb, app_version text, build text)`;
    }
    return res.status(200).json({ stored: rows.length });
  } catch (err) {
    console.error("lossboss-events", err);
    return res.status(500).json({ error: "store failed" });
  }
};
