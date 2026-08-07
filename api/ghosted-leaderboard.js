// Ghosted global leaderboard — one JSON blob in Vercel Blob storage.
//
// GET  -> { scores: [{ id, name, meters, character, when }], updated }
// POST { id, name, meters, character } -> upserts best-per-player, returns rank.
//
// Read-modify-write on a single blob: two simultaneous submits can drop one,
// which is fine at this scale — the app resubmits its best on every refresh,
// so a lost write heals itself the next time that player opens the board.

const { put, list } = require("@vercel/blob");

const BLOB_PATH = "ghosted/leaderboard.json";
const MAX_SCORES = 100;
const MAX_METERS = 50000; // sanity cap — beyond any legitimate run
const CHARACTERS = new Set(["pip", "mochi", "volt", "minty"]);

async function readBoard() {
  const { blobs } = await list({ prefix: BLOB_PATH, limit: 1 });
  if (!blobs.length) return { scores: [], updated: 0 };
  // Bust the CDN cache so submits show up right away.
  const res = await fetch(`${blobs[0].url}?ts=${Date.now()}`, { cache: "no-store" });
  if (!res.ok) return { scores: [], updated: 0 };
  const data = await res.json().catch(() => null);
  return data && Array.isArray(data.scores) ? data : { scores: [], updated: 0 };
}

function writeBoard(board) {
  return put(BLOB_PATH, JSON.stringify(board), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

function cleanName(raw) {
  if (typeof raw !== "string") return null;
  const name = raw.replace(/[\x00-\x1F\x7F]/g, "").trim().slice(0, 18);
  return name.length ? name : null;
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();

  try {
    if (req.method === "GET") {
      const board = await readBoard();
      res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate=300");
      return res.status(200).json(board);
    }

    if (req.method === "POST") {
      const { id, name: rawName, meters, character } = req.body || {};
      const name = cleanName(rawName);
      if (
        typeof id !== "string" || !/^[A-Za-z0-9-]{8,64}$/.test(id) ||
        !name ||
        !Number.isInteger(meters) || meters < 1 || meters > MAX_METERS
      ) {
        return res.status(400).json({ error: "Invalid score submission" });
      }

      const board = await readBoard();
      const entry = {
        id,
        name,
        meters,
        character: CHARACTERS.has(character) ? character : "pip",
        when: Date.now(),
      };

      const existing = board.scores.find((s) => s.id === id);
      if (existing && existing.meters >= meters) {
        // Keep their high score, but let them rename / switch character.
        existing.name = name;
        existing.character = entry.character;
      } else {
        board.scores = board.scores.filter((s) => s.id !== id);
        board.scores.push(entry);
      }

      board.scores.sort((a, b) => b.meters - a.meters || a.when - b.when);
      board.scores = board.scores.slice(0, MAX_SCORES);
      board.updated = Date.now();
      await writeBoard(board);

      const rank = board.scores.findIndex((s) => s.id === id) + 1;
      return res.status(200).json({ ok: true, rank: rank || null, scores: board.scores });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("ghosted-leaderboard error:", err);
    return res.status(500).json({ error: "Leaderboard unavailable" });
  }
};
