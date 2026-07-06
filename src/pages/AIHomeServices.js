import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import "./Home.css";
import "./AIHomeServices.css";
import ffConsoleImg from "../assets/friendly-fixers-console.png";
import ffQuoteImg from "../assets/friendly-fixers-quote.png";

const FAQS = [
  {
    q: "What can AI actually do for a home-service business?",
    a: "The highest-value jobs we see: writing priced quotes from a tech's short description and photo, answering and qualifying inbound leads at any hour, prepping your morning schedule with customer history, and keeping the CRM updated without anyone typing. We build these around your existing pricing and tools — Jobber, Housecall Pro, ServiceTitan, QuickBooks, or plain spreadsheets.",
  },
  {
    q: "How long does a custom AI quoting tool take to build?",
    a: "A working prototype on your real pricing typically takes one to two weeks. A production system your whole crew uses — with photo understanding, your quoting playbook, and CRM integration — usually ships in four to eight weeks.",
  },
  {
    q: "Do my technicians need to learn new software?",
    a: "No. We design for the tools your team already uses. In the quoting console we built for Friendly Fixers, a tech types a few sentences on their phone and pastes the finished quote into Jobber — no new habits, no training period.",
  },
  {
    q: "What does a custom AI system cost?",
    a: "Less than you'd guess, and we'll tell you before you commit. After a short scoping call we give you a fixed quote and an honest answer about whether AI can actually fix the problem — sometimes the answer is that it can't, and we'll say so.",
  },
  {
    q: "Is my pricing and customer data safe?",
    a: "Yes. Your playbook and customer records stay in infrastructure you control, and we set up the AI so your data is never used to train public models.",
  },
];

const AIHomeServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home niche">
      <Seo
        title="AI for Home-Service Businesses — Quoting, Scheduling & Follow-ups | Ingenuity Labs"
        description="Custom AI for handyman, HVAC, plumbing, and landscaping companies: quotes written from a photo in under a minute, leads answered at 2am, CRM updated automatically. Built by Ingenuity Labs."
        path="/ai-for-home-services"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="home-hero niche-hero">
        <div className="hero-text">
          <p className="hero-meta">
            AI for handyman, HVAC, plumbing &amp; landscaping companies
          </p>
          <h1>
            Your best estimator, <br />
            on every job, <br />
            at every hour.
          </h1>
          <p className="hero-sub">
            We build custom AI for home-service businesses: quotes written from
            a photo and a few sentences, leads answered before your competitors
            wake up, and a CRM that updates itself.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-solid">
              Get a scoping call
            </Link>
            <a href="mailto:ethan@ingenuitylabs.net" className="btn-quiet">
              ethan@ingenuitylabs.net
            </a>
          </div>
        </div>
        <div className="hero-demo">
          <figure className="niche-shot">
            <img
              src={ffQuoteImg}
              alt="AI quoting console for a handyman company — a technician describes the job in plain language"
              width="1280"
              height="800"
            />
          </figure>
          <p className="hero-demo-caption">
            The quoting console we built for Friendly Fixers, Conway AR.
          </p>
        </div>
      </section>

      {/* ── What it does ── */}
      <section className="services">
        <p className="kicker">What we build for the trades</p>
        <div className="services-list">
          <div className="service-row">
            <h3>Field quoting</h3>
            <div className="service-detail">
              <p>
                A tech describes the job in a few sentences and attaches a
                photo. The AI prices it from your own playbook — line items,
                add-ons, close-rate notes — and hands back a quote ready to
                paste into Jobber or send to the customer. Under a minute,
                consistent every time, no matter who's on the truck.
              </p>
              <p className="service-proof">
                In production at Friendly Fixers, Conway, Arkansas.
              </p>
            </div>
          </div>
          <div className="service-row">
            <h3>Lead response &amp; booking</h3>
            <div className="service-detail">
              <p>
                Most home-service jobs go to whoever answers first. AI replies
                to website forms, texts, and missed calls in minutes — in your
                voice — qualifies the job, and books the estimate straight onto
                your calendar.
              </p>
            </div>
          </div>
          <div className="service-row">
            <h3>Back-office automation</h3>
            <div className="service-detail">
              <p>
                Job notes turned into invoices, CRM records updated after every
                visit, morning briefings with each customer's history, review
                requests sent when the job closes. The paperwork gets done — by
                nobody.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof ── */}
      <section className="case">
        <div className="case-head">
          <p className="kicker">Proof, not promises</p>
          <h2>
            Friendly Fixers quotes every job in under a minute.
          </h2>
        </div>
        <div className="case-body">
          <div className="case-text">
            <p>
              Friendly Fixers was pricing every job by hand from a 1,500-line
              pricing guide. We distilled that playbook into an AI quoting
              console their techs use in the field. It reads the photo,
              confirms the scope, applies their pricing rules, and suggests the
              add-ons that lift the average ticket.
            </p>
            <ul className="case-facts">
              <li className="case-fact">
                <strong>Under a minute</strong> from description to a priced,
                sendable quote
              </li>
              <li className="case-fact">
                <strong>Their pricing, not generic rates</strong> — trained on
                the company's own playbook
              </li>
              <li className="case-fact">
                <strong>Zero new software</strong> for the crew — output pastes
                into Jobber
              </li>
            </ul>
            <Link to="/contact" className="case-link">
              Ask us what this would look like for your company
            </Link>
          </div>
          <div className="case-media">
            <figure className="case-media-main">
              <img
                src={ffConsoleImg}
                alt="Friendly Fixers AI quoting console — 'Field quote, in under a minute'"
                width="1280"
                height="800"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="niche-faq">
        <p className="kicker">Common questions</p>
        <div className="faq-list">
          {FAQS.map((faq) => (
            <details className="faq-item" key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <div className="cta-inner">
          <p className="kicker kicker-light">Now taking projects</p>
          <h2>Tell us how you quote today.</h2>
          <p className="cta-sub">
            Fifteen minutes on a call and we'll tell you what's automatable,
            what it costs, and how fast you'd have it — honestly.
          </p>
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

export default AIHomeServices;
