// Crew invite landing page — what a browser or link-preview crawler gets for
// https://www.ingenuitylabs.net/ghosted/g/<key>.
//
// The app claims this path as a universal link, so an INSTALLED app intercepts
// it and this page never renders. That means essentially everyone who actually
// sees this page does NOT have Ghosted — so the App Store is the primary CTA
// and the deep link is the "already have it" escape hatch. (Same lesson as the
// challenge page, where an app-only primary button dead-ended new players.)
//
// Rendered server-side rather than redirecting into the SPA: the whole page is
// crew name + standings + one button, and a crew of friends already playing is
// the strongest install pitch the app has.
const SITE = "https://www.ingenuitylabs.net";
const APP_STORE = "https://apps.apple.com/app/id6793375942";
const BLOB_BASE = "https://to108uvrngcmvv9c.public.blob.vercel-storage.com";
const KEY_RE = /^[a-z2-9]{8}$/;

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Reads the newest crew blob directly. @vercel/blob's list() is not available
// on every runtime here, and this path only needs a public read.
async function readCrew(key) {
  try {
    const r = await fetch(`${SITE}/api/ghosted/crew?key=${encodeURIComponent(key)}`, {
      cache: "no-store",
    });
    if (!r.ok) return null;
    const data = await r.json();
    return data.crew || null;
  } catch {
    return null;
  }
}

module.exports = async (req, res) => {
  const key = String(req.query.key || "");
  if (!KEY_RE.test(key)) return res.status(400).send("bad key");

  const crew = await readCrew(key);
  const name = crew ? crew.name : "a crew";
  const members = crew ? crew.members.slice(0, 12) : [];
  const title = crew ? `👻 Join ${name} on Ghosted` : "👻 Ghosted — race your friends' ghosts";
  const desc = crew
    ? `${crew.members.length} ${crew.members.length === 1 ? "player is" : "players are"} racing. Think you can top the board?`
    : "Phase through the violet, go solid for the cyan. Race your friends' ghosts.";

  const rows = members
    .map((m, i) => {
      const medal = ["🥇", "🥈", "🥉"][i] || `#${i + 1}`;
      return `<li><span class="r">${esc(medal)}</span><span class="n">${esc(m.name)}</span><span class="m">${Number(m.best).toLocaleString()}m</span></li>`;
    })
    .join("");

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=60, s-maxage=60");
  return res.status(crew ? 200 : 404).send(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta property="og:site_name" content="Ghosted">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${SITE}/ghosted/g/${key}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<style>
:root{color-scheme:dark}
*{box-sizing:border-box}
body{background:#0a0118;color:#fff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
.card{width:100%;max-width:420px;text-align:center}
.ghost{font-size:56px;line-height:1}
h1{font-size:26px;margin:12px 0 4px;font-weight:800}
.sub{color:#b9a9d6;font-size:15px;margin:0 0 22px}
ul{list-style:none;padding:0;margin:0 0 22px;text-align:left}
li{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.055);border-radius:12px;padding:11px 14px;margin-bottom:7px}
.r{width:30px;color:#b9a9d6;font-weight:700;font-size:14px;flex:none}
.n{flex:1;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.m{color:#ffd84d;font-weight:800}
.btn{display:block;padding:16px;border-radius:16px;font-weight:800;text-decoration:none;font-size:17px}
.primary{background:linear-gradient(90deg,#ff4dd8,#9e66ff);color:#fff;box-shadow:0 6px 20px rgba(255,77,216,.35)}
.ghostbtn{color:#b9a9d6;font-size:15px;padding:14px;display:block;text-decoration:none}
.fine{color:#7d6f99;font-size:12.5px;line-height:1.5;margin-top:16px}
</style>
</head>
<body>
<div class="card">
  <div class="ghost">👻</div>
  <h1>${crew ? `You're invited to ${esc(name)}` : "Ghosted"}</h1>
  <p class="sub">${esc(desc)}</p>
  ${rows ? `<ul>${rows}</ul>` : ""}
  <a class="btn primary" href="${APP_STORE}">Get Ghosted — free</a>
  <a class="ghostbtn" href="ghosted://crew?key=${key}">Already have it? Open the crew →</a>
  <p class="fine">Ghosted is a one-thumb ghost race. Hold to phase through the violet walls, let go to glide through the cyan gates. Install, tap this link again, and you'll join ${crew ? esc(name) : "the crew"} automatically.</p>
</div>
</body>
</html>`);
};
