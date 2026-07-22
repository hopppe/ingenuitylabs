import React from "react";
import "./PrivacyPolicy.css";

const GhostRacePrivacy = () => {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Privacy Policy for Ghost Race</h1>
          <p className="last-updated"><strong>Last updated: July 21, 2026</strong></p>
        </div>

        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Ingenuity Labs LLC ("we," "our," or "us") operates the Ghost Race mobile application
            (the "App"). This Privacy Policy explains our practices regarding information collection
            and use. By using our App, you agree to the practices described here.
          </p>
        </section>

        <section className="policy-section">
          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>
            <strong>Ghost Race does not collect, store, or transmit any personal information to our
            servers.</strong> The App has no accounts, no login, and no analytics or tracking SDKs.
          </p>

          <h3>App Data Stored Locally</h3>
          <p>All app data is stored locally on your device and never leaves it. This includes:</p>
          <ul>
            <li><strong>Display Name</strong>: The nickname you optionally choose, shown on the ghosts you send to friends. It is stored only on your device.</li>
            <li><strong>Scores &amp; Bests</strong>: Your distances, daily results, and rivalry streaks.</li>
            <li><strong>Character Choice</strong>: The ghost you select.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Challenge Links</h2>
          <p>
            When you challenge a friend, the App creates a link that encodes the game seed and your
            recorded inputs so they can race your "ghost." This link is created on your device and
            shared by you through your own messaging app. We do not operate any server that receives,
            stores, or processes these links or their contents. The nickname you chose is included in
            the link so your friend knows who challenged them.
          </p>
        </section>

        <section className="policy-section">
          <h2>Children's Privacy</h2>
          <p>
            The App does not collect personal information from anyone, including children under 13.
          </p>
        </section>

        <section className="policy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be reflected by the
            "Last updated" date above.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact</h2>
          <p>
            Questions about this Privacy Policy? Contact us at{" "}
            <a href="mailto:ethan@ingenuitylabs.net">ethan@ingenuitylabs.net</a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default GhostRacePrivacy;
