import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./KingdomArabic.css";
import Seo from "../components/Seo";
import appIcon from "../assets/kingdomarabic/icon.webp";
import shotTapWord from "../assets/kingdomarabic/tap-word.webp";
import shotWordStudy from "../assets/kingdomarabic/word-study.webp";
import shotFlashcard from "../assets/kingdomarabic/card-front.webp";
import shotMemorize from "../assets/kingdomarabic/memorize.webp";
import shotProgress from "../assets/kingdomarabic/progress.webp";
import {
  APP_ID,
  APP_STORE_URL,
  DEMO_VERSE,
  EXTRAS,
  FAQS,
  OG_IMAGE,
  PAGE_PATH,
  PLAY_STORE_URL,
  SEO_DESCRIPTION,
  SEO_TITLE,
  SHOWCASE,
  STRUCTURED_DATA,
} from "./kingdomArabicContent";

const SHOTS = {
  "tap-word": shotTapWord,
  "word-study": shotWordStudy,
  "card-front": shotFlashcard,
  memorize: shotMemorize,
  progress: shotProgress,
};

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=DM+Serif+Display&display=swap";

// Schema.org JSON is static and authored by us, so inlining it is safe.
const STRUCTURED_DATA_JSON = JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c");

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" className="ka-badge-icon" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayLogo = () => (
  <svg viewBox="0 0 24 24" className="ka-badge-icon" fill="currentColor" aria-hidden="true">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

const StoreBadges = () => (
  <div className="ka-badges">
    <a
      className="ka-badge"
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Kingdom Arabic on the App Store"
    >
      <AppleLogo />
      <span className="ka-badge-text">
        <span className="ka-badge-small">Download on the</span>
        <span className="ka-badge-big">App Store</span>
      </span>
    </a>
    <a
      className="ka-badge"
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Kingdom Arabic on Google Play"
    >
      <PlayLogo />
      <span className="ka-badge-text">
        <span className="ka-badge-small">Get it on</span>
        <span className="ka-badge-big">Google Play</span>
      </span>
    </a>
  </div>
);

const TrustLine = () => (
  <p className="ka-trust">Free · Works offline · No account · iPhone &amp; Android</p>
);

const Phone = ({ src, alt, eager = false }) => (
  <div className="ka-phone">
    <img
      src={src}
      alt={alt}
      width="603"
      height="1311"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  </div>
);

// The app's core interaction, playable on the page: tap a word, see its gloss.
const TapDemo = () => {
  const [active, setActive] = useState(1);
  const word = DEMO_VERSE.words[active];

  return (
    <div className="ka-demo">
      <p className="ka-demo-hint">Try it — tap a word</p>
      <p className="ka-demo-verse" dir="rtl" lang="ar">
        {DEMO_VERSE.words.map(({ ar }, i) => (
          <button
            key={`${ar}-${i}`}
            type="button"
            className={`ka-word${i === active ? " is-active" : ""}`}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            {ar}
          </button>
        ))}
      </p>
      <div className="ka-demo-gloss" aria-live="polite">
        <span className="ka-demo-ar" lang="ar">
          {word.ar.replace(/[.،]/g, "")}
        </span>
        <span className="ka-demo-arrow" aria-hidden="true">
          →
        </span>
        <span className="ka-demo-en">{word.en}</span>
      </div>
      <p className="ka-demo-ref">
        {DEMO_VERSE.english} <span>— {DEMO_VERSE.reference}</span>
      </p>
    </div>
  );
};

const KingdomArabic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="kingdom-arabic">
      <Seo
        title={SEO_TITLE}
        description={SEO_DESCRIPTION}
        path={PAGE_PATH}
        image={OG_IMAGE}
        imageAlt="Kingdom Arabic: read the Bible in Arabic"
      >
        <meta name="apple-itunes-app" content={`app-id=${APP_ID}`} />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      </Seo>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: STRUCTURED_DATA_JSON }}
      />

      <section className="ka-hero">
        <div className="ka-hero-watermark" aria-hidden="true" lang="ar">
          فِي الْبَدْءِ كَانَ الْكَلِمَةُ
        </div>
        <div className="ka-wrap ka-hero-grid">
          <div className="ka-hero-copy">
            <div className="ka-brand">
              <img src={appIcon} alt="" width="56" height="56" className="ka-brand-icon" />
              <span>Kingdom Arabic</span>
            </div>
            <h1>
              Learn Arabic <em>through the Bible</em>
            </h1>
            <p className="ka-lead">
              Read all 66 books in Arabic and tap any word to see what it means. Every word you
              tap becomes a flashcard — so the more you read, the more you know.
            </p>
            <StoreBadges />
            <TrustLine />
          </div>
          <div className="ka-hero-visual">
            <Phone src={shotTapWord} alt={SHOWCASE[0].alt} eager />
            <div className="ka-float ka-float-top" aria-hidden="true">
              ✓ Saved to flashcards
            </div>
            <div className="ka-float ka-float-bottom" aria-hidden="true">
              🔥 38-day streak
            </div>
          </div>
        </div>
      </section>

      <section className="ka-demo-section" aria-label="Try tapping a word">
        <div className="ka-wrap">
          <TapDemo />
        </div>
      </section>

      <section className="ka-showcase" aria-label="Features">
        <div className="ka-wrap">
          {SHOWCASE.map(({ key, eyebrow, title, body, points, alt }, i) => (
            <article key={key} className={`ka-row${i % 2 ? " ka-row-flip" : ""}`}>
              <div className="ka-row-visual">
                <Phone src={SHOTS[key]} alt={alt} />
              </div>
              <div className="ka-row-copy">
                <p className="ka-eyebrow">
                  <span>{String(i + 1).padStart(2, "0")}</span> {eyebrow}
                </p>
                <h2>{title}</h2>
                <p>{body}</p>
                <ul>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ka-extras" aria-labelledby="ka-extras-h">
        <div className="ka-wrap">
          <h2 id="ka-extras-h" className="ka-section-title">
            Everything stays on your phone
          </h2>
          <div className="ka-extras-grid">
            {EXTRAS.map(({ icon, title, body }) => (
              <div key={title} className="ka-extra">
                <span className="ka-extra-icon" aria-hidden="true">
                  {icon}
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ka-faq" aria-labelledby="ka-faq-h">
        <div className="ka-wrap ka-faq-wrap">
          <h2 id="ka-faq-h" className="ka-section-title">
            Questions
          </h2>
          {FAQS.map(({ q, a }, i) => (
            <details key={q} className="ka-faq-item" open={i === 0}>
              <summary>
                <h3>{q}</h3>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="ka-final" aria-labelledby="ka-final-h">
        <div className="ka-wrap">
          <img src={appIcon} alt="" width="84" height="84" className="ka-final-icon" loading="lazy" />
          <h2 id="ka-final-h">
            Start with one verse <em>today</em>
          </h2>
          <p className="ka-final-sub">Download Kingdom Arabic free for iPhone and Android.</p>
          <StoreBadges />
          <TrustLine />
        </div>
      </section>

      <div className="ka-support">
        <div className="ka-wrap">
          <p>
            Questions or feedback? Email{" "}
            <a href="mailto:ethan@ingenuitylabs.net">ethan@ingenuitylabs.net</a> — we usually reply
            within a business day.
          </p>
          <Link to="/kingdom-arabic-privacy">Privacy Policy</Link>
        </div>
      </div>
    </main>
  );
};

export default KingdomArabic;
