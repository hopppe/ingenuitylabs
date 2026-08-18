// Ghosted crews — private group leaderboards. One JSON blob per crew.
//
// GET  ?key=<key>                       -> { crew }
// POST { action: "create", name, id, playerName, character }
//        -> { crew, key, url }          mints an 8-char key, creator joins
// POST { action: "join", key, id, playerName, character }
//        -> { crew }                    idempotent; rejoining just refreshes identity
// POST { action: "submit", keys: [..], id, playerName, character, meters, todayMeters }
//        -> { crews: [..] }             one call updates every crew the player is in,
//                                       so N crews cost one read-modify-write each
//                                       instead of N racing client requests.
//
// Same storage discipline as the global board: every write goes to a NEW
// pathname and readers take the highest stamp, because the blob CDN caches by
// pathname and ignores query strings — overwriting a fixed path serves stale
// content for ~a minute. A crew is a hotter single path than the global board,
// so two simultaneous submits dropping one write is MORE likely here; it self
// heals because the app resubmits its best whenever the crew view refreshes.
const { put, list, del } = require("@vercel/blob");
const crypto = require("crypto");
const { cleanName, displayName } = require("../../lib/ghosted-names");

const PREFIX = "crew/"; // full path: crew/<key>-<ms>.json
const KEEP_VERSIONS = 3;
const MAX_MEMBERS = 50;
const MAX_METERS = 50000;
const MAX_KEYS_PER_SUBMIT = 20;
const CHARACTERS = new Set(["pip", "mochi", "volt", "minty"]);

// no 0/1/o/l/i — keys get read aloud and retyped
const ALPHABET = "23456789abcdefghjkmnpqrstuvwxyz";
const KEY_LEN = 8;
const KEY_RE = /^[a-z2-9]{8}$/;

const utcDay = () => Math.floor(Date.now() / 86400000);
const stampOf = (p) => Number((p.match(/-(\d+)\.json$/) || [])[1] || 0);

function makeKey() {
  const bytes = crypto.randomBytes(KEY_LEN);
  let key = "";
  for (let i = 0; i < KEY_LEN; i++) key += ALPHABET[bytes[i] % ALPHABET.length];
  return key;
}

async function readCrew(key) {
  const { blobs } = await list({ prefix: `${PREFIX}${key}-`, limit: 100 });
  const newest = blobs.sort((a, b) => stampOf(b.pathname) - stampOf(a.pathname))[0];
  if (!newest) return null;
  const res = await fetch(newest.url, { cache: "no-store" });
  if (!res.ok) return null;
  const crew = await res.json().catch(() => null);
  return crew && Array.isArray(crew.members) ? crew : null;
}

async function writeCrew(crew) {
  crew.updated = Date.now();
  await put(`${PREFIX}${crew.key}-${crew.updated}.json`, JSON.stringify(crew), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });
  prune(crew.key); // best effort, never blocks the response
  return crew;
}

async function prune(key) {
  try {
    const { blobs } = await list({ prefix: `${PREFIX}${key}-`, limit: 100 });
    const stale = blobs
      .sort((a, b) => stampOf(b.pathname) - stampOf(a.pathname))
      .slice(KEEP_VERSIONS);
    if (stale.length) await del(stale.map((b) => b.url));
  } catch (err) {
    console.error("crew prune failed:", err);
  }
}

/// Today's number is only meaningful on the day it was set — a stale day reads
/// as 0 rather than being cleaned up on a schedule.
function view(crew) {
  const day = utcDay();
  return {
    ...crew,
    members: crew.members
      .map((m) => ({ ...m, today: m.todayDay === day ? m.today : 0 }))
      .sort((a, b) => b.best - a.best || a.joined - b.joined),
  };
}

