import React from "react";
import "./PrivacyPolicy.css";

const StarDatePrivacy = () => {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Privacy Policy for Star Date</h1>
          <p className="last-updated"><strong>Last updated: December 22, 2025</strong></p>
        </div>

        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Ingenuity Labs LLC ("we," "our," or "us") operates the Star Date mobile application (the "App"). This Privacy Policy explains our practices regarding information collection and use.
          </p>
          <p>
            By using our App, you agree to the practices described in this Privacy Policy.
          </p>
        </section>

        <section className="policy-section">
          <h2>Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>
            <strong>Star Date does not collect, store, or transmit any personal information to external servers.</strong> All app data, including your saved dates and preferences, is stored locally on your device.
          </p>

          <h3>App Data Stored Locally</h3>
          <p>All app data is stored locally on your device and never leaves your device. This includes:</p>
          <ul>
            <li><strong>Saved Dates</strong>: Dates you choose to save for quick access</li>
            <li><strong>Preferences</strong>: Display settings and app preferences</li>
          </ul>

          <h3>Information NOT Collected</h3>
          <p>We do not collect:</p>
          <ul>
            <li>Name, email address, or any personal identifiers</li>
            <li>Device information or analytics</li>
            <li>Usage statistics or behavioral data</li>
            <li>Location data</li>
            <li>Any information that could identify you</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Third-Party Services</h2>

          <h3>NASA APOD API</h3>
          <p>
            Star Date uses NASA's Astronomy Picture of the Day (APOD) API to fetch publicly available space imagery. When you request an image for a specific date:
          </p>
          <ul>
            <li>Only the requested date is sent to NASA's servers</li>
            <li>No personal information is transmitted</li>
            <li>NASA's servers return the image and description for that date</li>
          </ul>
          <p>
            For more information about NASA's data practices, visit: <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">https://api.nasa.gov/</a>
          </p>

          <h3>Apple App Store</h3>
          <p>
            Star Date is distributed through the Apple App Store. Apple may collect certain information as part of the app download and update process, as described in Apple's Privacy Policy:
          </p>
          <ul>
            <li><strong>Privacy Policy</strong>: <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.apple.com/privacy/</a></li>
          </ul>

          <h3>In-App Purchases</h3>
          <p>
            Subscription purchases are processed entirely through Apple's App Store. We do not have access to your payment information. Please refer to Apple's Privacy Policy for details on how they handle payment data.
          </p>
        </section>

        <section className="policy-section">
          <h2>Data Storage and Security</h2>

          <h3>Local Storage</h3>
          <ul>
            <li>All user preferences and saved dates are stored locally on your device using AsyncStorage</li>
            <li>No data is transmitted to or stored on our servers</li>
            <li>We cannot access, view, or recover your locally stored data</li>
          </ul>

          <h3>Device-Level Security</h3>
          <ul>
            <li>Your data is protected by your device's built-in security features</li>
            <li>Data is only accessible through the Star Date app on your device</li>
          </ul>

          <h3>Data Backup</h3>
          <p>
            Star Date data may be included in your device's backup (iCloud, iTunes, etc.) according to your device settings. We do not have access to these backups.
          </p>
        </section>

        <section className="policy-section">
          <h2>Your Rights and Choices</h2>

          <h3>Data Management</h3>
          <ul>
            <li><strong>View Your Data</strong>: All saved dates are accessible within the app</li>
            <li><strong>Delete Individual Items</strong>: Remove saved dates within the app</li>
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
            Star Date does not knowingly collect personal information from children under 13 years of age. Because we do not collect any personal information from any users, there are no special privacy concerns related to children's data.
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
          <p>If you have questions about this Privacy Policy or the Star Date app, please contact us at:</p>
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
            Star Date can be used anywhere in the world. Because all user data is stored locally on your device and we don't collect any personal information, there are no cross-border data transfer concerns.
          </p>
        </section>

        <div className="policy-footer">
          <p>
            This Privacy Policy is effective as of the date listed above and applies to all users of the Star Date app.
          </p>
        </div>
      </div>
    </main>
  );
};

export default StarDatePrivacy;
