import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./StarDate.css";
import appIcon from "../assets/Gemini_Generated_Image_6h6erd6h6erd6h6e.png";

const StarDate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="star-date">
      <div className="star-date-container">
        <div className="star-date-header">
          <div className="app-icon-container">
            <img src={appIcon} alt="Star Date App Icon" className="app-icon" />
          </div>
          <h1>Star Date</h1>
          <p className="star-date-tagline">Discover what the universe looked like on the days that matter most</p>
        </div>

        <section className="star-date-hero">
          <div className="hero-content">
            <h2>Connect your meaningful moments to the cosmos</h2>
            <p>
              Every single day since June 16, 1995, NASA has published an Astronomy Picture of the Day (APOD)
              — stunning images of galaxies, nebulae, planets, and cosmic phenomena captured by telescopes
              and spacecraft around the world.
            </p>
            <p>
              Star Date lets you look up any of these images by date, transforming ordinary calendar dates
              into extraordinary cosmic memories.
            </p>
          </div>
        </section>

        <section className="star-date-features">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🔭</div>
              <h3>Look Up Any Date</h3>
              <ul>
                <li>Select any date from June 16, 1995 to today</li>
                <li>See the actual NASA image from that day</li>
                <li>Read professional astronomer descriptions</li>
                <li>Explore birthdays, anniversaries, and memorials</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎴</div>
              <h3>Beautiful Share Cards</h3>
              <ul>
                <li>Create stunning share cards with space images</li>
                <li>Include date and QR code linking to the app</li>
                <li>Perfect for social media sharing</li>
                <li>Send to loved ones with meaning</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>Star Wars-Style Video Export</h3>
              <ul>
                <li>Create cinematic reveal videos</li>
                <li>Star Wars opening crawl effect</li>
                <li>Perfect for TikTok and Instagram Reels</li>
                <li>Watch text crawl into stars before the reveal</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🖼️</div>
              <h3>Premium Frames</h3>
              <ul>
                <li>Cosmic — Deep purple nebula aesthetic</li>
                <li>Golden — Warm amber starfield</li>
                <li>Memorial — Soft, respectful blue tones</li>
                <li>Celebration, Minimal, and Vintage styles</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Save Your Dates</h3>
              <ul>
                <li>Keep a collection of meaningful star dates</li>
                <li>Free users can save up to 3 dates</li>
                <li>Quick access to your favorite cosmic memories</li>
                <li>Never lose an important date</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Compare Two Dates</h3>
              <ul>
                <li>View two star dates side by side</li>
                <li>Compare parent and child birthdays</li>
                <li>See how the universe changed over time</li>
                <li>Explore any two dates together</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="star-date-use-cases">
          <h2>Perfect For</h2>
          <div className="use-case-grid">
            <div className="use-case-card">
              <h3>Birthdays</h3>
              <p>See the universe on the day you or a loved one was born. A unique way to celebrate what makes each person's arrival special.</p>
            </div>
            <div className="use-case-card">
              <h3>Memorials</h3>
              <p>Honor someone's memory by seeing the sky on the day they were born or passed. A meaningful keepsake for remembrance.</p>
            </div>
            <div className="use-case-card">
              <h3>Anniversaries</h3>
              <p>Discover what the cosmos looked like on your wedding day or any milestone anniversary.</p>
            </div>
            <div className="use-case-card">
              <h3>Just Because</h3>
              <p>Curious about a random date in history? A first date? Graduation day? Any date becomes a window to the universe.</p>
            </div>
          </div>
        </section>

        <section className="star-date-premium">
          <div className="premium-content">
            <h2>Unlock Premium</h2>
            <div className="premium-features">
              <span className="premium-feature">Unlimited saved dates</span>
              <span className="premium-feature">Video export</span>
              <span className="premium-feature">All premium frames</span>
              <span className="premium-feature">Side-by-side comparison</span>
              <span className="premium-feature">HD image downloads</span>
            </div>
            <p className="premium-price">$2.99/month</p>
          </div>
        </section>

        <div className="nasa-credit">
          <p><strong>Powered by NASA</strong> — Star Date uses NASA's official Astronomy Picture of the Day API. Every image comes with its original title and explanation written by professional astronomers.</p>
        </div>

        <section className="star-date-support">
          <div className="support-content">
            <h2>Support & Contact</h2>
            <p>
              Need help with Star Date or have questions about the app?
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
          <Link to="/star-date-privacy">Privacy Policy</Link>
          <span className="link-separator"> | </span>
          <Link to="/star-date-terms">Terms of Use</Link>
        </div>
      </div>
    </main>
  );
};

export default StarDate;
