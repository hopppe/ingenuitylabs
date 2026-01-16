import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./KingdomArabic.css";
import screenshot1 from "../assets/kingdom-arabic-1.png";
import screenshot2 from "../assets/kingdom-arabic-2.png";
import screenshot3 from "../assets/kingdom-arabic-3.png";
import appIcon from "../assets/kingdom-arabic-icon.png";

const KingdomArabic = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="kingdom-arabic">
      <div className="kingdom-arabic-container">
        <div className="kingdom-arabic-header">
          <div className="app-icon-container">
            <img src={appIcon} alt="Kingdom Arabic App Icon" className="app-icon" />
          </div>
          <h1>Kingdom Arabic</h1>
          <p className="kingdom-arabic-tagline">Learn Arabic through Bible reading</p>
        </div>

        <section className="kingdom-arabic-hero">
          <div className="hero-content">
            <h2>Master Arabic vocabulary through immersive Bible reading</h2>
            <p>
              Kingdom Arabic combines the beauty of Scripture with proven spaced repetition learning.
              Read the complete Arabic Bible with instant word translations, then master vocabulary
              through intelligent flashcard review.
            </p>
            <p>
              Perfect for language learners, Bible students, and anyone seeking to deepen their
              understanding of Arabic through meaningful content.
            </p>
          </div>
        </section>

        <section className="kingdom-arabic-download">
          <h2>Download the App</h2>
          <div className="store-buttons">
            <a
              href="https://apps.apple.com/us/app/kingdom-arabic/id6755405579"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button app-store"
            >
              <div className="store-button-content">
                <svg viewBox="0 0 24 24" className="store-icon" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="store-text">
                  <span className="store-subtitle">Download on the</span>
                  <span className="store-title">App Store</span>
                </div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ingenuitylabs.LearnArabic"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button google-play"
            >
              <div className="store-button-content">
                <svg viewBox="0 0 24 24" className="store-icon" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="store-text">
                  <span className="store-subtitle">Get it on</span>
                  <span className="store-title">Google Play</span>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className="kingdom-arabic-screenshots">
          <div className="screenshot-gallery">
            <div className="screenshot-item">
              <img src={screenshot1} alt="Kingdom Arabic Bible Reader" />
              <p>Interactive Bible reader with instant word translations</p>
            </div>
            <div className="screenshot-item">
              <img src={screenshot2} alt="Kingdom Arabic Flashcards" />
              <p>Master vocabulary with spaced repetition flashcards</p>
            </div>
            <div className="screenshot-item">
              <img src={screenshot3} alt="Kingdom Arabic Word List" />
              <p>Track saved words and manage your learning progress</p>
            </div>
          </div>
        </section>

        <section className="kingdom-arabic-features">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>Complete Arabic Bible</h3>
              <ul>
                <li>Read all 66 books with English translations</li>
                <li>Tap any Arabic word for instant translation</li>
                <li>Navigate easily between books and chapters</li>
                <li>Beautiful RTL text rendering</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Intelligent Flashcards</h3>
              <ul>
                <li>Anki-style spaced repetition algorithm</li>
                <li>Review words at optimal intervals for retention</li>
                <li>Track learning progress with New/Learning/Review states</li>
                <li>Customizable study sessions</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Seamless Learning Flow</h3>
              <ul>
                <li>Tapped words automatically saved to session</li>
                <li>Bulk add session words to flashcard deck</li>
                <li>Edit translations and verse context</li>
                <li>Organize cards into custom groups</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>100% Offline & Local</h3>
              <ul>
                <li>Complete Bible stored locally on device</li>
                <li>No internet connection required</li>
                <li>All data stays on your device</li>
                <li>Fast and responsive experience</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Smart Study Features</h3>
              <ul>
                <li>Flip cards to test your recall</li>
                <li>Rate difficulty: Again, Hard, Good, Easy</li>
                <li>View all flashcards and manage your deck</li>
                <li>Reset card progress or delete as needed</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Perfect For</h3>
              <ul>
                <li>Arabic language learners</li>
                <li>Bible students and scholars</li>
                <li>Anyone learning Modern Standard Arabic</li>
                <li>Self-paced vocabulary building</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="kingdom-arabic-support">
          <div className="support-content">
            <h2>Support & Contact</h2>
            <p>
              Need help with Kingdom Arabic or have questions about the app?
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
          <Link to="/kingdom-arabic-privacy">Privacy Policy</Link>
        </div>
      </div>
    </main>
  );
};

export default KingdomArabic;
