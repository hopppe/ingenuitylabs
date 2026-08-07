// Ghosted share API — stores a challenge ghost server-side and returns a short
// key, so share links are tiny (/ghosted/c/<key>) instead of carrying the whole
// replay blob. Blobs are immutable once written; the app falls back to the long
// ?g= link form if this endpoint is unreachable.
const { put } = require("@vercel/blob");
const crypto = require("crypto");

// no 0/1/o/l/i — keys get read aloud and retyped
const ALPHABET = "23456789abcdefghjkmnpqrstuvwxyz";
const KEY_LEN = 8;

function makeKey() {
  const bytes = crypto.randomBytes(KEY_LEN);
  let key = "";
  for (let i = 0; i < KEY_LEN; i++) key += ALPHABET[bytes[i] % ALPHABET.length];
  return key;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const expected = process.env.GHOSTED_APP_TOKEN;
  if (expected && req.headers["x-ghosted-token"] !== expected) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { n, m, g } = req.body || {};
  const meters = Number(m);
  if (typeof g !== "string" || g.length === 0 || g.length > 16384 || !/^[A-Za-z0-9_-]+$/.test(g)) {
    return res.status(400).json({ error: "bad ghost" });
  }
  if (!Number.isInteger(meters) || meters < 0 || meters > 1_000_000) {
    return res.status(400).json({ error: "bad meters" });
  }
  const name = (typeof n === "string" ? n : "").slice(0, 24);

  const key = makeKey();
  await put(`c/${key}.json`, JSON.stringify({ n: name, m: meters, g }), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
    cacheControlMaxAge: 31536000,
  });

  return res.status(200).json({
    key,
    url: `https://www.ingenuitylabs.net/ghosted/c/${key}`,
  });
};
