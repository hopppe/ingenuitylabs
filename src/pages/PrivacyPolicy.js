import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Privacy Policy for Free Split</h1>
          <p className="last-updated"><strong>Last updated: June 23, 2025</strong></p>
        </div>

        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Free Split ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Free Split (the "App").
          </p>
          <p>
            By using our App, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </section>

        <section className="policy-section">
          <h2>Information We Collect</h2>
          
          <h3>Personal Information You Provide</h3>
          <ul>
            <li><strong>Account Information</strong>: When you create an account, we collect your email address and name</li>
            <li><strong>Profile Information</strong>: Display name and any profile information you choose to provide</li>
            <li><strong>Group and Expense Data</strong>: Trip names, expense descriptions, amounts, categories, and participant information you enter</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li><strong>Device Information</strong>: Device type, operating system version, and app version</li>
            <li><strong>Usage Data</strong>: How you interact with the App, features used, and app performance data</li>
            <li><strong>Authentication Data</strong>: Unique user identifiers for account management</li>
          </ul>

          <h3>Information from Third Parties</h3>
          <ul>
            <li><strong>Firebase Services</strong>: We use Google Firebase for authentication and data storage, which may collect additional technical information as described in Google's Privacy Policy</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and maintain the App's functionality</li>
            <li>Create and manage your user account</li>
            <li>Store and sync your expense and group data</li>
            <li>Enable real-time collaboration with other users</li>
            <li>Provide customer support</li>
            <li>Improve and optimize the App</li>
            <li>Ensure the security and integrity of the App</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
          
          <h3>With Other Users</h3>
          <ul>
            <li>Group members can see expense data, participant names, and balances within shared groups</li>
            <li>Your name and email may be visible to other members of groups you join</li>
          </ul>

          <h3>With Service Providers</h3>
          <ul>
            <li><strong>Google Firebase</strong>: For authentication, database services, and app infrastructure</li>
            <li><strong>Apple App Store</strong>: For app distribution and analytics (if you opt-in)</li>
          </ul>

          <h3>Legal Requirements</h3>
          <p>We may disclose your information if required by law or in response to valid legal requests.</p>
        </section>

        <section className="policy-section">
          <h2>Data Storage and Security</h2>
          
          <h3>Data Storage</h3>
          <ul>
            <li>Your data is stored securely using Google Firebase services</li>
            <li>Data is encrypted in transit and at rest</li>
            <li>We implement industry-standard security measures to protect your information</li>
          </ul>

          <h3>Data Retention</h3>
          <ul>
            <li>Account data is retained while your account is active</li>
            <li>You can delete your account and associated data at any time</li>
            <li>Some data may be retained for legal or security purposes as required by law</li>
          </ul>

          <h3>International Data Transfers</h3>
          <p>Your data may be transferred to and stored in countries other than your own, including the United States, where our service providers operate.</p>
        </section>

        <section className="policy-section">
          <h2>Your Rights and Choices</h2>
          
          <h3>Account Management</h3>
          <ul>
            <li>Access and update your account information within the App</li>
            <li>Delete your account and associated data</li>
            <li>Export your data (contact us for assistance)</li>
          </ul>

          <h3>Privacy Controls</h3>
          <ul>
            <li>Control what information you share in groups</li>
            <li>Manage notification preferences</li>
            <li>Opt out of non-essential communications</li>
          </ul>

          <h3>Data Deletion</h3>
          <p>To delete your account and data:</p>
          <ol>
            <li>Contact us at ethan@ingenuitylabs.net</li>
            <li>We will process your request within 30 days</li>
            <li>Some data may be retained as required by law</li>
          </ol>
        </section>

        <section className="policy-section">
          <h2>Children's Privacy</h2>
          <p>
            Free Split is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to remove such information.
          </p>
        </section>

        <section className="policy-section">
          <h2>Third-Party Services</h2>
          <p>Our App uses the following third-party services:</p>
          
          <h3>Google Firebase</h3>
          <ul>
            <li><strong>Purpose</strong>: Authentication, database, and app infrastructure</li>
            <li><strong>Data Collected</strong>: As described in Google's Privacy Policy</li>
            <li><strong>Privacy Policy</strong>: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
          </ul>

          <h3>Apple Services</h3>
          <ul>
            <li><strong>Purpose</strong>: App distribution and device integration</li>
            <li><strong>Data Collected</strong>: As described in Apple's Privacy Policy</li>
            <li><strong>Privacy Policy</strong>: <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.apple.com/privacy/</a></li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Offline Functionality</h2>
          <p>When you use the App offline:</p>
          <ul>
            <li>Data is stored locally on your device</li>
            <li>Data syncs with our servers when you reconnect to the internet</li>
            <li>Local data is protected by your device's security features</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
          <ul>
            <li>Posting the new Privacy Policy in the App</li>
            <li>Sending you a notification through the App</li>
            <li>Updating the "Last updated" date at the top of this policy</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
          <p>
            <strong>Email</strong>: <a href="mailto:ethan@ingenuitylabs.net">ethan@ingenuitylabs.net</a><br/>
            <strong>App Support</strong>: Through the Free Split app settings
          </p>
        </section>

        <section className="policy-section">
          <h2>Your California Privacy Rights</h2>
          <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
          <ul>
            <li>Right to know what personal information we collect</li>
            <li>Right to delete personal information</li>
            <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
            <li>Right to non-discrimination for exercising your privacy rights</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided above.</p>
        </section>

        <section className="policy-section">
          <h2>International Users</h2>
          <p>
            If you are located outside the United States, please note that we transfer your information to the United States and other countries where our service providers operate. By using our App, you consent to such transfers.
          </p>
        </section>

        <div className="policy-footer">
          <p>
            This Privacy Policy is effective as of the date listed above and applies to all users of the Free Split app.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy; 