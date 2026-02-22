import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PrayerPause.css";
import appIcon from "../assets/prayerpause-icon.png";

const PrayerPause = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="prayer-pause">
      <div className="prayer-pause-container">
        <div className="prayer-pause-header">
          <div className="app-icon-container">
            <img src={appIcon} alt="Prayer Pause App Icon" className="app-icon" />
          </div>
          <h1>Prayer Pause</h1>
          <p className="prayer-pause-tagline">Put God first, before your phone</p>
        </div>

        <section className="prayer-pause-hero">
          <div className="hero-content">
            <h2>Block distractions. Start with prayer.</h2>
            <p>
              Prayer Pause blocks the apps you choose until you complete your daily prayer or
              scripture memory session. It's a simple, gentle nudge to put God first each morning
              before diving into social media, games, or other distractions.
            </p>
            <p>
              Whether you want a guided prayer with a verse of the day, or to memorize scripture
              through spaced repetition, Prayer Pause helps you build a daily habit of putting
              God at the center of your day.
            </p>
          </div>
        </section>

        <section className="prayer-pause-features">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🙏</div>
              <h3>Daily Prayer Flow</h3>
              <ul>
                <li>Guided prayer with a daily mood check-in</li>
                <li>Fresh prayer content each day</li>
                <li>Verse of the day with reflection</li>
                <li>Peaceful, distraction-free experience</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>Scripture Memory</h3>
              <ul>
                <li>Memorize Bible verses with spaced repetition</li>
                <li>Browse and select from the complete Bible</li>
                <li>Track your progress across verses</li>
                <li>SM-2 algorithm adapts to your learning</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>App Blocking</h3>
              <ul>
                <li>Choose which apps to block each day</li>
                <li>Uses Apple's Screen Time API</li>
                <li>Apps unlock after completing your session</li>
                <li>Schedule multiple prayer times</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔥</div>
              <h3>Streak Tracking</h3>
              <ul>
                <li>Build a daily prayer streak</li>
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

            <div className="feature-card">
              <div className="feature-icon">💚</div>
              <h3>Completely Free</h3>
              <ul>
                <li>No subscriptions or paywalls</li>
                <li>Every feature is available to everyone</li>
                <li>No ads, no tracking, no data collection</li>
                <li>A paywall shouldn't stand between you and God</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="prayer-pause-support">
          <div className="support-content">
            <h2>Support & Contact</h2>
            <p>
              Need help with Prayer Pause or have questions about the app?
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
          <Link to="/prayer-pause-privacy">Privacy Policy</Link>
          <span className="link-separator"> | </span>
          <Link to="/prayer-pause-terms">Terms of Use</Link>
        </div>
      </div>
    </main>
  );
};

export default PrayerPause;
