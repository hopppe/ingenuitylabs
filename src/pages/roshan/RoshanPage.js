import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Seo from "../../components/Seo";
import { EN, AR, DEMO_URL, CONTACT_EMAIL } from "./content";
import "../Home.css";
import "../AIHomeServices.css";
import "./Roshan.css";

const ARABIC_FONT =
  "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;700&display=swap";

const LANG_KEY = "rs-lang";

const readLangChoice = () => {
  try {
    return window.localStorage.getItem(LANG_KEY);
  } catch {
    return null;
  }
};

const saveLangChoice = (lang) => {
  try {
    window.localStorage.setItem(LANG_KEY, lang);
  } catch {
    // storage blocked (private mode): the toggle still works for this visit
  }
};

// Arabic-language phones opening the English link land on the Arabic page,
// unless the visitor picked a language with the toggle before.
const useArabicByDefault = (t) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (t.lang !== "en") return;
    const choice = readLangChoice();
    const prefersArabic = (navigator.languages || [navigator.language || ""]).some(
      (l) => String(l).toLowerCase().startsWith("ar")
    );
    if (choice !== "en" && (choice === "ar" || prefersArabic)) {
      navigate(t.altPath, { replace: true });
    }
  }, [t, navigate]);
};

const Glance = ({ t }) => (
  <section className="rs-glance" aria-label={t.glanceKicker}>
    {t.glance.map((g) => (
      <div className="rs-glance-item" key={g.title}>
        <h2>{g.title}</h2>
        <p>{g.desc}</p>
      </div>
    ))}
  </section>
);

const External = ({ href, className, children }) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const MenuBoard = ({ t }) => (
  <aside className="rs-board" aria-label={t.board.title}>
    <div className="rs-board-head">
      <p className="rs-board-title">{t.board.title}</p>
      <p className="rs-board-sub">{t.board.subtitle}</p>
    </div>
    {t.sections.map((section) => (
      <div className="rs-board-group" key={section.id}>
        <p className="rs-board-group-name">{section.name}</p>
        <ul>
          {section.items.map((item) => (
            <li key={item.short}>
              <a href={`#${section.id}-${item.short}`} className="rs-board-item">
                <span>{item.short}</span>
                <span className="rs-board-dots" aria-hidden="true" />
                <span className="rs-board-live">{t.board.live}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const MenuSection = ({ section, tryIt }) => (
  <div className="rs-section">
    <div className="rs-section-head">
      <h2>{section.name}</h2>
      <p>{section.note}</p>
    </div>
    <div className="services-list">
      {section.items.map((item) => (
        <article
          className="service-row rs-item"
          key={item.name}
          id={`${section.id}-${item.short}`}
        >
          <h3>{item.name}</h3>
          <div className="service-detail">
            <p>{item.desc}</p>
            <p className="service-proof">{item.replaces}</p>
            <External href={item.link} className="rs-try">
              {tryIt} <span aria-hidden="true">↗</span>
            </External>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const RoshanPage = ({ t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useArabicByDefault(t);

  const contactHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    t.lang === "ar" ? "عرض الذكاء الاصطناعي للمقاهي" : "AI for cafés — walkthrough"
  )}`;

  return (
    <main className={`home niche rs rs-${t.lang}`} dir={t.dir} lang={t.lang}>
      <Seo {...t.seo} path={t.path} image={t.lang === "ar" ? "/roshan-og-ar.jpg" : "/roshan-og.jpg"} imageAlt={t.seo.title}>
        <link rel="alternate" hrefLang="en" href="https://ingenuitylabs.net/roshan" />
        <link rel="alternate" hrefLang="ar" href="https://ingenuitylabs.net/ar/roshan" />
        {t.lang === "ar" && (
          <link rel="stylesheet" href={ARABIC_FONT} precedence="default" />
        )}
      </Seo>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: t.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <section className="home-hero niche-hero rs-hero">
        <div className="hero-text">
          <div className="rs-hero-top">
            <p className="hero-meta">{t.hero.meta}</p>
            <Link
              to={t.altPath}
              className="rs-lang"
              lang={t.lang === "ar" ? "en" : "ar"}
              onClick={() => saveLangChoice(t.lang === "ar" ? "en" : "ar")}
            >
              {t.altLabel}
            </Link>
          </div>
          <h1>
            {t.hero.title.map((line, i) => (
              <React.Fragment key={line}>
                {i > 0 && " "}
                <span className="hero-line">{line}</span>
              </React.Fragment>
            ))}
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>
          <div className="hero-actions">
            <External href={DEMO_URL} className="btn-solid">
              {t.hero.primary} <span aria-hidden="true">↗</span>
            </External>
            <a href={contactHref} className="btn-quiet">
              {t.hero.secondary}
            </a>
          </div>
        </div>
        <div className="hero-demo">
          <MenuBoard t={t} />
        </div>
      </section>

      <Glance t={t} />

      <section className="services rs-menu">
        <p className="kicker">{t.menuKicker}</p>
        {t.sections.map((section) => (
          <MenuSection key={section.id} section={section} tryIt={t.tryIt} />
        ))}
      </section>

      <section className="rs-demo">
        <div className="rs-demo-text">
          <p className="kicker">{t.demo.kicker}</p>
          <h2>{t.demo.title}</h2>
          <p>{t.demo.body}</p>
          <p>{t.demo.body2}</p>
          <External href={DEMO_URL} className="btn-solid">
            {t.demo.cta} <span aria-hidden="true">↗</span>
          </External>
        </div>
        <ul className="rs-demo-links">
          {t.demo.links.map((l) => (
            <li key={l.href}>
              <External href={l.href}>
                <span>{l.label}</span>
                <span className="rs-demo-url" dir="ltr">
                  {l.href.replace("https://", "")}
                </span>
              </External>
            </li>
          ))}
        </ul>
      </section>

      <section className="rs-steps">
        <p className="kicker">{t.stepsKicker}</p>
        <ol>
          {t.steps.map((s, i) => (
            <li key={s.title}>
              <span className="rs-step-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rs-why">
        <p className="kicker">{t.whyKicker}</p>
        <div className="rs-why-grid">
          {t.why.map((w) => (
            <div key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="niche-faq">
        <div className="faq-list">
          {t.faqs.map((faq) => (
            <details className="faq-item" key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-inner">
          <p className="kicker kicker-light">{t.cta.kicker}</p>
          <h2>{t.cta.title}</h2>
          <p className="cta-sub">{t.cta.sub}</p>
          <div className="cta-actions">
            <a href={contactHref} className="btn-light">
              {t.cta.primary}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="cta-email">
              {t.cta.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export const Roshan = () => <RoshanPage t={EN} />;
export const RoshanAr = () => <RoshanPage t={AR} />;
