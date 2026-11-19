import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Seo from "../../components/Seo";
import { EN, AR, DEMO_URL, CONTACT_EMAIL } from "./content";
import HeroArt from "./HeroArt";
import { GLANCE_MOCKS } from "./GlanceMocks";
import { Glyph, ICON_BY_PATH } from "./glyphs";
import shotSite from "../../assets/roshan/demo-site.jpg";
import shotBarista from "../../assets/roshan/demo-barista.jpg";
import shotStudio from "../../assets/roshan/demo-studio.jpg";
import "./Roshan.css";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Readex+Pro:wght@300..700&display=swap";
const SHOTS = { site: shotSite, barista: shotBarista, studio: shotStudio };
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

const External = ({ href, className, children }) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const iconFor = (link) => ICON_BY_PATH[link.replace(DEMO_URL, "")] || "brief";

const Hero = ({ t, contactHref }) => {
  const other = t.lang === "ar" ? "en" : "ar";
  return (
    <section className="rs-hero">
      <div className="rs-hero-text">
        <div className="rs-hero-top">
          <p className="rs-meta">{t.hero.meta}</p>
          <Link
            to={t.altPath}
            className="rs-lang"
            lang={other}
            onClick={() => saveLangChoice(other)}
          >
            {t.altLabel}
          </Link>
        </div>
        <h1>
          {t.hero.title.map((line, i) => (
            <React.Fragment key={line}>
              {i > 0 && " "}
              <span className="rs-h1-line">{line}</span>
            </React.Fragment>
          ))}
        </h1>
        <p className="rs-hero-sub">{t.hero.sub}</p>
        <div className="rs-actions">
          <External href={DEMO_URL} className="rs-btn rs-btn-mint">
            {t.hero.primary}
          </External>
          <a href={contactHref} className="rs-btn rs-btn-ghost">
            {t.hero.secondary}
          </a>
        </div>
      </div>
      <div className="rs-hero-art">
        <HeroArt labels={t.art.nodes} title={t.art.label} />
      </div>
    </section>
  );
};

const Glance = ({ t }) => (
  <section className="rs-glance" aria-label={t.glanceKicker}>
    {t.glance.map((g, i) => {
      const Mock = GLANCE_MOCKS[i];
      return (
        <div className="rs-glance-item" key={g.title}>
          {Mock && <Mock m={t.mocks} />}
          <h2>{g.title}</h2>
          <p>{g.desc}</p>
        </div>
      );
    })}
  </section>
);

const Menu = ({ t }) => (
  <section className="rs-menu" aria-labelledby="rs-menu-title">
    <div className="rs-section-head">
      <h2 id="rs-menu-title">{t.board.title}</h2>
      <p>{t.board.subtitle}</p>
    </div>
    {t.sections.map((section) => (
      <div className={`rs-group rs-group-${section.id}`} key={section.id}>
        <div className="rs-group-head">
          <h3>{section.name}</h3>
          <p>{section.note}</p>
        </div>
        <ul className="rs-items">
          {section.items.map((item) => (
            <li className="rs-item" key={item.name}>
              <span className="rs-item-icon">
                <Glyph name={iconFor(item.link)} />
              </span>
              <div className="rs-item-body">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <p className="rs-item-replaces">{item.replaces}</p>
              </div>
              <External href={item.link} className="rs-try">
                {t.tryIt} <span aria-hidden="true">↗</span>
              </External>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

const DemoCafe = ({ t }) => (
  <section className="rs-demo">
    <div className="rs-demo-text">
      <h2>{t.demo.title}</h2>
      <p>{t.demo.body}</p>
      <p>{t.demo.body2}</p>
      <External href={DEMO_URL} className="rs-btn rs-btn-navy">
        {t.demo.cta}
      </External>
    </div>
    <div className="rs-shots">
      {t.shots.map((shot, i) => (
        <External href={t.demo.links[i].href} className={`rs-shot rs-shot-${i}`} key={shot.key}>
          <span className="rs-shot-bar" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <img src={SHOTS[shot.key]} alt={shot.caption} width="1280" height="800" loading="lazy" />
          <span className="rs-shot-caption">{shot.caption}</span>
        </External>
      ))}
    </div>
  </section>
);

const Steps = ({ t }) => (
  <section className="rs-steps">
    <h2>{t.stepsKicker}</h2>
    <ol>
      {t.steps.map((s, i) => (
        <li key={s.title}>
          <span className="rs-step-num">{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </li>
      ))}
    </ol>
  </section>
);

const Why = ({ t }) => (
  <section className="rs-why">
    <h2>{t.whyKicker}</h2>
    <div className="rs-why-grid">
      {t.why.map((w) => (
        <div key={w.title}>
          <h3>{w.title}</h3>
          <p>{w.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Faq = ({ t }) => (
  <section className="rs-faq">
    <h2>{t.faqTitle}</h2>
    <div className="rs-faq-list">
      {t.faqs.map((faq) => (
        <details key={faq.q}>
          <summary>{faq.q}</summary>
          <p>{faq.a}</p>
        </details>
      ))}
    </div>
  </section>
);

const Cta = ({ t, contactHref }) => (
  <section className="rs-cta">
    <h2>{t.cta.title}</h2>
    <p>{t.cta.sub}</p>
    <div className="rs-actions">
      <a href={contactHref} className="rs-btn rs-btn-mint">
        {t.cta.primary}
      </a>
      <a href={`mailto:${CONTACT_EMAIL}`} className="rs-cta-email">
        {t.cta.email}
      </a>
    </div>
  </section>
);

const RoshanPage = ({ t }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useArabicByDefault(t);

  const contactHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    t.lang === "ar" ? "عرض الذكاء الاصطناعي للمقاهي" : "AI for cafés: walkthrough"
  )}`;

  return (
    <main className={`rs rs-${t.lang}`} dir={t.dir} lang={t.lang}>
      <Seo
        {...t.seo}
        path={t.path}
        image={t.lang === "ar" ? "/roshan-og-ar.jpg" : "/roshan-og.jpg"}
        imageAlt={t.seo.title}
      >
        <link rel="alternate" hrefLang="en" href="https://ingenuitylabs.net/roshan" />
        <link rel="alternate" hrefLang="ar" href="https://ingenuitylabs.net/ar/roshan" />
        <link rel="stylesheet" href={FONTS} precedence="default" />
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
      <Hero t={t} contactHref={contactHref} />
      <Glance t={t} />
      <Menu t={t} />
      <DemoCafe t={t} />
      <Steps t={t} />
      <Why t={t} />
      <Faq t={t} />
      <Cta t={t} contactHref={contactHref} />
    </main>
  );
};

export const Roshan = () => <RoshanPage t={EN} />;
export const RoshanAr = () => <RoshanPage t={AR} />;
