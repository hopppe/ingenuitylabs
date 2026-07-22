/*
 * Post-build prerender: renders every route in the sitemap to static HTML so
 * crawlers that don't execute JavaScript (GPTBot, ClaudeBot, PerplexityBot,
 * and most other AI crawlers) see full page content.
 *
 * Fail-soft by design: any error logs a warning and exits 0 so a broken
 * prerender never blocks a deploy — the site just ships client-rendered.
 */

const fs = require("fs");
const path = require("path");
const http = require("http");
const { execSync } = require("child_process");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const PORT = 4519;

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".map": "application/json",
  ".woff2": "font/woff2",
};

function serveBuild() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    let filePath = path.join(BUILD_DIR, urlPath);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(BUILD_DIR, "index.html"); // SPA fallback
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(res);
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

// Routes that shouldn't be in the sitemap but still deserve real HTML.
const EXTRA_ROUTES = [
  "/privacy-policy",
  "/kingdom-arabic-privacy",
  "/kingdom-arabic/download",
  "/star-date-privacy",
  "/star-date-terms",
  "/prayer-pause-privacy",
  "/prayer-pause-terms",
  "/salah-shield-privacy",
  "/kneefix-privacy",
  "/kneefix-terms",
  "/salah-shield-terms",
  "/aiclass-form",
  "/ghostrace",
  "/ghostrace-privacy",
];

function routesFromSitemap() {
  const xml = fs.readFileSync(path.join(BUILD_DIR, "sitemap.xml"), "utf8");
  const routes = [...xml.matchAll(/<loc>https:\/\/ingenuitylabs\.net(\/[^<]*)<\/loc>/g)].map(
    (m) => m[1]
  );
  return [...new Set([...routes, ...EXTRA_ROUTES])];
}

async function launchChromium(playwright) {
  try {
    return await playwright.chromium.launch();
  } catch (err) {
    console.log("[prerender] Chromium not found; installing…");
    execSync("npx playwright install chromium", { stdio: "inherit" });
    return await playwright.chromium.launch();
  }
}

async function main() {
  const playwright = require("playwright");
  const server = await serveBuild();
  const browser = await launchChromium(playwright);
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();

  const routes = routesFromSitemap();
  for (const route of routes) {
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: "networkidle",
      timeout: 30000,
    });
    await page.waitForTimeout(400);
    const html = await page.content();
    const outDir =
      route === "/" ? BUILD_DIR : path.join(BUILD_DIR, route.replace(/^\//, ""));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), "<!DOCTYPE html>" + html.replace(/^<!DOCTYPE html>/i, ""));
    console.log(`[prerender] ${route} → ${path.relative(BUILD_DIR, outDir) || "."}/index.html`);
  }

  await browser.close();
  server.close();
  console.log(`[prerender] done — ${routes.length} routes prerendered`);
}

main().catch((err) => {
  console.warn("[prerender] skipped:", err.message);
  process.exit(0); // never block the build
});
