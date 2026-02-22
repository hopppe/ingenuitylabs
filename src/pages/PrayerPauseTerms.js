import React from "react";
import "./PrivacyPolicy.css";

const PrayerPauseTerms = () => {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Terms of Use for Prayer Pause</h1>
          <p className="last-updated"><strong>Last updated: February 22, 2026</strong></p>
        </div>

        <section className="policy-section">
          <h2>Agreement to Terms</h2>
          <p>
            By downloading, installing, or using the Prayer Pause mobile application (the "App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App.
          </p>
          <p>
            The App is operated by Ingenuity Labs LLC ("we," "our," or "us"). We reserve the right to modify these Terms at any time. Your continued use of the App following any changes constitutes acceptance of those changes.
          </p>
        </section>

        <section className="policy-section">
          <h2>Description of Service</h2>
          <p>
            Prayer Pause is a mobile application that helps users build a daily prayer habit by blocking selected apps until a prayer or scripture memory session is completed. The App provides features including:
          </p>
          <ul>
            <li>Guided daily prayer sessions with mood check-ins</li>
            <li>Scripture memory with spaced repetition learning</li>
            <li>App blocking via Apple's Screen Time framework</li>
            <li>Prayer streak tracking and journaling</li>
            <li>Customizable prayer schedules and reminders</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Free App with Optional Donations</h2>

          <h3>Free Access</h3>
          <p>
            Prayer Pause is completely free to use. All features are available to all users without any subscription, paywall, or premium tier.
          </p>

          <h3>Donations</h3>
          <p>
            The App offers an optional one-time donation through Apple's In-App Purchase system. Donations are entirely voluntary and do not unlock any additional features.
          </p>
          <ul>
            <li>Donations are processed through Apple's App Store</li>
            <li>All purchases are subject to Apple's standard refund policies</li>
            <li>We do not have access to your payment information</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Screen Time & App Blocking</h2>
          <p>
            Prayer Pause uses Apple's FamilyControls and ManagedSettings frameworks to block apps on your device. By using this feature, you acknowledge that:
          </p>
          <ul>
            <li>You are granting the App permission to manage Screen Time restrictions on your device</li>
            <li>Blocked apps will be inaccessible until you complete your prayer session</li>
            <li>You can modify or remove blocked apps at any time through the App's settings</li>
            <li>Uninstalling the App will remove all app blocking restrictions</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for any unlawful purpose</li>
            <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
            <li>Remove or alter any proprietary notices or labels</li>
            <li>Use the App in any way that could damage or impair it</li>
            <li>Attempt to gain unauthorized access to any systems or networks</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Intellectual Property</h2>

          <h3>App Content</h3>
          <p>
            The App, including its design, features, prayers, and code, is owned by Ingenuity Labs LLC and is protected by copyright and other intellectual property laws.
          </p>

          <h3>Scripture Content</h3>
          <p>
            Bible verses and scripture content included in the App are sourced from public domain translations. Prayer content is original to Ingenuity Labs LLC.
          </p>
        </section>

        <section className="policy-section">
          <h2>Disclaimers</h2>

          <h3>No Warranty</h3>
          <p>
            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>

          <h3>App Blocking</h3>
          <p>
            We do not guarantee that app blocking will function perfectly in all scenarios. Apple may change the Screen Time framework at any time, which could affect blocking functionality.
          </p>

          <h3>Service Availability</h3>
          <p>
            We do not guarantee continuous, uninterrupted access to the App. We may suspend or discontinue the App or any features at any time without notice.
          </p>
        </section>

        <section className="policy-section">
          <h2>Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, INGENUITY LABS LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
          </p>
          <ul>
            <li>Your use or inability to use the App</li>
            <li>Any unauthorized access to or use of our servers</li>
            <li>Any interruption or cessation of transmission to or from the App</li>
            <li>Any bugs, viruses, or other harmful code transmitted through the App</li>
            <li>Any issues arising from app blocking functionality</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Ingenuity Labs LLC and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising from your use of the App or violation of these Terms.
          </p>
        </section>

        <section className="policy-section">
          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>If you have questions about these Terms, please contact us at:</p>
          <p>
            <strong>Email</strong>: <a href="mailto:ethan@ingenuitylabs.net">ethan@ingenuitylabs.net</a>
          </p>
        </section>

        <div className="policy-footer">
          <p>
            These Terms of Use are effective as of the date listed above and apply to all users of the Prayer Pause app.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrayerPauseTerms;
