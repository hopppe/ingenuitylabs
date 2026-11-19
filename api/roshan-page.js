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
    title: "AI for Cafés & Restaurants in Saudi Arabia | Ingenuity Labs",
    description:
      "WhatsApp ordering, an Arabic voice barista, QR menus, automatic restocking, staffing and review replies — AI built for Saudi cafés and restaurants. Try every feature live on our demo café.",
  },
  ar: {
    path: "/ar/roshan",
    lang: "ar",
    title: "الذكاء الاصطناعي للمقاهي والمطاعم في السعودية | Ingenuity Labs",
    description:
      "طلبات واتساب، باريستا صوتي بالعربي، منيو QR، إعادة تعبئة المخزون تلقائياً، جدولة الموظفين والرد على التقييمات — جرّب كل ميزة مباشرة على مقهانا التجريبي.",
  },
};

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Drop the shell's default title/description/canonical/og/twitter tags.
const DEFAULT_TAGS =
  /<title>[\s\S]*?<\/title>|<meta\s+(?:name|property)="(?:description|og:[^"]+|twitter:[^"]+)"[^>]*>|<link\s+rel="canonical"[^>]*>/gi;

const headTags = (page) => {
  const url = `${SITE}${page.path}`;
  const image = `${SITE}/roshan-og.jpg`;
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
