import React from "react";
import "./PrivacyPolicy.css";

const KneeFixTerms = () => {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Terms of Use for KneeFix</h1>
          <p className="last-updated"><strong>Last updated: July 21, 2026</strong></p>
        </div>

        <section className="policy-section">
          <h2>Agreement to Terms</h2>
          <p>
            By downloading, installing, or using the KneeFix mobile application (the "App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App.
          </p>
          <p>
            The App is operated by Ingenuity Labs LLC ("we," "our," or "us"). We reserve the right to modify these Terms at any time. Your continued use of the App following any changes constitutes acceptance of those changes.
          </p>
        </section>

        <section className="policy-section">
          <h2>Description of Service</h2>
          <p>
            KneeFix is a self-guided exercise tracking application for common knee discomfort. Based on a short questionnaire, the App assembles a daily strengthening and stretching routine and helps you follow it. Features include:
          </p>
          <ul>
            <li>A questionnaire that selects and sizes an exercise program</li>
            <li>Daily guided exercise sessions with instructions and timers</li>
            <li>Per-exercise difficulty adjustment</li>
            <li>Progress tracking, streaks, and a session calendar</li>
            <li>Optional local daily reminders</li>
            <li>Ongoing maintenance sessions after a program ends</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Not Medical Advice</h2>
          <p>
            <strong>KneeFix is not a medical device, does not provide medical advice, and does not diagnose, treat, cure, or prevent any disease or condition.</strong> The exercise routines in the App are general wellness content modeled on commonly published exercise progressions.
          </p>
          <ul>
            <li>Always consult a physician, physical therapist, or other qualified health provider before beginning any exercise program</li>
            <li>If your pain began with an injury, involves swelling, locking, giving way, or is getting worse, see a clinician before using the App</li>
            <li>Stop any exercise that causes sharp pain</li>
            <li>Never disregard professional medical advice or delay seeking it because of something in the App</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Assumption of Risk</h2>
          <p>
            Physical exercise carries inherent risk of injury. By using the App you acknowledge these risks and agree that you exercise voluntarily and at your own risk. You are responsible for choosing appropriate difficulty levels and exercising within your own limits.
          </p>
        </section>

        <section className="policy-section">
          <h2>Price</h2>
          <p>
            KneeFix is currently offered free of charge. If paid features are introduced in the future, they will be clearly presented in the App and processed through Apple's App Store, and these Terms will be updated accordingly.
          </p>
        </section>

        <section className="policy-section">
          <h2>Intellectual Property</h2>
          <p>
            The App, including its design, text, graphics, and exercise content, is owned by Ingenuity Labs LLC and protected by intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the App without our written permission.
          </p>
        </section>

        <section className="policy-section">
          <h2>Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Use the App for any unlawful purpose</li>
            <li>Misrepresent the App or its content as medical advice to others</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Disclaimer of Warranties</h2>
          <p>
            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL MEET YOUR REQUIREMENTS OR PRODUCE ANY PARTICULAR HEALTH OUTCOME.
          </p>
        </section>

        <section className="policy-section">
          <h2>Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, INGENUITY LABS LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY INJURY, LOSS OF DATA, OR OTHER LOSSES RESULTING FROM YOUR USE OF THE APP.
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
          <p>If you have questions about these Terms or the KneeFix app, please contact us at:</p>
          <p>
            <strong>Email</strong>: <a href="mailto:ethan@ingenuitylabs.net">ethan@ingenuitylabs.net</a>
          </p>
        </section>

        <div className="policy-footer">
          <p>
            These Terms of Use are effective as of the date listed above and apply to all users of the KneeFix app.
          </p>
        </div>
      </div>
    </main>
  );
};

export default KneeFixTerms;
