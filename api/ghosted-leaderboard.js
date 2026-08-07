// Ghosted global leaderboard — one JSON blob in Vercel Blob storage.
//
// GET  -> { scores: [{ id, name, meters, character, when }], updated }
// POST { id, name, meters, character } -> upserts best-per-player, returns rank.
//
// Read-modify-write on a single blob: two simultaneous submits can drop one,
// which is fine at this scale — the app resubmits its best on every refresh,
// so a lost write heals itself the next time that player opens the board.

const { put, list, del } = require("@vercel/blob");

// Each write goes to a NEW pathname (ghosted/board-<ms>.json) and readers take
// the highest stamp. The blob CDN ignores query strings and caches by path, so
// overwriting one fixed path serves stale content for up to a minute — fresh
// paths are the only way to get read-after-write. Old versions are pruned.
const BOARD_PREFIX = "ghosted/board-";
const LEGACY_PATH = "ghosted/leaderboard.json"; // pre-versioning boards
const KEEP_VERSIONS = 3;
const MAX_SCORES = 100;
const MAX_METERS = 50000; // sanity cap — beyond any legitimate run
const CHARACTERS = new Set(["pip", "mochi", "volt", "minty"]);

const stampOf = (pathname) => Number((pathname.match(/board-(\d+)\.json$/) || [])[1] || 0);

async function fetchBoard(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return null;
  const data = await res.json().catch(() => null);
  return data && Array.isArray(data.scores) ? data : null;
}

async function readBoard() {
  const { blobs } = await list({ prefix: BOARD_PREFIX, limit: 100 });
  const newest = blobs.sort((a, b) => stampOf(b.pathname) - stampOf(a.pathname))[0];
  if (newest) return (await fetchBoard(newest.url)) || { scores: [], updated: 0 };

  // migration: fall back to the old fixed-path blob
  const legacy = await list({ prefix: LEGACY_PATH, limit: 1 });
  if (legacy.blobs.length) {
    const board = await fetchBoard(`${legacy.blobs[0].url}?ts=${Date.now()}`);
    if (board) return board;
  }
  return { scores: [], updated: 0 };
}

async function writeBoard(board) {
  await put(`${BOARD_PREFIX}${board.updated}.json`, JSON.stringify(board), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });
  // prune old versions (best-effort; a failure here never fails the submit)
  try {
    const { blobs } = await list({ prefix: BOARD_PREFIX, limit: 100 });
    const stale = blobs
      .sort((a, b) => stampOf(b.pathname) - stampOf(a.pathname))
      .slice(KEEP_VERSIONS);
    if (stale.length) await del(stale.map((b) => b.url));
  } catch (err) {
    console.error("board prune failed:", err);
  }
}

function cleanName(raw) {
  if (typeof raw !== "string") return null;
  const name = raw.replace(/[\x00-\x1F\x7F]/g, "").trim().slice(0, 18);
  return name.length ? name : null;
}

// Vulgar names get swapped for a clean alias rather than rejected — shipped
// apps have no UI for a rejection, and losing the score would punish the run.
// Strong terms match as substrings; common-word terms only match whole.
const PROFANE_SUBSTR = [
  "fuck", "fck", "fuk", "fock", "phuck", "shit", "sh1t", "bitch", "btch",
  "cunt", "nigg", "nlgg", "fagg", "faggot", "retard", "rape", "nazi",
  "hitler", "penis", "vagina", "dildo", "blowjob", "handjob", "whore",
  "slut", "porn", "hentai", "molest", "pedo", "beaner", "chink", "spic",
  "kike", "tranny", "asshole", "tits", "boobs",
];
const PROFANE_WORD = [
  "ass", "arse", "anal", "sex", "cum", "jizz", "tit", "boob", "dick",
  "cock", "hoe", "fag", "kys", "damn", "piss", "wank", "twat", "prick",
  "nude", "nudes",
];
const LEET = { 0: "o", 1: "i", 2: "z", 3: "e", 4: "a", 5: "s", 6: "g", 7: "t", 8: "b", 9: "g", "@": "a", $: "s", "!": "i", "+": "t" };
const CLEAN_ALIASES = ["Mystery Ghost", "A Polite Ghost", "Ghost McGhostface", "Redacted Spirit"];

function isProfane(name) {
  const deleet = name.toLowerCase().replace(/./g, (c) => LEET[c] ?? c);
  const letters = deleet.replace(/[^a-z ]/g, "");
  const squeezed = letters.replace(/(.)\1+/g, "$1"); // fuuuck -> fuck
  for (const s of [letters, letters.replace(/ /g, ""), squeezed, squeezed.replace(/ /g, "")]) {
    if (PROFANE_SUBSTR.some((w) => s.includes(w))) return true;
  }
  const words = new Set([...letters.split(/ +/), ...squeezed.split(/ +/)]);
  return PROFANE_WORD.some((w) => words.has(w));
}

/// Deterministic per-player alias so a filtered name doesn't churn between submits.
function displayName(name, id) {
  if (!isProfane(name)) return name;
  let h = 0;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return CLEAN_ALIASES[h % CLEAN_ALIASES.length];
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
      let name = cleanName(rawName);
      if (
        typeof id !== "string" || !/^[A-Za-z0-9-]{8,64}$/.test(id) ||
        !name ||
        !Number.isInteger(meters) || meters < 1 || meters > MAX_METERS
      ) {
        return res.status(400).json({ error: "Invalid score submission" });
      }
      name = displayName(name, id);

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
      return res.status(200).json({ ok: true, rank: rank || null, updated: board.updated, scores: board.scores });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("ghosted-leaderboard error:", err);
    return res.status(500).json({ error: "Leaderboard unavailable" });
  }
};
