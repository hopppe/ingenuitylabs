import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./FreeSplit.css";
import screenshot1 from "../assets/IMG_1882.PNG";
import screenshot2 from "../assets/IMG_1883.PNG";
import screenshot3 from "../assets/IMG_1884.PNG";
import appIcon from "../assets/freesplit6.png";

const FreeSplit = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="freesplit">
      <div className="freesplit-container">
        <div className="freesplit-header">
          <div className="app-icon-container">
            <img src={appIcon} alt="Free Split App Icon" className="app-icon" />
          </div>
          <h1>Free Split</h1>
          <p className="freesplit-tagline">Split expenses effortlessly for free</p>
        </div>

        <section className="freesplit-hero">
          <div className="hero-content">
            <h2>Tired of expense splitting apps that cost money? Me too.</h2>
            <p>Looking for a straightforward clean interface? Look no further.</p>
            <p>
              Free Split makes group travel financial management simple and stress-free. Whether you're 
              backpacking through Europe, planning a weekend getaway, or organizing a group vacation, 
              Free Split ensures everyone knows exactly who owes what.
            </p>
          </div>
        </section>

        <section className="freesplit-screenshots">
          <div className="screenshot-gallery">
            <div className="screenshot-item">
              <img src={screenshot1} alt="Free Split Groups Overview" />
              <p>Organize multiple expense groups with clear balance tracking</p>
            </div>
            <div className="screenshot-item">
              <img src={screenshot2} alt="Free Split Expense Tracking" />
              <p>Add and track expenses with detailed transaction history</p>
            </div>
            <div className="screenshot-item">
              <img src={screenshot3} alt="Free Split Balance Calculations" />
              <p>Automatic balance calculations and payment settlements</p>
            </div>
          </div>
        </section>

        <section className="freesplit-features">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">✈️</div>
              <h3>Smart Expense Splitting</h3>
              <ul>
                <li>Add expenses instantly with custom or equal splitting</li>
                <li>Track who paid and who owes in real-time</li>
                <li>Automatic balance calculations eliminate confusion</li>
                <li>Record payments to settle debts on the spot</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Multi-Currency Support</h3>
              <ul>
                <li>Record expenses in 16+ currencies</li>
                <li>Automatic currency conversion for accurate balances</li>
                <li>Perfect for international travel</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Seamless Group Management</h3>
              <ul>
                <li>Invite friends with shareable trip codes</li>
                <li>Add placeholder participants that others can claim</li>
                <li>Real-time updates keep everyone synchronized</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Works Anywhere</h3>
              <ul>
                <li>Full offline functionality - no internet required</li>
                <li>Automatic sync when connection returns</li>
                <li>Never lose track of expenses, even in remote locations</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Secure & Private</h3>
              <ul>
                <li>Firebase-powered authentication</li>
                <li>Your data is encrypted and secure</li>
                <li>User-friendly sign-up process</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Perfect For</h3>
              <ul>
                <li>Group vacations and trips</li>
                <li>Shared living expenses</li>
                <li>Event planning and parties</li>
                <li>Any situation where expenses need splitting</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="freesplit-support">
          <div className="support-content">
            <h2>Support & Contact</h2>
            <p>
              Need help with Free Split or have questions about the app? 
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
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </main>
  );
};

export default FreeSplit; 