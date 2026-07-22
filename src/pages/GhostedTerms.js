import React from "react";
import "./PrivacyPolicy.css";

const GhostedTerms = () => {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Terms of Use for Ghosted</h1>
          <p className="last-updated"><strong>Last updated: July 21, 2026</strong></p>
        </div>

        <section className="policy-section">
          <h2>Agreement to Terms</h2>
          <p>
            By downloading, installing, or using the Ghosted mobile application (the "App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App.
          </p>
          <p>
            The App is operated by Ingenuity Labs LLC ("we," "our," or "us"). We reserve the right to modify these Terms at any time. Your continued use of the App following any changes constitutes acceptance of those changes.
          </p>
        </section>

        <section className="policy-section">
          <h2>Description of Service</h2>
          <p>
            Ghosted is a single-player arcade game with a social challenge feature. You guide a character through a procedurally generated course, and each run can be shared with friends as a "ghost" they race against. Features include:
          </p>
          <ul>
            <li>One-touch arcade gameplay with a daily shared course</li>
            <li>Recording your runs as ghosts you can challenge friends to beat</li>
            <li>Challenge links you share through your own messaging apps</li>
            <li>Local rivalry tracking and streaks</li>
            <li>Selectable cosmetic characters</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>User Conduct and Shared Content</h2>
          <p>
            When you challenge a friend, the App creates a link that includes a nickname you choose. You are responsible for the nickname you enter and for who you choose to share links with. Do not enter names that are offensive, infringing, or that impersonate others. Challenge links are generated and shared by you; we do not host, moderate, or transmit them.
          </p>
        </section>

        <section className="policy-section">
          <h2>Price</h2>
          <p>
            Ghosted is currently offered free of charge. If paid features are introduced in the future, they will be clearly presented in the App and processed through Apple's App Store, and these Terms will be updated accordingly.
          </p>
        </section>

        <section className="policy-section">
          <h2>Intellectual Property</h2>
          <p>
            The App, including its design, characters, artwork, and code, is owned by Ingenuity Labs LLC and protected by intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the App without our written permission.
          </p>
        </section>

        <section className="policy-section">
          <h2>Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Use the App or its challenge links for any unlawful purpose</li>
            <li>Attempt to disrupt or abuse the App or other users</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Disclaimer of Warranties</h2>
          <p>
            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED OR ERROR-FREE.
          </p>
        </section>

        <section className="policy-section">
          <h2>Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, INGENUITY LABS LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA OR OTHER LOSSES RESULTING FROM YOUR USE OF THE APP.
          </p>
        </section>

        <section className="policy-section">
          <h2>Termination</h2>
          <p>
            You may stop using the App at any time by deleting it from your device. We may discontinue the App or any feature at any time without notice.
          </p>
        </section>

        <section className="policy-section">
          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United States and the state in which Ingenuity Labs LLC is organized, without regard to conflict of law principles.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>If you have questions about these Terms or the Ghosted app, please contact us at:</p>
          <p>
            <strong>Email</strong>: <a href="mailto:ethan@ingenuitylabs.net">ethan@ingenuitylabs.net</a>
          </p>
        </section>

        <div className="policy-footer">
          <p>
            These Terms of Use are effective as of the date listed above and apply to all users of the Ghosted app.
          </p>
        </div>
      </div>
    </main>
  );
};

export default GhostedTerms;
