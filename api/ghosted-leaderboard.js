// Ghosted global + daily leaderboards — JSON blobs in Vercel Blob storage.
//
// GET  -> { scores: [...], daily: [...], day, updated }
// POST { id, name, meters, character, todayMeters? }
//      `meters` upserts the all-time board; `todayMeters` (if present) upserts
//      today's board. Daily board resets at midnight UTC (a new UTC day simply
//      reads as empty).
//
// Read-modify-write on blobs: two simultaneous submits can drop one, which is
// fine at this scale — the app resubmits its best on every refresh, so a lost
// write heals itself the next time that player opens the board.

const { put, list, del } = require("@vercel/blob");

// Each write goes to a NEW pathname and readers take the highest stamp. The
// blob CDN ignores query strings and caches by path, so overwriting one fixed
// path serves stale content for up to a minute — fresh paths are the only way
// to get read-after-write. Old versions are pruned.
const BOARD_PREFIX = "ghosted/board-";
const DAILY_ROOT = "ghosted/daily-"; // full path: ghosted/daily-<utcDay>-<ms>.json
const LEGACY_PATH = "ghosted/leaderboard.json"; // pre-versioning boards
const KEEP_VERSIONS = 3;
const MAX_SCORES = 100;
const MAX_PER_PLAYER = 5; // a player's top runs each get a row
const MAX_METERS = 50000; // sanity cap — beyond any legitimate run
const CHARACTERS = new Set(["pip", "mochi", "volt", "minty"]);

const utcDay = () => Math.floor(Date.now() / 86400000);
const dailyPrefix = (day) => `${DAILY_ROOT}${day}-`;
const stampOf = (pathname) => Number((pathname.match(/-(\d+)\.json$/) || [])[1] || 0);

async function fetchBoard(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return null;
  const data = await res.json().catch(() => null);
  return data && Array.isArray(data.scores) ? data : null;
}

async function newestAt(prefix) {
  const { blobs } = await list({ prefix, limit: 100 });
  return blobs.sort((a, b) => stampOf(b.pathname) - stampOf(a.pathname))[0] || null;
}

async function readBoard() {
  const newest = await newestAt(BOARD_PREFIX);
  if (newest) return (await fetchBoard(newest.url)) || { scores: [], updated: 0 };

  // migration: fall back to the old fixed-path blob
  const legacy = await list({ prefix: LEGACY_PATH, limit: 1 });
  if (legacy.blobs.length) {
    const board = await fetchBoard(`${legacy.blobs[0].url}?ts=${Date.now()}`);
    if (board) return board;
  }
  return { scores: [], updated: 0 };
}

async function readDaily(day) {
  const newest = await newestAt(dailyPrefix(day));
  if (newest) return (await fetchBoard(newest.url)) || { scores: [], updated: 0 };
  return { scores: [], updated: 0 }; // new UTC day = fresh board
}

async function writeAt(prefix, board) {
  await put(`${prefix}${board.updated}.json`, JSON.stringify(board), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });
}

// prune old versions — and for daily, every previous day (best-effort;
// a failure here never fails the submit)
async function prune(day) {
  try {
    const [main, daily] = await Promise.all([
      list({ prefix: BOARD_PREFIX, limit: 100 }),
      list({ prefix: DAILY_ROOT, limit: 500 }),
    ]);
    const staleMain = main.blobs
      .sort((a, b) => stampOf(b.pathname) - stampOf(a.pathname))
      .slice(KEEP_VERSIONS);
    const todayPrefix = dailyPrefix(day);
    const oldDays = daily.blobs.filter((b) => !b.pathname.startsWith(todayPrefix));
    const staleToday = daily.blobs
      .filter((b) => b.pathname.startsWith(todayPrefix))
      .sort((a, b) => stampOf(b.pathname) - stampOf(a.pathname))
      .slice(KEEP_VERSIONS);
    const stale = [...staleMain, ...oldDays, ...staleToday];
    if (stale.length) await del(stale.map((b) => b.url));
  } catch (err) {
    console.error("board prune failed:", err);
  }
}

// Each POST is one RUN. A player keeps up to MAX_PER_PLAYER rows per board
// (their top runs); a duplicate (same id + same meters) is treated as a
// rename/refresh, not a new run — flush retries resubmit the same value.
function upsert(board, entry) {
  // keep identity fresh on every row this player already owns
  for (const s of board.scores) {
    if (s.id === entry.id) { s.name = entry.name; s.character = entry.character; }
  }
  const dup = board.scores.some((s) => s.id === entry.id && s.meters === entry.meters);
  if (!dup) {
    board.scores.push(entry);
    const mine = board.scores
      .filter((s) => s.id === entry.id)
      .sort((a, b) => b.meters - a.meters || a.when - b.when);
    const keep = new Set(mine.slice(0, MAX_PER_PLAYER));
    board.scores = board.scores.filter((s) => s.id !== entry.id || keep.has(s));
  }
  board.scores.sort((a, b) => b.meters - a.meters || a.when - b.when);
  board.scores = board.scores.slice(0, MAX_SCORES);
  board.updated = entry.when;
  return board.scores.findIndex((s) => s.id === entry.id && s.meters === entry.meters) + 1 || null;
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
    const day = utcDay();

    if (req.method === "GET") {
      const [board, daily] = await Promise.all([readBoard(), readDaily(day)]);
      res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate=300");
      return res.status(200).json({
        scores: board.scores,
        daily: daily.scores,
        day,
        updated: Math.max(board.updated || 0, daily.updated || 0),
      });
    }

    if (req.method === "POST") {
      const { id, name: rawName, meters, character, todayMeters } = req.body || {};
      let name = cleanName(rawName);
      const validMeters = (m) => Number.isInteger(m) && m >= 1 && m <= MAX_METERS;
      if (
        typeof id !== "string" || !/^[A-Za-z0-9-]{8,64}$/.test(id) ||
        !name || !validMeters(meters) ||
        (todayMeters !== undefined && !validMeters(todayMeters))
      ) {
        return res.status(400).json({ error: "Invalid score submission" });
      }
      name = displayName(name, id);

      const character_ = CHARACTERS.has(character) ? character : "pip";
      const when = Date.now();
      const [board, daily] = await Promise.all([readBoard(), readDaily(day)]);

      const rank = upsert(board, { id, name, meters, character: character_, when });
      let dailyRank = null;
      const writes = [writeAt(BOARD_PREFIX, board)];
      if (todayMeters !== undefined) {
        dailyRank = upsert(daily, { id, name, meters: todayMeters, character: character_, when });
        writes.push(writeAt(dailyPrefix(day), daily));
      }
      await Promise.all(writes);
      await prune(day);

      return res.status(200).json({
        ok: true,
        rank,
        dailyRank,
        day,
        updated: Math.max(board.updated || 0, daily.updated || 0),
        scores: board.scores,
        daily: daily.scores,
      });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("ghosted-leaderboard error:", err);
    return res.status(500).json({ error: "Leaderboard unavailable" });
  }
};
