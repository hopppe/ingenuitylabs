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
