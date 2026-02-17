import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import heroImg from "../assets/hero.png";
import kingdomIcon from "../assets/kingdom-arabic-icon.png";
import stardateIcon from "../assets/Gemini_Generated_Image_6h6erd6h6erd6h6e.png";

gsap.registerPlugin(ScrollTrigger);

const anafluentIcon = "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4b/6b/46/4b6b46cf-8f80-1561-3eae-6d227b7ad050/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg";

const Home = () => {
  const homeRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // ── Hero entrance (timeline for reliable sequencing) ──

      const heroTl = gsap.timeline({ delay: 0.3 });

      heroTl
        .from(".hero-line-inner", {
          yPercent: 100,
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
        })
        .from(
          ".hero-subtitle",
          { y: 30, opacity: 0, duration: 0.9, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".hero-cta",
          { y: 20, opacity: 0, duration: 0.7, ease: "power2.out" },
          "-=0.5"
        );

      gsap.from(".hero-image img", {
        scale: 1.15,
        duration: 1.6,
        delay: 0.2,
        ease: "power2.out",
      });

      // Hero image parallax on scroll
      gsap.to(".hero-image img", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // ── Marquee ──

      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1,
      });

      // ── Services ──

      gsap.from(".services .section-label", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: { trigger: ".services", start: "top 80%" },
      });

      gsap.from(".services .section-title-inner", {
        yPercent: 100,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services", start: "top 78%" },
      });

      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 85%" },
      });

      // ── Work ──

      gsap.from(".work .section-label", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: { trigger: ".work", start: "top 80%" },
      });

      gsap.from(".work .section-title-inner", {
        yPercent: 100,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".work", start: "top 78%" },
      });

      gsap.from(".work-item", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: ".work-grid", start: "top 85%" },
      });

      // ── CTA ──

      const ctaTl = gsap.timeline({
        scrollTrigger: { trigger: ".cta", start: "top 80%" },
      });

      ctaTl
        .from(".cta-inner h2", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        })
        .from(
          ".cta-inner p",
          { y: 30, opacity: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        )
        .from(
          ".cta-inner .btn",
          { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
    }, homeRef);

    return () => ctx.revert();
  }, []);

  const marqueeItems = [
    "Websites",
    "Mobile Apps",
    "AI Solutions",
    "UI/UX Design",
    "Cloud Infrastructure",
  ];

  return (
    <main className="home" ref={homeRef}>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="hero-line">
              <span className="hero-line-inner">We design &</span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner">build digital</span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner">products.</span>
            </span>
          </h1>
          <p className="hero-subtitle">
            Websites, mobile apps, and AI-powered tools — engineered for
            businesses ready to grow.
          </p>
          <Link to="/contact" className="btn hero-cta">
            Start a project
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Digital product design" />
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span className="marquee-dot">&middot;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <section className="services">
        <span className="section-label">Services</span>
        <div className="section-title">
          <h2>
            <span className="section-title-inner">What we build</span>
          </h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-number">01</span>
            <h3>Web Development</h3>
            <p>
              Performant websites and platforms that turn visitors into customers
              — from brand sites to full-stack applications.
            </p>
          </div>
          <div className="service-card">
            <span className="service-number">02</span>
            <h3>Mobile Apps</h3>
            <p>
              iOS and Android apps with intuitive interfaces and rock-solid
              architecture. Native or cross-platform, built to scale.
            </p>
          </div>
          <div className="service-card">
            <span className="service-number">03</span>
            <h3>AI Solutions</h3>
            <p>
              Custom AI integrations, intelligent automation, and data-driven
              tools that give your business a competitive edge.
            </p>
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section className="work">
        <span className="section-label">Portfolio</span>
        <div className="section-title">
          <h2>
            <span className="section-title-inner">Selected work</span>
          </h2>
        </div>
        <div className="work-grid">
          <Link to="/kingdom-arabic" className="work-item">
            <div className="work-icon">
              <img src={kingdomIcon} alt="Kingdom Arabic" />
            </div>
            <div className="work-info">
              <span className="work-tag">Mobile App</span>
              <h3>Kingdom Arabic</h3>
              <p>Language learning platform for Arabic learners</p>
            </div>
          </Link>
          <Link to="/about" className="work-item">
            <div className="work-icon">
              <img src={anafluentIcon} alt="Anafluent" />
            </div>
            <div className="work-info">
              <span className="work-tag">Mobile App</span>
              <h3>Anafluent</h3>
              <p>AI-powered English learning app</p>
            </div>
          </Link>
          <Link to="/star-date" className="work-item">
            <div className="work-icon">
              <img src={stardateIcon} alt="StarDate" />
            </div>
            <div className="work-info">
              <span className="work-tag">Mobile App</span>
              <h3>StarDate</h3>
              <p>Astronomy companion and sky tracking</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <div className="cta-inner">
          <h2>Have a project in mind?</h2>
          <p>
            Let's talk about what you're building. We'll handle the design,
            development, and launch.
          </p>
          <Link to="/contact" className="btn btn-solid">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
