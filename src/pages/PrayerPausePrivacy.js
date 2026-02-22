import React from "react";
import "./PrivacyPolicy.css";

const PrayerPausePrivacy = () => {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Privacy Policy for Prayer Pause</h1>
          <p className="last-updated"><strong>Last updated: February 22, 2026</strong></p>
        </div>

        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Ingenuity Labs LLC ("we," "our," or "us") operates the Prayer Pause mobile application (the "App"). This Privacy Policy explains our practices regarding information collection and use.
          </p>
          <p>
            By using our App, you agree to the practices described in this Privacy Policy.
          </p>
        </section>

        <section className="policy-section">
          <h2>Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>
            <strong>Prayer Pause does not collect, store, or transmit any personal information to external servers.</strong> All app data is stored locally on your device.
          </p>

          <h3>App Data Stored Locally</h3>
          <p>All app data is stored locally on your device and never leaves your device. This includes:</p>
          <ul>
            <li><strong>Your Name</strong>: Used only for personalized greetings within the app</li>
            <li><strong>Prayer History</strong>: Records of completed prayer sessions</li>
            <li><strong>Mood Entries</strong>: Mood check-in data from your prayer sessions</li>
            <li><strong>Streak Data</strong>: Your prayer streak and calendar history</li>
            <li><strong>Scripture Memory Progress</strong>: Verses you are memorizing and your progress</li>
            <li><strong>App Preferences</strong>: Theme, unlock mode, prayer schedule, and other settings</li>
            <li><strong>Selected Apps</strong>: The apps you choose to block (stored via Apple's Screen Time framework)</li>
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
          <h2>Screen Time & FamilyControls</h2>
          <p>
            Prayer Pause uses Apple's FamilyControls and ManagedSettings frameworks to block and unblock apps on your device. This is handled entirely on-device by Apple's Screen Time system.
          </p>
          <ul>
            <li>We do not have access to which specific apps you use or how often</li>
            <li>App selection data is managed by Apple's framework and stored locally</li>
            <li>We cannot see, access, or transmit your Screen Time data</li>
            <li>All blocking and unblocking happens on-device</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Third-Party Services</h2>

          <h3>Apple App Store</h3>
          <p>
            Prayer Pause is distributed through the Apple App Store. Apple may collect certain information as part of the app download and update process, as described in Apple's Privacy Policy:
          </p>
          <ul>
            <li><strong>Privacy Policy</strong>: <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.apple.com/privacy/</a></li>
          </ul>

          <h3>In-App Purchases</h3>
          <p>
            Prayer Pause offers an optional donation through Apple's App Store. Purchases are processed entirely by Apple. We do not have access to your payment information. Please refer to Apple's Privacy Policy for details on how they handle payment data.
          </p>
        </section>

        <section className="policy-section">
          <h2>Data Storage and Security</h2>

          <h3>Local Storage</h3>
          <ul>
            <li>All user data is stored locally on your device using UserDefaults and SwiftData</li>
            <li>No data is transmitted to or stored on our servers</li>
            <li>We cannot access, view, or recover your locally stored data</li>
          </ul>

          <h3>Device-Level Security</h3>
          <ul>
            <li>Your data is protected by your device's built-in security features</li>
            <li>Data is only accessible through the Prayer Pause app on your device</li>
          </ul>

          <h3>Data Backup</h3>
          <p>
            Prayer Pause data may be included in your device's backup (iCloud, iTunes, etc.) according to your device settings. We do not have access to these backups.
          </p>
        </section>

        <section className="policy-section">
          <h2>Your Rights and Choices</h2>

          <h3>Data Management</h3>
          <ul>
            <li><strong>View Your Data</strong>: All prayer history, mood entries, and streak data are accessible within the app</li>
            <li><strong>Delete All Data</strong>: Uninstalling the app removes all data from your device</li>
          </ul>

          <h3>No Data Requests Needed</h3>
          <p>
            Because all data is stored locally on your device and we have no access to it, you don't need to contact us to access, modify, or delete your data. You have complete control through the app itself.
          </p>
        </section>

        <section className="policy-section">
          <h2>Children's Privacy</h2>
          <p>
            Prayer Pause does not knowingly collect personal information from children under 13 years of age. Because we do not collect any personal information from any users, there are no special privacy concerns related to children's data.
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
          <p>If you have questions about this Privacy Policy or the Prayer Pause app, please contact us at:</p>
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
            Prayer Pause can be used anywhere in the world. Because all user data is stored locally on your device and we don't collect any personal information, there are no cross-border data transfer concerns.
          </p>
        </section>

        <div className="policy-footer">
          <p>
            This Privacy Policy is effective as of the date listed above and applies to all users of the Prayer Pause app.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrayerPausePrivacy;
