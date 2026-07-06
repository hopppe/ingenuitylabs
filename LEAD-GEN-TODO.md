# Lead-Gen TODO — off-site work to start getting found

The site itself is ready: prerendered for AI crawlers, sitemap, structured data,
niche landing pages, llms.txt, and direct contact everywhere. What's left is
off-site — making Google, Bing, and AI assistants (ChatGPT, Claude, Gemini,
Perplexity) trust and recommend us. None of this is code; it's accounts,
listings, and asks. Roughly in order of impact:

## 1. Google Search Console (~10 min) — do this first

1. Go to https://search.google.com/search-console and add `ingenuitylabs.net` as a property.
2. Verify ownership — easiest via DNS TXT record (or through the Vercel dashboard under Domains, which can verify for you).
3. Left menu → **Sitemaps** → enter `sitemap.xml` → Submit. One time only; Google re-fetches it automatically afterward.
4. From then on, check **Performance** monthly: it shows which queries surface us and which niche pages get impressions. This is how we decide which niches to double down on.

## 2. Bing Webmaster Tools (~10 min)

ChatGPT's web search runs on Bing's index, so this directly affects ChatGPT recommendations.

1. Go to https://www.bing.com/webmasters.
2. Use "Import from Google Search Console" (do #1 first) — it copies the site and sitemap over in one click.

## 3. Get listed where AI assistants look for evidence

AI models recommend businesses based on what *third parties* say. Self-description isn't enough. Create/claim, with consistent name + description + `ingenuitylabs.net` link:

- [ ] **Google Business Profile** (business.google.com) — list the Jeddah location. Helps "AI developers near me / in Jeddah" for both Google and Gemini.
- [ ] **LinkedIn company page** — post the Friendly Fixers case study there.
- [ ] **Clutch.co** profile (custom software / AI development category) — heavily crawled, shows up constantly in "best AI development firms" AI answers.
- [ ] **Crunchbase** company profile.
- [ ] Optional: GoodFirms, DesignRush (same category-directory play).

Use the same one-liner everywhere: "Ingenuity Labs builds custom AI solutions, mobile apps, and websites for businesses — AI quoting engines, meeting-prep assistants, and CRM automation, wired into the tools you already use."

## 4. Ask Friendly Fixers for a public mention

One real, named, independently-published client reference is worth more to AI retrieval than anything we write about ourselves. Any of:

- [ ] A testimonial + link on friendlyfixersllc.com ("Our AI quoting console was built by Ingenuity Labs").
- [ ] A Google review of Ingenuity Labs (once the Business Profile from #3 exists).
- [ ] Their permission to publish a fuller case study with numbers (time saved per quote, close-rate change) — then we expand /ai-for-home-services with real metrics.

## 5. Verify it's working (2–4 weeks after deploy)

Ask ChatGPT, Claude, Perplexity, and Gemini (with web search enabled):

- "AI quoting software for handyman companies"
- "custom AI development company in Jeddah / Saudi Arabia"
- "AI meeting prep tool custom built"
- "who can build custom AI for my real estate business"

If we don't surface, check Search Console/Bing for whether the niche pages are indexed, and prioritize more third-party mentions (#3, #4).

## 6. Later / nice-to-have

- More niche pages on the existing `NichePage` template once data shows what pulls: AI for clinics/dental, AI for law firms, AI for restaurants — one page per niche where we can point at proof.
- An `og-image.jpg` in `public/` (referenced by meta tags but the file doesn't exist yet) so link previews look sharp when the site is shared.
- If niche pages gain traction and we want to push harder: migrate marketing pages to Next.js for true server rendering (current Playwright prerender works but is a build-time approximation).
