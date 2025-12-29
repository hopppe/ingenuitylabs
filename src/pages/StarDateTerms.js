import React from "react";
import "./PrivacyPolicy.css";

const StarDateTerms = () => {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Terms of Use for Star Date</h1>
          <p className="last-updated"><strong>Last updated: December 28, 2024</strong></p>
        </div>

        <section className="policy-section">
          <h2>Agreement to Terms</h2>
          <p>
            By downloading, installing, or using the Star Date mobile application (the "App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App.
          </p>
          <p>
            The App is operated by Ingenuity Labs LLC ("we," "our," or "us"). We reserve the right to modify these Terms at any time. Your continued use of the App following any changes constitutes acceptance of those changes.
          </p>
        </section>

        <section className="policy-section">
          <h2>Description of Service</h2>
          <p>
            Star Date is a mobile application that allows users to view NASA's Astronomy Picture of the Day (APOD) for any date since June 16, 1995. The App provides features including:
          </p>
          <ul>
            <li>Viewing NASA APOD images by date</li>
            <li>Saving favorite dates for quick access</li>
            <li>Creating shareable cards and videos</li>
            <li>Comparing two dates side by side</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Subscription Terms</h2>

          <h3>Free Features</h3>
          <p>
            The App offers limited free functionality, including the ability to view APOD images and save a limited number of dates.
          </p>

          <h3>Premium Subscription</h3>
          <p>
            Star Date offers a premium subscription ("Star Date Pro") that unlocks additional features including unlimited saved dates, video export, and premium frames.
          </p>

          <h3>Billing</h3>
          <ul>
            <li>Payment will be charged to your Apple ID account at confirmation of purchase</li>
            <li>Subscription automatically renews unless canceled at least 24 hours before the end of the current period</li>
            <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
            <li>You can manage and cancel your subscription in your App Store account settings</li>
          </ul>

          <h3>Cancellation</h3>
          <p>
            You may cancel your subscription at any time through your App Store account settings. Cancellation will take effect at the end of the current billing period. No refunds will be provided for partial subscription periods.
          </p>

          <h3>Price Changes</h3>
          <p>
            We reserve the right to change subscription prices. Any price changes will apply to subsequent subscription periods and you will be notified in advance.
          </p>
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
            The App, including its design, features, and code, is owned by Ingenuity Labs LLC and is protected by copyright and other intellectual property laws.
          </p>

          <h3>NASA Content</h3>
          <p>
            Images and descriptions displayed in the App are provided by NASA through the Astronomy Picture of the Day API. NASA content is generally not copyrighted and is in the public domain. However, some images may be copyrighted by their original creators. Credit information is provided with each image.
          </p>

          <h3>User-Generated Content</h3>
          <p>
            When you create and share cards or videos using the App, you retain ownership of your personal additions. You grant us a license to display and process this content solely for the purpose of providing the App's features.
          </p>
        </section>

        <section className="policy-section">
          <h2>Disclaimers</h2>

          <h3>No Warranty</h3>
          <p>
            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>

          <h3>Third-Party Content</h3>
          <p>
            We are not responsible for the accuracy, completeness, or availability of NASA APOD content. NASA may modify or discontinue the APOD service at any time without notice.
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
            These Terms of Use are effective as of the date listed above and apply to all users of the Star Date app.
          </p>
        </div>
      </div>
    </main>
  );
};

export default StarDateTerms;
