import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Seo from "./Seo";
import "../pages/Home.css";
import "../pages/AIHomeServices.css";

// Shared layout for SEO niche landing pages. Copy lives in each page file.
const NichePage = ({
  seo,
  heroMeta,
  heroTitle,
  heroSub,
  media,
  servicesKicker,
  services,
  faqs,
  ctaTitle,
  ctaSub,
  related,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home niche">
      <Seo {...seo} />
      {faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}

      <section className="home-hero niche-hero">
        <div className="hero-text">
          <p className="hero-meta">{heroMeta}</p>
          <h1>{heroTitle}</h1>
          <p className="hero-sub">{heroSub}</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-solid">
              Get a scoping call
            </Link>
            <a href="mailto:ethan@ingenuitylabs.net" className="btn-quiet">
              ethan@ingenuitylabs.net
            </a>
          </div>
        </div>
        {media && (
          <div className="hero-demo">
            <figure className="niche-shot">
              <img
                src={media.src}
                alt={media.alt}
                width={media.width || 1280}
                height={media.height || 800}
              />
            </figure>
            {media.caption && (
              <p className="hero-demo-caption">{media.caption}</p>
            )}
          </div>
        )}
      </section>

      <section className="services">
        <p className="kicker">{servicesKicker}</p>
        <div className="services-list">
          {services.map((service) => (
            <div className="service-row" key={service.title}>
              <h3>{service.title}</h3>
              <div className="service-detail">
                <p>{service.description}</p>
                {service.proof && (
                  <p className="service-proof">{service.proof}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {related && (
          <p className="work-more">
            {related.lead}{" "}
            <Link to={related.to}>{related.label}</Link>.
          </p>
        )}
      </section>

      {faqs && (
        <section className="niche-faq">
          <p className="kicker">Common questions</p>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="cta">
        <div className="cta-inner">
          <p className="kicker kicker-light">Now taking projects</p>
          <h2>{ctaTitle}</h2>
          <p className="cta-sub">{ctaSub}</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-light">
              Get a scoping call
            </Link>
            <a href="mailto:ethan@ingenuitylabs.net" className="cta-email">
              or email ethan@ingenuitylabs.net
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NichePage;
