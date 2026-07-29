// LossBoss meme search — stateless passthrough to KLIPY.
//
// Google shut the Tenor API down on 2026-06-30, so this uses KLIPY's
// static-memes endpoint (the drop-in Tenor replacement). Keeps the key
// server-side. Returns a shortlist of candidates; the app picks one it
// hasn't shown recently. Stores nothing.

const BASE = "https://api.klipy.com/api/v1";
const PER_PAGE = 12;
// Accepted values: off | low | medium | high. This is a 4+ wellness app.
const CONTENT_FILTER = "high";
// Preferred size bucket, then fallbacks. Chat bubbles cap around 260pt wide.
const SIZES = ["md", "sm", "hd", "xs"];
// PNG/JPG first — universally decodable on iOS; WebP and GIF as fallbacks.
const FORMATS = ["png", "jpg", "jpeg", "webp", "gif"];

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (req.headers["x-lossboss-token"] !== process.env.LOSSBOSS_APP_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (!process.env.KLIPY_API_KEY) {
    // Not configured yet — the app treats this as "no meme" and falls back to text.
    return res.status(503).json({ error: "Meme search not configured", results: [] });
  }

  const q = typeof (req.body || {}).q === "string" ? req.body.q.trim().slice(0, 100) : "";
  if (!q) {
    return res.status(400).json({ error: "q required" });
  }

  const url =
    `${BASE}/${encodeURIComponent(process.env.KLIPY_API_KEY)}/static-memes/search` +
    `?q=${encodeURIComponent(q)}` +
    `&page=1&per_page=${PER_PAGE}` +
    `&content_filter=${CONTENT_FILTER}`;

  try {
    const upstream = await fetch(url);
    if (!upstream.ok) {
      const err = await upstream.text();
      console.error("KLIPY error:", upstream.status, err.slice(0, 300));
      return res.status(502).json({ error: "Meme search failed", results: [] });
    }
    const body = await upstream.json();

    // Shape: { result, data: { data: [ { slug, title, file: { md: { png: {url,width,height} } } } ] } }
    const items = (body && body.data && body.data.data) || [];
    const results = items
      .map((item) => {
        const file = item.file || {};
        for (const size of SIZES) {
          const bucket = file[size];
          if (!bucket) continue;
          for (const fmt of FORMATS) {
            const media = bucket[fmt];
            if (media && media.url) {
              return {
                url: media.url,
                description: item.title || q,
                width: media.width || 0,
                height: media.height || 0,
              };
            }
          }
        }
        return null;
      })
      .filter(Boolean);

    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json({ results });
  } catch (error) {
    console.error("LossBoss meme proxy error:", error);
    return res.status(500).json({ error: "Proxy failure", results: [] });
  }
};
