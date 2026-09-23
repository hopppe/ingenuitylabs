import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PrayerPause.css";
import Seo from "../components/Seo";
import appIcon from "../assets/prayerpause-icon.png";
import shotHome from "../assets/prayerpause/home-dark.webp";
import shotMood from "../assets/prayerpause/mood-check.webp";
import shotPrayer from "../assets/prayerpause/prayer.webp";
import shotStreak from "../assets/prayerpause/streak-calendar.webp";
import {
  APP_ID,
  APP_STORE_URL,
  FAQS,
  FEATURES,
  UPCOMING_LANGUAGES,
  OG_IMAGE,
  PAGE_PATH,
  SEO_DESCRIPTION,
  SEO_TITLE,
  STEPS,
  STRUCTURED_DATA,
} from "./prayerPauseContent";

const SCREENSHOTS = [
  { src: shotHome, alt: "Prayer Pause home screen showing the next prayer time" },
  { src: shotMood, alt: "Mood check-in asking how your relationship with God is today" },
  { src: shotPrayer, alt: "Guided prayer screen with an I've Prayed Today button" },
  { src: shotStreak, alt: "Prayer streak calendar showing consecutive days of prayer" },
];

// Schema.org JSON is static and authored by us, so inlining it is safe.
const STRUCTURED_DATA_JSON = JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c");

const AppStoreButton = ({ label = "Download on the App Store" }) => (
  <a
    className="pp-store-btn"
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${label} – Prayer Pause for iPhone (opens the App Store)`}
  >
    <span className="pp-store-btn-small">Free on iPhone</span>
    <span className="pp-store-btn-big">{label}</span>
  </a>
);

const TrustLine = () => (
  <p className="pp-trust">No subscription · No ads · No account · iPhone, iOS 17+</p>
);

const PrayerPause = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="prayer-pause">
      <Seo
        title={SEO_TITLE}
        description={SEO_DESCRIPTION}
        path={PAGE_PATH}
        image={OG_IMAGE}
        imageAlt="Prayer Pause app: put God first, before your phone"
      >
        <meta name="apple-itunes-app" content={`app-id=${APP_ID}`} />
      </Seo>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: STRUCTURED_DATA_JSON }}
      />

      <div className="prayer-pause-container">
        <header className="prayer-pause-header">
          <div className="app-icon-container">
            <img
              src={appIcon}
              alt="Prayer Pause app icon"
              className="app-icon"
              width="120"
              height="120"
            />
          </div>
          <p className="pp-brand">Prayer Pause</p>
          <h1>The Christian screen time app that has you pray before you scroll</h1>
          <p className="prayer-pause-tagline">
            Put God first, before your phone. Prayer Pause locks the apps you choose until you
            pray — and every feature is free.
          </p>
          <div className="pp-cta">
            <AppStoreButton />
            <TrustLine />
          </div>
        </header>

        <section className="pp-shots" aria-label="App screenshots">
          {SCREENSHOTS.map(({ src, alt }, i) => (
            <img
              key={src}
              src={src}
              alt={alt}
              width="390"
              height="845"
              loading={i < 2 ? "eager" : "lazy"}
              decoding="async"
              className="pp-shot"
            />
          ))}
        </section>

        <section className="prayer-pause-hero" aria-labelledby="pp-how">
          <div className="hero-content">
            <h2 id="pp-how">How the prayer lock works</h2>
            <p>
              Prayer Pause is an app blocker for Christians who feel their phone gets more
              attention than God. It uses Apple's Screen Time to lock distracting apps at the
              times you choose, and unlocks them once you've prayed.
            </p>
          </div>
          <ol className="pp-steps">
            {STEPS.map(({ title, body }, i) => (
              <li key={title} className="pp-step">
                <span className="pp-step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="pp-free" aria-labelledby="pp-free-h">
          <h2 id="pp-free-h">A free prayer lock app — no subscription, ever</h2>
          <p className="pp-quote">
            “A paywall shouldn't stand between you and getting closer to God.”
          </p>
          <p>
            Most prayer lock and Bible lock apps charge a subscription — some up to around $100 a
            year. Prayer Pause gives you all of it for free: app blocking, guided prayer, the
            Bible verse of the day, reading plans, scripture memory and your prayer journal. No
            ads, no trial, no premium tier.
          </p>
        </section>

        <section className="prayer-pause-features" aria-labelledby="pp-features-h">
          <h2 id="pp-features-h" className="pp-section-title">
            More than a Bible app blocker
          </h2>
          <p className="pp-section-lead">
            Once your apps are locked, Prayer Pause gives you something better to do with that
            moment.
          </p>
          <div className="feature-grid">
            {FEATURES.map(({ icon, title, items }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  {icon}
                </div>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="pp-languages">English today · {UPCOMING_LANGUAGES.join(" · ")} coming soon</p>
        </section>

        <section className="pp-faq" aria-labelledby="pp-faq-h">
          <h2 id="pp-faq-h" className="pp-section-title">
            Frequently asked questions
          </h2>
          {FAQS.map(({ q, a }, i) => (
            <details key={q} className="pp-faq-item" open={i === 0}>
              <summary>
                <h3>{q}</h3>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </section>

        <section className="pp-final-cta" aria-labelledby="pp-final-h">
          <img src={appIcon} alt="" className="pp-final-icon" width="72" height="72" loading="lazy" />
          <h2 id="pp-final-h">Put God first, before your phone</h2>
          <p>Block distractions. Start with prayer. Download Prayer Pause for iPhone today.</p>
          <AppStoreButton label="Get Prayer Pause on the App Store" />
          <TrustLine />
        </section>

        <section className="prayer-pause-support" aria-labelledby="pp-support-h">
          <div className="support-content">
            <h2 id="pp-support-h">Support &amp; contact</h2>
            <p>
              Need help with Prayer Pause or have a question about the app? We're happy to help
              with any issue or feedback.
            </p>
            <div className="contact-info">
              <p>
                <strong>Email support:</strong>{" "}
                <a href="mailto:ethan@ingenuitylabs.net" className="support-email">
                  ethan@ingenuitylabs.net
                </a>
              </p>
              <p className="support-note">
                We typically respond to support inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </section>

        <div className="privacy-policy-link">
          <Link to="/prayer-pause-privacy">Privacy Policy</Link>
          <span className="link-separator"> | </span>
          <Link to="/prayer-pause-terms">Terms of Use</Link>
        </div>
      </div>
    </main>
  );
};

export default PrayerPause;
