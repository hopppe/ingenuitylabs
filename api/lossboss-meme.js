// LossBoss meme search — stateless passthrough to Tenor.
// Keeps the Tenor key server-side. Returns a shortlist of candidate memes;
// the app picks one it hasn't shown recently. Stores nothing.

const TENOR_ENDPOINT = "https://tenor.googleapis.com/v2/search";
const LIMIT = 12;

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (req.headers["x-lossboss-token"] !== process.env.LOSSBOSS_APP_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (!process.env.TENOR_API_KEY) {
    // Not configured yet — the app treats this as "no meme" and falls back to text.
    return res.status(503).json({ error: "Meme search not configured", results: [] });
  }

  const q = typeof (req.body || {}).q === "string" ? req.body.q.trim().slice(0, 100) : "";
  if (!q) {
    return res.status(400).json({ error: "q required" });
  }

  const url =
    `${TENOR_ENDPOINT}?q=${encodeURIComponent(q)}` +
    `&key=${process.env.TENOR_API_KEY}` +
    `&client_key=lossboss` +
    `&limit=${LIMIT}` +
    // "high" is Tenor's strictest filter (G-rated) — this is a 4+ wellness app.
    `&contentfilter=high` +
    `&media_filter=tinygif,gif` +
    `&random=true`;

  try {
    const upstream = await fetch(url);
    if (!upstream.ok) {
      const err = await upstream.text();
      console.error("Tenor error:", upstream.status, err.slice(0, 300));
      return res.status(502).json({ error: "Meme search failed", results: [] });
    }
    const data = await upstream.json();

    const results = (data.results || [])
      .map((r) => {
        // tinygif keeps chat scrolling cheap; fall back to the full gif.
        const media = (r.media_formats || {}).tinygif || (r.media_formats || {}).gif;
        if (!media || !media.url) return null;
        const dims = media.dims || [];
        return {
          url: media.url,
          description: r.content_description || r.title || q,
          width: dims[0] || 0,
          height: dims[1] || 0,
        };
      })
      .filter(Boolean);

    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json({ results });
  } catch (error) {
    console.error("LossBoss meme proxy error:", error);
    return res.status(500).json({ error: "Proxy failure", results: [] });
  }
};
