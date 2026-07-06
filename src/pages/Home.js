import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "../components/Seo";
import "./Home.css";
import ffConsoleImg from "../assets/friendly-fixers-console.png";
import ffQuoteImg from "../assets/friendly-fixers-quote.png";
import prayerPauseIcon from "../assets/prayerpause-icon.png";

gsap.registerPlugin(ScrollTrigger);

const anafluentIcon =
  "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4b/6b/46/4b6b46cf-8f80-1561-3eae-6d227b7ad050/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg";

/* ── Hero demo: custom AI systems, replayed live ── */

const SCENARIOS = [
  {
    console: "field quoting",
    input:
      "Replace kitchen faucet, customer is supplying the new one. Under-sink access looks tight.",
    thinking: "Reading photo — pricing from the company playbook…",
    heading: "Quote — ready to send",
    lines: [
      { item: "Kitchen faucet replacement", value: "$189" },
      { item: "Supply line swap, add-on", value: "$35" },
      { item: "Haul away old fixture", value: "$15" },
      { item: "Total", value: "$239", strong: true },
    ],
    note: "Built for Friendly Fixers, a handyman company in Conway, Arkansas.",
  },
  {
    console: "meeting prep",
    input: "Prep me for the 2pm with Meridian Dental. Pull everything we have.",
    thinking: "Reading CRM history, email threads, and the open proposal…",
    heading: "Briefing — in your inbox",
    lines: [
      { item: "Proposal sent May 12", value: "opened 3× this week" },
      { item: "Decision-maker", value: "Dr. Aya Khan" },
      { item: "Sticking point last call", value: "onboarding timeline" },
      { item: "Suggested open", value: "revised rollout plan", strong: true },
    ],
    note: "Connected to the CRM, calendar, and inbox your team already uses.",
  },
  {
    console: "ops assistant",
    input:
      "New lead from the website — Rivera Landscaping, asking about monthly maintenance.",
    thinking: "Drafting the reply, updating records, checking calendars…",
    heading: "Done — while you kept working",
    lines: [
      { item: "Reply drafted", value: "in your voice" },
      { item: "CRM updated", value: "tagged commercial" },
      { item: "Intro call booked", value: "Thu 9:30am" },
      { item: "Owner notified", value: "on Slack", strong: true },
    ],
    note: "The follow-up work that slips on busy weeks, handled every time.",
  },
];

