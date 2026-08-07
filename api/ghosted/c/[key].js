// Resolves a short challenge key. Two audiences hit this route:
//  - The app (universal link intercepted → it fetches ?format=json here) gets
//    the stored payload back as JSON.
//  - Browsers and link-preview crawlers (iMessage, WhatsApp, Twitter) get HTML
//    whose OG tags carry the score, then a client redirect into the SPA
//    challenge page with the long-form params the page already understands.
// vercel.json rewrites /ghosted/c/:key here (the query-param form /ghosted/c
// keeps going to the SPA directly).
const SITE = "https://www.ingenuitylabs.net";
// Blobs are written with addRandomSuffix:false, so public URLs are deterministic.
const BLOB_BASE = "https://to108uvrngcmvv9c.public.blob.vercel-storage.com";

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

module.exports = async (req, res) => {
  const key = String(req.query.key || "");
  if (!/^[a-z2-9]{4,16}$/.test(key)) {
    return res.status(400).send("bad key");
  }

  let payload = null;
  try {
    const r = await fetch(`${BLOB_BASE}/c/${key}.json`);
    if (r.ok) payload = await r.json();
  } catch {
    // missing blob → payload stays null
  }

  const wantsJSON =
    req.query.format === "json" || (req.headers.accept || "").includes("application/json");
  if (wantsJSON) {
    if (!payload) return res.status(404).json({ error: "not found" });
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    return res.status(200).json(payload);
  }

  const name = payload && payload.n ? payload.n : "A rival";
  const meters = payload ? payload.m : null;
  const title = payload ? `👻 ${name} ran ${meters}m in Ghosted` : "👻 Ghosted — race your friends' ghosts";
  const desc = payload
    ? "Think you can outrun their ghost? Tap to race it."
    : "Phase through the violet, go solid for the cyan. Race your friends' ghosts.";
  const redirect = payload
    ? `/ghosted/c?n=${encodeURIComponent(name)}&m=${encodeURIComponent(meters)}&g=${encodeURIComponent(payload.g)}&k=${key}`
    : "/ghosted";

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=300, s-maxage=86400");
  return res.status(payload ? 200 : 404).send(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta property="og:site_name" content="Ghosted">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${SITE}/ghosted/c/${key}">
<meta property="og:image" content="${SITE}/api/ghosted/og/${key}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${SITE}/api/ghosted/og/${key}">
<style>body{background:#0a0118;color:#fff;font-family:-apple-system,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0}</style>
</head>
<body>
<p>👻 Loading challenge…</p>
<script>location.replace(${JSON.stringify(redirect)});</script>
<noscript><meta http-equiv="refresh" content="0;url=${esc(redirect)}"></noscript>
</body>
</html>`);
};
