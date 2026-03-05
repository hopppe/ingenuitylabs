import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SaudiLanding.css';

const FORMSPREE_IDS = {
  'whatsapp-crm': 'YOUR_CRM_FORM_ID',
  'nitaqat': 'YOUR_NITAQAT_FORM_ID',
  'fatoora': 'YOUR_FATOORA_FORM_ID',
  'booking': 'YOUR_BOOKING_FORM_ID',
};

export default function SaudiProductPage({ content, lang = 'en' }) {
  const isAr = lang === 'ar';
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const revealRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.product = content.slug;
    data.language = lang;
    data.timestamp = new Date().toISOString();

    const formspreeId = FORMSPREE_IDS[content.slug];

    try {
      if (formspreeId && !formspreeId.startsWith('YOUR_')) {
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
      } else {
        console.log('Waitlist signup (no Formspree ID set):', data);
        await new Promise((r) => setTimeout(r, 600));
      }
      setSubmitted(true);
    } catch {
      setSending(false);
    }
  };

  const otherLang = isAr ? 'en' : 'ar';
  const otherPath = isAr
    ? `/${content.slug}`
    : `/ar/${content.slug}`;

  return (
    <div className={`saudi-landing ${isAr ? 'rtl' : ''}`}>
      {/* Language toggle */}
      <div className="sl-lang-toggle">
        <Link
          to={`/${content.slug}`}
          className={`sl-lang-btn ${!isAr ? 'active' : ''}`}
        >
          EN
        </Link>
        <Link
          to={`/ar/${content.slug}`}
          className={`sl-lang-btn ${isAr ? 'active' : ''}`}
        >
          عربي
        </Link>
      </div>

      {/* Hero */}
      <section className="sl-hero">
        <div className="sl-hero-content">
          <span className="sl-hero-label">
            <span className="sl-hero-dot"></span>
            {content.badge}
          </span>
          <h1>{content.headline}</h1>
          <p className="sl-hero-sub">{content.subheadline}</p>
          <a href="#waitlist" className="sl-btn sl-btn-solid">
            {isAr ? 'انضم لقائمة الانتظار' : 'JOIN THE WAITLIST'}
          </a>
          <div>
            <span className="sl-hero-price">{content.price}</span>
          </div>
        </div>
        <div className="sl-hero-visual">
          {content.heroVisual}
        </div>
      </section>

      {/* Pain */}
      <section className="sl-pain">
        <span className="sl-section-label" ref={addRevealRef}>
          {isAr ? 'المشكلة' : 'THE PROBLEM'}
        </span>
        <div className="sl-line"></div>
        <h2 className="sl-section-title sl-reveal" ref={addRevealRef}>
          {content.painTitle}
        </h2>
        <div className="sl-pain-grid">
          {content.pains.map((pain, i) => (
            <div
              key={i}
              className={`sl-pain-card sl-reveal sl-delay-${i + 1}`}
              ref={addRevealRef}
            >
              <span className="sl-pain-number">0{i + 1}</span>
              <h3>{pain.title}</h3>
              <p>{pain.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section className="sl-solution">
        <span className="sl-section-label" ref={addRevealRef}>
          {isAr ? 'الحل' : 'THE SOLUTION'}
        </span>
        <div className="sl-line"></div>
        <h2 className="sl-section-title sl-reveal" ref={addRevealRef}>
          {content.solutionTitle}
        </h2>
        <div className="sl-solution-grid">
          {content.solutions.map((sol, i) => (
            <div
              key={i}
              className={`sl-solution-card sl-reveal sl-delay-${i + 1}`}
              ref={addRevealRef}
            >
              <span className="sl-solution-icon">{sol.icon}</span>
              <h3>{sol.title}</h3>
              <p>{sol.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mockup */}
      {content.mockup && (
        <section className="sl-mockup">
          <div className="sl-mockup-label sl-section-label">
            {isAr ? 'معاينة المنتج' : 'PRODUCT PREVIEW'}
          </div>
          <div className="sl-mockup-frame">
            <div className="sl-mockup-topbar">
              <span className="sl-mockup-dot"></span>
              <span className="sl-mockup-dot"></span>
              <span className="sl-mockup-dot"></span>
            </div>
            <div className="sl-mockup-body">{content.mockup}</div>
          </div>
        </section>
      )}

      {/* Waitlist */}
      <section className="sl-waitlist" id="waitlist">
        <div className="sl-waitlist-inner">
          <span className="sl-section-label">
            {isAr ? 'قائمة الانتظار' : 'EARLY ACCESS'}
          </span>

          <div className="sl-proof" ref={addRevealRef}>
            <div className="sl-proof-avatars">
              {content.proofAvatars.map((a, i) => (
                <div key={i} className="sl-proof-avatar">{a}</div>
              ))}
            </div>
            <span className="sl-proof-text">
              {isAr ? (
                <>انضم <span className="sl-proof-count">{content.proofCount}</span> عمل تجاري</>
              ) : (
                <><span className="sl-proof-count">{content.proofCount}</span> businesses joined</>
              )}
            </span>
          </div>

          <h2 className="sl-waitlist-title">
            {isAr ? 'انضم لقائمة الانتظار' : 'Get early access'}
          </h2>
          <p className="sl-waitlist-sub">
            {isAr
              ? 'احصل على ٣ أشهر مجانية عند الإطلاق'
              : 'Get 3 months free when we launch'}
          </p>

          {submitted ? (
            <div className="sl-success">
              <div className="sl-success-icon">&#10003;</div>
              <h3>{isAr ? 'تم تسجيلك بنجاح!' : "You're on the list"}</h3>
              <p>
                {isAr
                  ? 'سنتواصل معك فور الإطلاق'
                  : "We'll notify you as soon as we launch."}
              </p>
            </div>
          ) : (
            <form className="sl-form" onSubmit={handleSubmit}>
              <div className="sl-form-group">
                <label className="sl-form-label">
                  {isAr ? 'الاسم' : 'NAME'}
                </label>
                <input
                  type="text"
                  name="name"
                  className="sl-form-input"
                  placeholder={isAr ? 'اسمك الكامل' : 'Full name'}
                  required
                />
              </div>

              <div className="sl-form-group">
                <label className="sl-form-label">
                  {isAr ? 'رقم واتساب' : 'WHATSAPP NUMBER'}
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  className="sl-form-input ltr"
                  placeholder="+966 5X XXX XXXX"
                  required
                />
              </div>

              <div className="sl-form-group">
                <label className="sl-form-label">
                  {isAr ? 'البريد الإلكتروني' : 'EMAIL'}
                </label>
                <input
                  type="email"
                  name="email"
                  className="sl-form-input ltr"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="sl-form-submit"
                disabled={sending}
              >
                {sending
                  ? (isAr ? '...جاري التسجيل' : 'SUBMITTING...')
                  : (isAr ? 'سجّل الآن — مجاناً' : 'JOIN WAITLIST — FREE')}
              </button>
              <p className="sl-form-note">
                {isAr
                  ? 'لا نشارك بياناتك مع أي طرف ثالث'
                  : 'We never share your information with third parties'}
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