const QuoteDemo = ({ animate }) => {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [typed, setTyped] = useState(animate ? "" : SCENARIOS[0].input);
  const [phase, setPhase] = useState(animate ? "typing" : "result");

  useEffect(() => {
    if (!animate) return;
    let cancelled = false;
    const timers = [];
    const wait = (ms) =>
      new Promise((resolve) => timers.push(setTimeout(resolve, ms)));

    const run = async () => {
      let idx = 0;
      while (!cancelled) {
        const scenario = SCENARIOS[idx];
        setScenarioIdx(idx);
        setPhase("typing");
        setTyped("");
        await wait(700);
        for (let i = 1; i <= scenario.input.length && !cancelled; i++) {
          setTyped(scenario.input.slice(0, i));
          await wait(22);
        }
        if (cancelled) return;
        setPhase("thinking");
        await wait(1500);
        if (cancelled) return;
        setPhase("result");
        await wait(5200);
        idx = (idx + 1) % SCENARIOS.length;
      }
    };
    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [animate]);

  const scenario = SCENARIOS[scenarioIdx];

  return (
    <div
      className="demo"
      aria-label="Demonstration of custom AI assistants handling quoting, meeting prep, and operations tasks"
    >
      <div className="demo-bar">
        <span className="demo-status" />
        <span className="demo-title">{scenario.console}</span>
        <span className="demo-count">
          {scenarioIdx + 1} / {SCENARIOS.length}
        </span>
      </div>
      <div className="demo-body">
        <p className="demo-input">
          {typed}
          {phase === "typing" && <span className="demo-caret" />}
        </p>
        {phase === "thinking" && (
          <p className="demo-thinking">{scenario.thinking}</p>
        )}
        {phase === "result" && (
          <div className="demo-result" key={scenarioIdx}>
            <span className="demo-heading">{scenario.heading}</span>
            <ul>
              {scenario.lines.map((line, i) => (
                <li
                  key={i}
                  className={line.strong ? "demo-line demo-line-strong" : "demo-line"}
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <span>{line.item}</span>
                  <span className="demo-value">{line.value}</span>
                </li>
              ))}
            </ul>
            <p
              className="demo-note"
              style={{ animationDelay: `${0.1 * scenario.lines.length}s` }}
            >
              {scenario.note}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Page data ── */

const MANIFESTO =
  "Most companies don’t need an AI strategy. They need the quote written before the truck leaves the driveway, the CRM updated without anyone opening it, and the meeting brief waiting in the inbox by eight. We build AI wired into the tools you already run, doing the tasks your team shouldn’t have to — and the apps and websites that make it all feel like one product.";

const SERVICES = [
  {
    title: "AI systems",
    description:
      "Quoting engines, meeting-prep assistants, CRM and inbox automation, internal copilots. We start from your playbook and your tools — Jobber, HubSpot, Slack, whatever you run — and build AI that works inside them, not beside them.",
    proof: "Recently: an AI quoting console for Friendly Fixers.",
  },
  {
    title: "Mobile apps",
    description:
      "iOS and Android, from first sketch to the App Store — including the AI features users now expect, done properly.",
    proof: "Recently: anaFluent, an AI English tutor with live voice conversation.",
  },
  {
    title: "Websites & platforms",
    description:
      "Marketing sites that earn trust and full web products that do real work, built fast and built to last.",
    proof: "Recently: ksaflagfootball.com and our own products.",
  },
];

const WORK = [
  {
    name: "Prayer Pause",
    description: "Blocks distracting apps until your daily prayer is done",
    tag: "iOS",
    icon: prayerPauseIcon,
    to: "/prayer-pause",
  },
  {
    name: "anaFluent",
    description: "AI English tutor with real-time voice conversation",
    tag: "AI / Mobile",
    icon: anafluentIcon,
    href: "https://anafluent.com",
  },
  {
    name: "KSA Flag Football",
    description: "Saudi Arabia’s official flag football organization",
    tag: "Web",
    iconText: "KSAFF",
    href: "https://www.ksaflagfootball.com",
  },
];

/* ── Page ── */

const Home = () => {
  const homeRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setAnimate(!prefersReducedMotion);
  }, []);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // ── Hero entrance ──
      gsap
        .timeline({ delay: 0.15 })
        .from(".hero-meta", {
          opacity: 0,
          y: 12,
          duration: 0.7,
          ease: "power2.out",
        })
        .from(
          ".hero-line-inner",
          {
            yPercent: 110,
            duration: 1.05,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-sub",
          { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".hero-actions",
          { opacity: 0, y: 14, duration: 0.6, ease: "power2.out" },
          "-=0.5"
        )
        .from(
          ".demo",
          { opacity: 0, y: 28, duration: 0.9, ease: "power3.out" },
          "-=0.7"
        );

      // ── Manifesto: words light up as you read ──
      gsap.to(".manifesto-word", {
        opacity: 1,
        stagger: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: ".manifesto",
          start: "top 72%",
          end: "bottom 55%",
          scrub: true,
        },
      });

      // ── Case study: image unclips + drifts on scroll ──
      gsap.fromTo(
        ".case-media-main",
        { clipPath: "inset(6% 8% 6% 8%)", scale: 1.06 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".case-media", start: "top 78%" },
        }
      );

      gsap.fromTo(
        ".case-media-detail",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: ".case-media-detail", start: "top 88%" },
        }
      );

      gsap.to(".case-media-main img", {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: ".case-media",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // ── Section headings: masked line reveal ──
      gsap.utils.toArray(".reveal-line-inner").forEach((el) => {
        gsap.from(el, {
          yPercent: 110,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%" },
        });
      });

      // ── Rows fade in ──
      gsap.utils.toArray(".service-row, .work-row").forEach((row) => {
        gsap.from(row, {
          y: 36,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: row, start: "top 88%" },
        });
      });

      // ── Case study facts ──
      gsap.from(".case-fact", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".case-facts", start: "top 88%" },
      });

      // ── CTA ──
      gsap.from(".cta-inner > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".cta", start: "top 78%" },
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="home" ref={homeRef}>
      <Seo
        title="Ingenuity Labs — Custom AI Solutions, Apps & Websites"
        description="We build custom AI solutions for businesses — quoting engines, meeting-prep assistants, CRM automation — plus the mobile apps and websites to match."
        path="/"
      />
      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="hero-text">
          <p className="hero-meta">
            Ingenuity Labs — a product studio for custom AI, apps &amp; websites
          </p>
          <h1>
            <span className="hero-line">
              <span className="hero-line-inner">AI that quotes the job,{" "}</span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner">preps the meeting,{" "}</span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner">files the paperwork.</span>
            </span>
          </h1>
          <p className="hero-sub">
            We build custom AI around the way your business already works —
            wired into your CRM, calendar, and inbox — plus the mobile apps and
            websites to match.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-solid">
              Start a project
            </Link>
            <a href="#work" className="btn-quiet">
              See the work
            </a>
          </div>
        </div>
        <div className="hero-demo">
          <QuoteDemo animate={animate} />
          <p className="hero-demo-caption">
            Live replay of the kind of systems we ship.
          </p>
        </div>
      </section>

      {/* ── Manifesto ── */}
      <section className="manifesto">
        <p>
          {MANIFESTO.split(" ").map((word, i) => (
            <span className="manifesto-word" key={i}>
              {word}{" "}
            </span>
          ))}
        </p>
      </section>

      {/* ── Case study ── */}
      <section className="case">
        <div className="case-head">
          <p className="kicker">Case study</p>
          <h2>
            <span className="reveal-line">
              <span className="reveal-line-inner">
                Friendly Fixers quotes every job
              </span>
            </span>
            <span className="reveal-line">
              <span className="reveal-line-inner">in under a minute.</span>
            </span>
          </h2>
        </div>
        <div className="case-body">
          <div className="case-text">
            <p>
              Friendly Fixers, a handyman company in Conway, Arkansas, was
              losing hours pricing jobs by hand. We built them an AI quoting
              console trained on their own pricing playbook: a technician in
              the field types a few sentences, attaches a photo, and gets back
              a priced, ready-to-send quote — line items, add-ons, and
              close-rate notes included.
            </p>
            <ul className="case-facts">
              <li className="case-fact">
                <strong>Under a minute</strong> from job description to a
                finished quote
              </li>
              <li className="case-fact">
                <strong>Photo-aware</strong> — vision AI confirms scope and
                adjusts the price
              </li>
              <li className="case-fact">
                <strong>No new habits</strong> — output pastes straight into
                the CRM they already use
              </li>
            </ul>
            <Link to="/contact" className="case-link">
              Build something like this for your team
            </Link>
          </div>
          <div className="case-media">
            <figure className="case-media-main">
              <img
                src={ffConsoleImg}
                alt="Friendly Fixers AI quoting console home screen, reading 'Field quote, in under a minute'"
                width="1280"
                height="800"
                loading="lazy"
              />
            </figure>
            <figure className="case-media-detail">
              <img
                src={ffQuoteImg}
                alt="Friendly Fixers new-quote screen where a technician describes the job"
                width="1280"
                height="800"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services">
        <p className="kicker">What we build</p>
        <div className="services-list">
          {SERVICES.map((service) => (
            <div className="service-row" key={service.title}>
              <h3>{service.title}</h3>
              <div className="service-detail">
                <p>{service.description}</p>
                <p className="service-proof">{service.proof}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="work-more">
          Run a home-service company? See{" "}
          <Link to="/ai-for-home-services">
            what we build for the trades
          </Link>
          .
        </p>
      </section>

      {/* ── Work ── */}
      <section className="work" id="work">
        <p className="kicker">Also shipped</p>
        <div className="work-list">
          {WORK.map((project) => {
            const rowContent = (
              <>
                {project.iconText ? (
                  <span className="work-thumb work-thumb-text">
                    {project.iconText}
                  </span>
                ) : (
                  <span className="work-thumb">
                    <img
                      src={project.icon}
                      alt=""
                      width="56"
                      height="56"
                      loading="lazy"
                    />
                  </span>
                )}
                <span className="work-name">{project.name}</span>
                <span className="work-desc">{project.description}</span>
                <span className="work-tag">{project.tag}</span>
                <span className="work-arrow" aria-hidden="true">
                  {project.to ? "→" : "↗"}
                </span>
              </>
            );
            return project.to ? (
              <Link to={project.to} className="work-row" key={project.name}>
                {rowContent}
              </Link>
            ) : (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="work-row"
                key={project.name}
              >
                {rowContent}
              </a>
            );
          })}
        </div>
        <p className="work-more">
          More of our apps and platforms on the{" "}
          <Link to="/about">about page</Link>.
        </p>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <div className="cta-inner">
          <p className="kicker kicker-light">Now taking projects</p>
          <h2>What should AI be doing at your company?</h2>
          <p className="cta-sub">
            Tell us what eats your team’s time. We’ll tell you honestly whether
            AI can fix it, what it costs, and how fast you’d have it.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-light">
              Start a project
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

export default Home;
