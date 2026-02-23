import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SalahShield.css";
import appIcon from "../assets/salahshield-icon.png";

const SalahShield = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="salah-shield">
      <div className="salah-shield-container">
        <div className="salah-shield-header">
          <div className="app-icon-container">
            <img src={appIcon} alt="SalahShield App Icon" className="app-icon" />
          </div>
          <h1>SalahShield</h1>
          <p className="salah-shield-tagline">Put Allah first, before your phone</p>
        </div>

        <section className="salah-shield-hero">
          <div className="hero-content">
            <h2>Block distractions. Start with salah.</h2>
            <p>
              SalahShield blocks the apps you choose until you complete your daily salah.
              It's a simple, powerful way to make sure Allah comes first — before social media,
              games, or any other distraction on your phone.
            </p>
            <p>
              Track all five daily prayers — Fajr, Dhuhr, Asr, Maghrib, and Isha — with
              accurate prayer times based on your location. Each session includes a mindful
              wudu preparation, a mood check-in, a dua, and an ayah of the day in Arabic
              and English.
            </p>
          </div>
        </section>

        <section className="salah-shield-features">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🕌</div>
              <h3>5 Daily Prayers</h3>
              <ul>
                <li>Track Fajr, Dhuhr, Asr, Maghrib, and Isha</li>
                <li>Accurate prayer times based on your location</li>
                <li>Multiple calculation methods (ISNA, MWL, Umm al-Qura, and more)</li>
                <li>Daily reset so every day is a fresh start</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🤲</div>
              <h3>Guided Salah Flow</h3>
              <ul>
                <li>Mindful wudu preparation before each prayer</li>
                <li>Mood check-in to reflect on your state</li>
                <li>Daily dua with Quran ayahs in Arabic + English</li>
                <li>Peaceful, distraction-free experience</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>App Blocking</h3>
              <ul>
                <li>Choose which apps to block at prayer time</li>
                <li>Uses Apple's Screen Time API securely</li>
                <li>Apps unlock after completing your salah</li>
                <li>Automatic blocking at each prayer time</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>Quran Ayahs</h3>
              <ul>
                <li>127 themed Quran ayahs as daily duas</li>
                <li>30 curated ayahs for "Ayah of the Day"</li>
                <li>Full Arabic text with English translation</li>
                <li>Fresh content with every prayer session</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔥</div>
              <h3>Streak Tracking</h3>
              <ul>
                <li>Build a daily salah streak</li>
                <li>Calendar view of your prayer history</li>
                <li>Mood journaling alongside your prayers</li>
                <li>Watch your spiritual discipline grow</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Themes</h3>
              <ul>
                <li>Five handcrafted visual themes</li>
                <li>Ocean, Midnight, Clean, Warm, and Forest</li>
                <li>iOS 26 Liquid Glass design</li>
                <li>App icon changes to match your theme</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="salah-shield-support">
          <div className="support-content">
            <h2>Support & Contact</h2>
            <p>
              Need help with SalahShield or have questions about the app?
              We're here to assist you with any issues or feedback you might have.
            </p>
            <div className="contact-info">
              <p>
                <strong>Email Support:</strong>{" "}
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
          <Link to="/salah-shield-privacy">Privacy Policy</Link>
          <span className="link-separator"> | </span>
          <Link to="/salah-shield-terms">Terms of Use</Link>
        </div>
      </div>
    </main>
  );
};

export default SalahShield;
