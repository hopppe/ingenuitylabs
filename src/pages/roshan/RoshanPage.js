import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Seo from "../../components/Seo";
import { EN, AR, DEMO_URL, CONTACT_EMAIL } from "./content";
import OrbitArt from "./OrbitArt";
import { GLANCE_MOCKS } from "./GlanceMocks";
import { Glyph } from "./glyphs";
import shotSite from "../../assets/roshan/demo-site.jpg";
import shotBarista from "../../assets/roshan/demo-barista.jpg";
import shotStudio from "../../assets/roshan/demo-studio.jpg";
import "./Roshan.css";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,300..500&family=Geist:wght@400..600&family=Noto+Naskh+Arabic:wght@400..600&family=IBM+Plex+Sans+Arabic:wght@400;500&display=swap";
const SHOTS = { site: shotSite, barista: shotBarista, studio: shotStudio };
const CARD_GLYPHS = ["chat", "box", "people", "star"];
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

const Opening = ({ t, contactHref }) => {
  const other = t.lang === "ar" ? "en" : "ar";
  return (
    <div className="rs-opening">
      <div className="rs-orbit">
        <div className="rs-orbit-sticky">
          <OrbitArt />
        </div>
      </div>
      <section className="rs-hero">
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
        <div className="rs-hero-body">
          <h1>{t.hero.title.join(" ")}</h1>
          <p className="rs-hero-sub">{t.hero.sub}</p>
          <div className="rs-actions">
            <a href={contactHref} className="rs-btn rs-btn-dark">
              {t.hero.secondary}
            </a>
            <External href={DEMO_URL} className="rs-btn rs-btn-line">
              {t.hero.primary}
            </External>
          </div>
        </div>
      </section>
      <section className="rs-statement">
        <p>{t.statement}</p>
      </section>
    </div>
  );
};

const Stack = ({ t }) => (
  <section className="rs-stack">
    <div className="rs-stack-intro">
      <h2>{t.pinnedTitle}</h2>
      <p>{t.pinnedBody}</p>
    </div>
    <div className="rs-stack-cards">
      {t.glance.map((g, i) => {
        const Mock = GLANCE_MOCKS[i];
        return (
          <article className={`rs-card rs-card-${i}`} key={g.title} style={{ "--i": i }}>
            <span className="rs-card-icon">
              <Glyph name={CARD_GLYPHS[i]} size={44} />
            </span>
            <h3>{g.title}</h3>
            <div className="rs-card-mock">{Mock && <Mock m={t.mocks} />}</div>
            <p>{g.desc}</p>
          </article>
        );
      })}
    </div>
  </section>
);

const Menu = ({ t }) => (
  <section className="rs-menu" aria-labelledby="rs-menu-title">
    <div className="rs-menu-head">
      <h2 id="rs-menu-title">{t.board.title}</h2>
      <p>{t.board.subtitle}</p>
    </div>
    <div className="rs-menu-cols">
      {t.sections.map((section) => (
        <div className="rs-menu-group" key={section.id}>
          <h3>{section.name}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item.name}>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <External href={item.link} className="rs-try">
                  {t.tryIt}
                </External>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const DemoCafe = ({ t }) => (
  <section className="rs-demo">
    <div className="rs-demo-head">
      <h2>{t.demo.title}</h2>
      <p>{t.demo.body}</p>
      <p>{t.demo.body2}</p>
    </div>
    <div className="rs-demo-cards">
      {t.shots.map((shot, i) => (
        <External href={t.demo.links[i].href} className="rs-demo-card" key={shot.key}>
          <span className="rs-demo-img">
            <img src={SHOTS[shot.key]} alt="" width="1280" height="800" loading="lazy" />
          </span>
          <span className="rs-demo-card-title">{shot.caption}</span>
          <span className="rs-demo-card-text">{t.shotDesc[shot.key]}</span>
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
      <a href={contactHref} className="rs-btn rs-btn-light">
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
      <Opening t={t} contactHref={contactHref} />
      <Stack t={t} />
      <Menu t={t} />
      <DemoCafe t={t} />
      <Steps t={t} />
      <Faq t={t} />
      <Cta t={t} contactHref={contactHref} />
    </main>
  );
};

export const Roshan = () => <RoshanPage t={EN} />;
export const RoshanAr = () => <RoshanPage t={AR} />;
