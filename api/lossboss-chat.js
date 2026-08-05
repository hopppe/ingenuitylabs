// LossBoss AI proxy — stateless passthrough to OpenAI.
// Holds the API key server-side; stores nothing. The app sends full chat
// context per request and all user data stays on-device.

// gpt-4o* stay allowed so builds already on devices keep working after the
// Luna cutover. gpt-4o-2024-05-13 shuts down 2026-12-01, but the bare `gpt-4o`
// alias points at the 2024-08-06 snapshot, which has no announced shutdown.
const ALLOWED_MODELS = new Set(["gpt-5.6-luna", "gpt-4o-mini", "gpt-4o"]);
const MAX_TOKENS_CAP = 1600;
const VERBOSITY = new Set(["low", "medium", "high"]);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (req.headers["x-lossboss-token"] !== process.env.LOSSBOSS_APP_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const {
    messages, model, max_tokens, temperature, stream, response_format, tools, tool_choice, verbosity,
  } = req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages required" });
  }
  if (!ALLOWED_MODELS.has(model)) {
    return res.status(400).json({ error: "model not allowed" });
  }

  const payload = { model, messages, stream: !!stream };
  const cap = Math.min(max_tokens || 800, MAX_TOKENS_CAP);

  // GPT-5.6 speaks a different parameter dialect than 4o: `max_tokens` is
  // rejected outright, temperature only accepts the default, and function tools
  // on /v1/chat/completions require reasoning_effort "none" — omitting it is a
  // 400, not a default. Translating here (rather than in the app) means shipped
  // builds still sending the 4o shape keep working.
  if (model.startsWith("gpt-5")) {
    payload.max_completion_tokens = cap;
    payload.reasoning_effort = "none";
    payload.verbosity = VERBOSITY.has(verbosity) ? verbosity : "low";
  } else {
    payload.max_tokens = cap;
    payload.temperature = typeof temperature === "number" ? temperature : 0.8;
  }

  if (response_format) payload.response_format = response_format;
  if (Array.isArray(tools) && tools.length <= 16) payload.tools = tools;
  if (tool_choice) payload.tool_choice = tool_choice;

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