function upsertMember(crew, { id, name, character, meters, todayMeters }) {
  let m = crew.members.find((x) => x.id === id);
  if (!m) {
    if (crew.members.length >= MAX_MEMBERS) return { error: "crew is full" };
    m = { id, joined: Date.now(), best: 0, today: 0, todayDay: 0 };
    crew.members.push(m);
  }
  m.name = name;                                   // identity refreshes on every touch
  if (character) m.character = character;
  if (Number.isInteger(meters)) m.best = Math.max(m.best, meters);
  if (Number.isInteger(todayMeters)) {
    const day = utcDay();
    if (m.todayDay !== day) { m.todayDay = day; m.today = 0; }
    m.today = Math.max(m.today, todayMeters);
  }
  m.updated = Date.now();
  return { member: m };
}

function readScore(v) {
  const n = Number(v);
  return Number.isInteger(n) && n >= 0 && n <= MAX_METERS ? n : null;
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-ghosted-token");
  if (req.method === "OPTIONS") return res.status(204).end();

  try {
    if (req.method === "GET") {
      const key = String(req.query.key || "");
      if (!KEY_RE.test(key)) return res.status(400).json({ error: "bad key" });
      const crew = await readCrew(key);
      if (!crew) return res.status(404).json({ error: "not found" });
      res.setHeader("Cache-Control", "no-store");
      return res.status(200).json({ crew: view(crew) });
    }

    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    // Same app token as share.js — a crew link is joinable by anyone who has it
    // (like a shared doc), but a stray curl shouldn't be able to spam one.
    const expected = process.env.GHOSTED_APP_TOKEN;
    if (expected && req.headers["x-ghosted-token"] !== expected) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const body = req.body || {};
    const action = String(body.action || "");
    const id = String(body.id || "");
    if (!/^[A-Za-z0-9-]{8,64}$/.test(id)) return res.status(400).json({ error: "bad id" });

    const rawPlayer = cleanName(body.playerName);
    if (!rawPlayer) return res.status(400).json({ error: "bad playerName" });
    const playerName = displayName(rawPlayer, id);
    const character = CHARACTERS.has(body.character) ? body.character : undefined;
    const meters = readScore(body.meters);
    const todayMeters = readScore(body.todayMeters);

    if (action === "create") {
      const rawCrew = cleanName(body.name);
      if (!rawCrew) return res.status(400).json({ error: "bad crew name" });
      const key = makeKey();
      const crew = { key, name: displayName(rawCrew, key), created: Date.now(), members: [] };
      upsertMember(crew, { id, name: playerName, character, meters, todayMeters });
      await writeCrew(crew);
      return res.status(200).json({
        crew: view(crew),
        key,
        url: `https://www.ingenuitylabs.net/ghosted/g/${key}`,
      });
    }

    if (action === "join") {
      const key = String(body.key || "");
      if (!KEY_RE.test(key)) return res.status(400).json({ error: "bad key" });
      const crew = await readCrew(key);
      if (!crew) return res.status(404).json({ error: "not found" });
      const r = upsertMember(crew, { id, name: playerName, character, meters, todayMeters });
      if (r.error) return res.status(409).json({ error: r.error });
      await writeCrew(crew);
      return res.status(200).json({ crew: view(crew) });
    }

    if (action === "submit") {
      const keys = Array.isArray(body.keys) ? body.keys.filter((k) => KEY_RE.test(k)) : [];
      if (!keys.length) return res.status(400).json({ error: "no keys" });
      const crews = [];
      // sequential on purpose: concurrent writes to the same store are exactly
      // the race this pattern is trying to keep narrow
      for (const key of keys.slice(0, MAX_KEYS_PER_SUBMIT)) {
        const crew = await readCrew(key);
        if (!crew) continue;                        // left/deleted crew is not an error
        if (!crew.members.some((m) => m.id === id)) continue; // not a member: ignore
        upsertMember(crew, { id, name: playerName, character, meters, todayMeters });
        await writeCrew(crew);
        crews.push(view(crew));
      }
      return res.status(200).json({ crews });
    }

    return res.status(400).json({ error: "bad action" });
  } catch (err) {
    console.error("crew endpoint failed:", err);
    return res.status(500).json({ error: "server error" });
  }
};
