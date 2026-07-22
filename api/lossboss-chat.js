// LossBoss AI proxy — stateless passthrough to OpenAI.
// Holds the API key server-side; stores nothing. The app sends full chat
// context per request and all user data stays on-device.

const ALLOWED_MODELS = new Set(["gpt-4o-mini", "gpt-4o"]);
const MAX_TOKENS_CAP = 1600;

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (req.headers["x-lossboss-token"] !== process.env.LOSSBOSS_APP_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { messages, model, max_tokens, temperature, stream, response_format } =
    req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages required" });
  }
  if (!ALLOWED_MODELS.has(model)) {
    return res.status(400).json({ error: "model not allowed" });
  }

  const payload = {
    model,
    messages,
    max_tokens: Math.min(max_tokens || 800, MAX_TOKENS_CAP),
    temperature: typeof temperature === "number" ? temperature : 0.8,
    stream: !!stream,
  };
  if (response_format) payload.response_format = response_format;

  try {
    const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      const err = await upstream.text();
      console.error("OpenAI error:", upstream.status, err.slice(0, 500));
      return res
        .status(upstream.status === 429 ? 429 : 502)
        .json({ error: "Upstream AI error" });
    }

    if (!payload.stream) {
      const data = await upstream.json();
      return res.status(200).json(data);
    }

    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    });
    const reader = upstream.body.getReader();
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
    }
    return res.end();
  } catch (error) {
    console.error("LossBoss proxy error:", error);
    if (!res.headersSent) {
      return res.status(500).json({ error: "Proxy failure" });
    }
    return res.end();
  }
};

module.exports.config = { supportsResponseStreaming: true };
