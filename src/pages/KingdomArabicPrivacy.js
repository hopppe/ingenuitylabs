import React from "react";
import "./PrivacyPolicy.css";

const KingdomArabicPrivacy = () => {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Privacy Policy for Kingdom Arabic</h1>
          <p className="last-updated"><strong>Last updated: November 19, 2025</strong></p>
        </div>

        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Kingdom Arabic ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains our practices regarding the Kingdom Arabic mobile application (the "App").
          </p>
          <p>
            By using our App, you agree to the practices described in this Privacy Policy.
          </p>
        </section>

        <section className="policy-section">
          <h2>Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>
            <strong>Kingdom Arabic does not collect, store, or transmit any personal information.</strong> The app is designed to operate entirely on your device without any backend services, cloud storage, or user accounts.
          </p>

          <h3>App Data Stored Locally</h3>
          <p>All app data is stored locally on your device and never leaves your device. This includes:</p>
          <ul>
            <li><strong>Flashcard Data</strong>: Arabic words, English translations, and your learning progress</li>
            <li><strong>Study Preferences</strong>: Display settings and study session preferences</li>
            <li><strong>Bible Content</strong>: The Bible text and word mappings are bundled with the app</li>
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
          <h2>How Your Data is Stored</h2>

          <h3>100% Local Storage</h3>
          <ul>
            <li>All app data is stored exclusively on your device using AsyncStorage</li>
            <li>Bible content is bundled with the app as local JSON files</li>
            <li>No data is ever transmitted to our servers or any third-party services</li>
            <li>No internet connection is required or used for app functionality</li>
          </ul>

          <h3>Data Control</h3>
          <ul>
            <li>You have complete control over your data at all times</li>
            <li>Deleting the app removes all associated data from your device</li>
            <li>We cannot access, view, or recover your data</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Information Sharing</h2>
          <p>
            <strong>We do not share any information because we do not collect any information.</strong> Your learning data never leaves your device.
          </p>

          <h3>No Third-Party Services</h3>
          <ul>
            <li>No analytics services</li>
            <li>No cloud storage providers</li>
            <li>No authentication services</li>
            <li>No advertising networks</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Data Security</h2>

          <h3>Device-Level Security</h3>
          <ul>
            <li>Your data is protected by your device's built-in security features</li>
            <li>Data is only accessible through the Kingdom Arabic app on your device</li>
            <li>No transmission of data means no risk of interception</li>
          </ul>

          <h3>Data Backup</h3>
          <p>
            Kingdom Arabic data may be included in your device's backup (iCloud, iTunes, etc.) according to your device settings. We do not have access to these backups.
          </p>
        </section>

        <section className="policy-section">
          <h2>Your Rights and Choices</h2>

          <h3>Data Management</h3>
          <ul>
            <li><strong>View Your Data</strong>: All data is accessible within the app</li>
            <li><strong>Delete Individual Items</strong>: Remove flashcards or reset progress within the app</li>
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
            Kingdom Arabic is safe for users of all ages, including children under 13. Because we do not collect any personal information, there are no privacy concerns related to children's data.
          </p>
        </section>

        <section className="policy-section">
          <h2>Third-Party Services</h2>

          <h3>Apple App Store</h3>
          <p>
            Kingdom Arabic is distributed through the Apple App Store. Apple may collect certain information as part of the app download and update process, as described in Apple's Privacy Policy:
          </p>
          <ul>
            <li><strong>Privacy Policy</strong>: <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.apple.com/privacy/</a></li>
          </ul>

          <h3>No Other Third Parties</h3>
          <p>Kingdom Arabic does not integrate with any other third-party services, SDKs, or libraries that collect user data.</p>
        </section>

        <section className="policy-section">
          <h2>Offline-Only Functionality</h2>
          <p>
            Kingdom Arabic is designed to work entirely offline:
          </p>
          <ul>
            <li>No internet connection required</li>
            <li>All Bible content stored locally with the app</li>
            <li>No data synchronization or cloud backup features</li>
            <li>Complete privacy and independence from network services</li>
          </ul>
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
          <p>If you have questions about this Privacy Policy or the Kingdom Arabic app, please contact us at:</p>
          <p>
            <strong>Email</strong>: <a href="mailto:ethan@ingenuitylabs.net">ethan@ingenuitylabs.net</a>
          </p>
          <p>
            Please note that because we don't collect or store your data, we cannot help with data recovery if you lose your device or uninstall the app.
          </p>
        </section>

        <section className="policy-section">
          <h2>International Users</h2>
          <p>
            Kingdom Arabic can be used anywhere in the world. Because all data is stored locally on your device and we don't collect any information, there are no cross-border data transfer concerns.
          </p>
        </section>

        <div className="policy-footer">
          <p>
            This Privacy Policy is effective as of the date listed above and applies to all users of the Kingdom Arabic app.
          </p>
        </div>
      </div>
    </main>
  );
};

export default KingdomArabicPrivacy;
