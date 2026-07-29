import React from "react";
import "./PrivacyPolicy.css";

const LossBossPrivacy = () => {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Privacy Policy for LossBoss</h1>
          <p className="last-updated"><strong>Last updated: July 29, 2026</strong></p>
        </div>

        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Ingenuity Labs LLC ("we," "our," or "us") operates the LossBoss mobile application
            (the "App"), an AI weight-loss coaching app. This Privacy Policy explains our practices
            regarding information collection and use. By using our App, you agree to the practices
            described here.
          </p>
        </section>

        <section className="policy-section">
          <h2>Your Data Lives on Your Device</h2>
          <p>
            <strong>LossBoss stores your personal data locally on your phone.</strong> The App has
            no accounts and no login. Your profile (age, height, weight, goals, food preferences),
            weigh-ins, food logs, workouts, chat history, and everything the coach "remembers" about
            you are stored only on your device. We do not operate a database of user data, and we
            cannot see it. Deleting the App (or using Settings → Reset all data) permanently deletes
            this data.
          </p>
        </section>

        <section className="policy-section">
          <h2>AI Processing</h2>
          <p>
            To generate coaching replies, meal suggestions, and photo-based calorie estimates, the
            App sends the relevant conversation context — which may include your first name, goals,
            recent stats, messages, and meal photos you choose to submit — through our relay server
            to OpenAI, our AI provider, for processing. Our relay is stateless: it does not log,
            store, or retain your messages or photos. OpenAI processes this data to generate the
            response, subject to{" "}
            <a href="https://openai.com/policies/api-data-usage-policies" target="_blank" rel="noreferrer">
              OpenAI's API data usage policies
            </a>{" "}
            (API data is not used to train their models). Do not include information in chat that
            you do not want processed this way.
          </p>
        </section>

        <section className="policy-section">
          <h2>Memes</h2>
          <p>
            If you choose the <strong>Meme Master</strong> coach personality, the coach can send
            memes into your chat. To find one, it writes a short search phrase — a few generic
            words such as "tired" or "monday morning" — and the App sends <em>only that phrase</em>{" "}
            through our relay server to{" "}
            <a href="https://tenor.com" target="_blank" rel="noreferrer">Tenor</a>, a GIF and meme
            library operated by Google. Your chat messages, name, photos, and personal stats are
            never sent to Tenor. Because the search runs through our relay, your IP address is not
            shared with Tenor at this step, and our relay does not log or retain the phrase.
          </p>
          <p>
            The App then downloads the meme image itself directly from Tenor's servers. As with
            loading any image from the internet, that request reveals your device's IP address and
            which image was requested to Tenor and Google, subject to{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              Google's Privacy Policy
            </a>. Meme results are restricted to Tenor's strictest content filter.
          </p>
          <p>
            If you use any other coach personality, the App never contacts Tenor. You can switch
            personalities anytime in Settings → Coach personality.
          </p>
        </section>

        <section className="policy-section">
          <h2>Apple Health</h2>
          <p>
            With your permission, the App reads your step count from Apple Health and can save your
            weigh-ins to Apple Health. Health data is used only on your device for the features
            described and is never sent to us. You can revoke access anytime in iOS Settings →
            Health → Data Access.
          </p>
        </section>

        <section className="policy-section">
          <h2>Subscriptions</h2>
          <p>
            Subscriptions are processed by Apple through your App Store account. We do not receive
            your payment details.
          </p>
        </section>

        <section className="policy-section">
          <h2>Notifications</h2>
          <p>
            Reminders (weigh-ins, meals, workouts, hydration) are local notifications scheduled on
            your device. We do not operate a push-notification server.
          </p>
        </section>

        <section className="policy-section">
          <h2>Children's Privacy</h2>
          <p>
            The App is not directed at children under 13 and does not knowingly collect personal
            information from them. LossBoss is designed for adults.
          </p>
        </section>

        <section className="policy-section">
          <h2>Not Medical Advice</h2>
          <p>
            LossBoss provides general wellness information and coaching, not medical advice,
            diagnosis, or treatment. Consult a physician before beginning any weight-loss program.
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

export default LossBossPrivacy;
