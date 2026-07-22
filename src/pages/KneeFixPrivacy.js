import React from "react";
import "./PrivacyPolicy.css";

const KneeFixPrivacy = () => {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Privacy Policy for KneeFix</h1>
          <p className="last-updated"><strong>Last updated: July 21, 2026</strong></p>
        </div>

        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Ingenuity Labs LLC ("we," "our," or "us") operates the KneeFix mobile application (the "App"). This Privacy Policy explains our practices regarding information collection and use.
          </p>
          <p>
            By using our App, you agree to the practices described in this Privacy Policy.
          </p>
        </section>

        <section className="policy-section">
          <h2>Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>
            <strong>KneeFix does not collect, store, or transmit any personal information to our servers.</strong> All app data is stored locally on your device.
          </p>

          <h3>App Data Stored Locally</h3>
          <p>All app data is stored locally on your device and never leaves your device. This includes:</p>
          <ul>
            <li><strong>Questionnaire Answers</strong>: Your answers about where your knee bothers you, how long, how much it affects you, your goal, and any diagnosis you select — used only to build your exercise program on your device</li>
            <li><strong>Exercise Progress</strong>: Completed exercises, finished sets, and session dates</li>
            <li><strong>Streaks and Calendar</strong>: Your session streak and progress calendar history</li>
            <li><strong>Difficulty Settings</strong>: Per-exercise difficulty levels you choose</li>
            <li><strong>App Preferences</strong>: Reminder time and other settings</li>
          </ul>

          <h3>Health Information</h3>
          <p>
            Your questionnaire answers describe general characteristics of knee discomfort. This information:
          </p>
          <ul>
            <li>Is used <strong>only on your device</strong> to select and size your exercise program</li>
            <li>Is <strong>never transmitted</strong> to our servers or any third party</li>
            <li>Is <strong>not connected</strong> to your identity — the App has no accounts and no sign-in</li>
            <li>Is deleted when you delete the App</li>
          </ul>

          <h3>Information NOT Collected</h3>
          <p>We do not collect:</p>
          <ul>
            <li>Email address or any contact information</li>
            <li>Device information or analytics</li>
            <li>Usage statistics or behavioral data</li>
            <li>Location data</li>
            <li>Any information that could identify you</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Notifications</h2>
          <p>
            If you enable the daily reminder, the App schedules a local notification on your device. Notifications are generated entirely on your device — no push notification servers are involved, and no data is sent anywhere.
          </p>
        </section>

        <section className="policy-section">
          <h2>Third-Party Services</h2>
          <p>
            KneeFix uses no third-party analytics, advertising, or tracking SDKs. The App makes no network requests.
          </p>
        </section>

        <section className="policy-section">
          <h2>Children's Privacy</h2>
          <p>
            KneeFix does not collect personal information from anyone, including children under 13. The App is intended for general audiences.
          </p>
        </section>

        <section className="policy-section">
          <h2>Medical Disclaimer</h2>
          <p>
            KneeFix is a personal exercise tracker, not a medical device and not medical advice. The App does not diagnose conditions. If your pain began with an injury, involves swelling, or is getting worse, consult a qualified clinician.
          </p>
        </section>

        <section className="policy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make material changes, we will notify you by updating the "Last updated" date at the top of this policy and through an update notice in the App Store.
          </p>
          <p>
            We will never introduce data collection or tracking without your explicit consent and a clear notification of the change.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy or the KneeFix app, please contact us at:</p>
          <p>
            <strong>Email</strong>: <a href="mailto:ethan@ingenuitylabs.net">ethan@ingenuitylabs.net</a>
          </p>
          <p>
            Please note that because we don't collect or store your data on our servers, we cannot help with data recovery if you lose your device or uninstall the app.
          </p>
        </section>

        <section className="policy-section">
          <h2>International Users</h2>
          <p>
            KneeFix can be used anywhere in the world. Because all user data is stored locally on your device and we don't collect any personal information, there are no cross-border data transfer concerns.
          </p>
        </section>

        <div className="policy-footer">
          <p>
            This Privacy Policy is effective as of the date listed above and applies to all users of the KneeFix app.
          </p>
        </div>
      </div>
    </main>
  );
};

export default KneeFixPrivacy;
