// Serves the SPA shell for /roshan and /ar/roshan with page-specific title and
// OG tags, so WhatsApp/iMessage/LinkedIn previews of the sales link show the
// café offering instead of the site-wide defaults. (scripts/prerender.js
// would do this, but Chromium can't launch in Vercel's build, so it skips.)
// vercel.json rewrites /roshan, /Roshan and /ar/roshan here as ?lang=en|ar.
const SITE = "https://www.ingenuitylabs.net";

const PAGES = {
  en: {
    path: "/roshan",
    lang: "en",
    image: "/roshan-og.jpg",
    title: "AI for Cafés & Restaurants in Saudi Arabia | Ingenuity Labs",
    description:
      "We build AI for cafés and restaurants: it answers your WhatsApp, takes orders, reorders stock, plans staff and replies to reviews, in Arabic and English. Try it live on our demo café.",
  },
  ar: {
    path: "/ar/roshan",
    lang: "ar",
    image: "/roshan-og-ar.jpg",
    title: "الذكاء الاصطناعي للمقاهي والمطاعم في السعودية | Ingenuity Labs",
    description:
      "نبني حلول الذكاء الاصطناعي للمقاهي والمطاعم: يرد على الواتساب، ويستقبل الطلبات، ويطلب المخزون، وينظّم دوام الموظفين، ويرد على التقييمات. جرّبها مباشرة على مقهانا التجريبي.",
  },
};

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Drop the shell's default title/description/canonical/og/twitter tags.
const DEFAULT_TAGS =
  /<title>[\s\S]*?<\/title>|<meta\s+(?:name|property)="(?:description|og:[^"]+|twitter:[^"]+)"[^>]*>|<link\s+rel="canonical"[^>]*>/gi;

const headTags = (page) => {
  const url = `${SITE}${page.path}`;
  const image = `${SITE}${page.image}`;
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Ingenuity Labs">`,
    `<meta property="og:title" content="${esc(page.title)}">`,
    `<meta property="og:description" content="${esc(page.description)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(page.title)}">`,
    `<meta name="twitter:description" content="${esc(page.description)}">`,
    `<meta name="twitter:image" content="${image}">`,
  ].join("\n");
};

module.exports = async (req, res) => {
  const page = PAGES[req.query.lang === "ar" ? "ar" : "en"];
  const host = req.headers["x-forwarded-host"] || req.headers.host;

  let shell;
  try {
    const r = await fetch(`https://${host}/index.html`);
    if (!r.ok) throw new Error(`shell fetch ${r.status}`);
    shell = await r.text();
  } catch (err) {
    console.error("[roshan-page] could not load SPA shell:", err.message);
    res.setHeader("Location", `${SITE}/`);
    return res.status(302).end();
  }

  const html = shell
    .replace(DEFAULT_TAGS, "")
    .replace(/<html[^>]*>/i, `<html lang="${page.lang}">`)
    .replace(/<\/head>/i, `${headTags(page)}\n</head>`);

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=300, stale-while-revalidate=86400");
  return res.status(200).send(html);
};
