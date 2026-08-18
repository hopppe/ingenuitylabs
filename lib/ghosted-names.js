// Shared name hygiene for Ghosted endpoints (leaderboard + crews).
// Extracted from api/ghosted-leaderboard.js so the crew board applies the exact
// same filtering; the leaderboard still carries its own copy until it's safe to
// refactor a live endpoint.

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
module.exports = { cleanName, isProfane, displayName };
