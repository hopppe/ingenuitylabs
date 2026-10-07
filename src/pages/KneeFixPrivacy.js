import React from "react";
import "./PrivacyPolicy.css";

const KneeFixPrivacy = () => {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Privacy Policy for KneeFix</h1>
          <p className="last-updated"><strong>Last updated: October 7, 2026</strong></p>
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
            <strong>KneeFix does not collect or store any personal information on our servers.</strong> All app data is stored locally on your device. The only exception is the optional, paid KneeFix Coach feature, which sends data to OpenAI only after your explicit consent, as described under AI Coach (Optional) below.
          </p>

          <h3>App Data Stored Locally</h3>
          <p>All app data is stored locally on your device. Unless you turn on the optional KneeFix Coach (see below), it never leaves your device. This includes:</p>
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
            <li>Is <strong>never transmitted</strong> to our servers or any third party, unless you consent to the optional KneeFix Coach (see AI Coach below)</li>
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
          <h2>AI Coach (Optional)</h2>
          <p>
            KneeFix Coach is an optional, paid feature. It is off until you subscribe and give
            explicit consent inside the App. If you never use it, nothing described in this section
            happens and the App makes no network requests.
          </p>

          <h3>What Is Sent</h3>
          <p>
            Once you consent, the App sends the following to generate each coaching response:
          </p>
          <ul>
            <li><strong>Your exercise program and upcoming workouts</strong></li>
            <li><strong>Completion history</strong> — which exercises and sessions you have completed and when</li>
            <li><strong>Difficulty levels</strong> you have chosen for each exercise</li>
            <li><strong>Your equipment settings</strong></li>
            <li>
              <strong>Messages you type to the coach</strong> — these may include symptoms such as
              soreness or pain, if you choose to mention them
            </li>
          </ul>
          <p>
            Do not include information in a message that you do not want processed this way.
          </p>

          <h3>Purpose</h3>
          <p>
            This data is used for exactly one purpose: generating coaching replies and proposed
            changes to your plan. We do not use it for advertising, we do not sell it, and we do
            not share it with data brokers.
          </p>

          <h3>Who Receives It</h3>
          <p>
            The data is sent through a relay server operated by Ingenuity Labs to OpenAI, our AI
            provider. Our relay is stateless: it does not log, store, or retain your messages or
            program data. OpenAI processes the data to generate the response, subject to{" "}
            <a href="https://openai.com/policies/api-data-usage-policies" target="_blank" rel="noreferrer">
              OpenAI's API data usage policies
            </a>{" "}
            (API data is not used to train their models).
          </p>
          <p>
            <strong>Third-party protection.</strong> OpenAI is the only third party that receives
            this data, and it receives it solely as our data processor, acting on our instructions.
            Under OpenAI's API terms and Data Processing Addendum it is contractually required to
            provide the same or equivalent protection for that data as this policy commits us to: it
            may not use it to train its models, may not sell or disclose it, must keep it secure,
            and deletes it within 30 days (retaining it briefly only to monitor for abuse).
          </p>

          <h3>Your Consent</h3>
          <p>
            <strong>This sharing only happens with your explicit permission.</strong> The App asks
            for your consent before any data is sent to OpenAI, and you can withdraw it at any time
            in Settings within the App. Once withdrawn, nothing further is sent, and the Coach is
            paused.
          </p>

          <h3>Everything Else Stays on Your Device</h3>
          <p>
            Your questionnaire answers, reminder settings, and all other App data remain on your
            device and are not part of what is sent.
          </p>

          <h3>Not Medical Advice</h3>
          <p>
            The Coach is an AI and is not medical advice. It does not diagnose conditions, and its
            replies and suggested plan changes may be wrong. See the Medical Disclaimer below.
          </p>
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
            KneeFix uses no third-party analytics, advertising, or tracking SDKs. The only network requests the App makes are those for the optional KneeFix Coach, which sends data to OpenAI through our relay only after your explicit consent (see AI Coach above). Subscription purchases are processed by Apple.
          </p>
        </section>

        <section className="policy-section">
          <h2>Children's Privacy</h2>
          <p>
            KneeFix does not knowingly collect personal information from anyone, including children under 13, and the optional KneeFix Coach is not intended for children under 13. The App is intended for general audiences.
          </p>
        </section>

        <section className="policy-section">
          <h2>Medical Disclaimer</h2>
          <p>
            KneeFix is a personal exercise tracker, not a medical device and not medical advice. The App, including the optional AI Coach, does not diagnose conditions. If your pain began with an injury, involves swelling, or is getting worse, consult a qualified clinician.
          </p>
        </section>

        <section className="policy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make material changes, we will notify you by updating the "Last updated" date at the top of this policy and through an update notice in the App Store.
          </p>
          <p>
            We will never introduce new data collection or tracking without your explicit consent and a clear notification of the change.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy or the KneeFix app, please contact us at:</p>
          <p>
            <strong>Email</strong>: <a href="mailto:ethan@ingenuitylabs.net">ethan@ingenuitylabs.net</a>
          </p>
          <p>
            Please note that because we don't store your data on our servers, we cannot help with data recovery if you lose your device or uninstall the app.
          </p>
        </section>

        <section className="policy-section">
          <h2>International Users</h2>
          <p>
            KneeFix can be used anywhere in the world. All user data is stored locally on your device. If you use the optional KneeFix Coach, the data described above is processed by OpenAI, which may process it in the United States or other countries where it operates.
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
