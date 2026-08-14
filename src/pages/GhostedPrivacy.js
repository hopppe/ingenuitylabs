import React from "react";
import "./PrivacyPolicy.css";

const GhostedPrivacy = () => {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Privacy Policy for Ghosted</h1>
          <p className="last-updated"><strong>Last updated: August 15, 2026</strong></p>
        </div>

        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Ingenuity Labs LLC ("we," "our," or "us") operates the Ghosted mobile application
            (the "App"). This Privacy Policy explains what information the App handles and why.
            By using our App, you agree to the practices described here.
          </p>
          <p>
            The short version: Ghosted has no accounts, no logins, no advertising, and no analytics
            or tracking SDKs. We never track you across other apps or websites, and we never sell or
            share your information. Two features — the global leaderboard and challenge links — do
            send a small amount of gameplay data to our servers, and those are described in full below.
          </p>
        </section>

        <section className="policy-section">
          <h2>Information We Collect</h2>

          <h3>Leaderboard Submissions</h3>
          <p>
            The App includes a public leaderboard (an all-time board and a daily board that resets at
            midnight UTC). <strong>Nothing is submitted to the leaderboard unless you choose a ghost
            name.</strong> If you never set a name, your scores stay on your device.
          </p>
          <p>Once you set a name, a qualifying run sends us:</p>
          <ul>
            <li><strong>Ghost name</strong>: the nickname you typed (up to 18 characters).</li>
            <li><strong>Player ID</strong>: a random identifier the App generates on your device the first time you play. See "About the Player ID" below.</li>
            <li><strong>Distance</strong>: how far that run went.</li>
            <li><strong>Character</strong>: which ghost skin you were using.</li>
            <li><strong>Timestamp</strong>: when the run was submitted.</li>
          </ul>
          <p>
            Leaderboard entries are <strong>public</strong>. They are displayed inside the App and on
            this website to anyone who looks. Please choose a nickname rather than your real name.
          </p>

          <h3>Challenge Links</h3>
          <p>
            When you challenge a friend, the App creates a link that lets them race your "ghost." To
            keep those links short and to show a preview image when they are shared, the App uploads
            the run to our server at the end of each run and stores it under a random eight-character
            key. This upload happens automatically when a run ends, whether or not you go on to share
            the link. Each stored challenge contains:
          </p>
          <ul>
            <li><strong>Ghost name</strong>: your nickname, so your friend knows who challenged them. If you have not set one, the App sends "A rival" instead.</li>
            <li><strong>Distance</strong>: the score for that run.</li>
            <li><strong>Replay data</strong>: the game seed and the compressed record of your taps for that run, which is what makes the ghost race possible.</li>
          </ul>
          <p>
            A stored challenge is readable by anyone who has its link. The links are unguessable in
            practice, but they are not secret — treat sharing one the way you would treat sharing any
            public link. Challenge records contain no personal information beyond the nickname you
            chose.
          </p>

          <h3>Stored Only on Your Device</h3>
          <p>The following never leaves your phone:</p>
          <ul>
            <li><strong>Your best scores, rivalry streaks, and trophies.</strong></li>
            <li><strong>Your recent runs</strong>, including their replay data, so you can re-share them.</li>
            <li><strong>Your character choice and your ghost name.</strong></li>
          </ul>

          <h3>What We Never Collect</h3>
          <ul>
            <li>No email address, phone number, contacts, photos, or location.</li>
            <li>No account or login of any kind.</li>
            <li>No advertising, analytics, attribution, or crash-reporting SDKs. The App uses only Apple's own frameworks.</li>
            <li>No advertising identifier (IDFA) and no tracking across other companies' apps or websites.</li>
            <li>We do not sell, rent, or share your information, and we do not use it for advertising.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>About the Player ID</h2>
          <p>
            The Player ID is a random value the App creates on your device. It is not your Apple ID,
            not your device's identifier, and is not derived from anything about you or your phone.
            Its only purpose is to keep your leaderboard rows together so that your best runs replace
            your older ones instead of filling the board. Deleting the App erases it; reinstalling
            creates a brand-new one, and any earlier leaderboard rows can no longer be matched to you.
          </p>
        </section>

        <section className="policy-section">
          <h2>Name Moderation</h2>
          <p>
            Because leaderboard names are shown publicly, submitted names are checked against a
            profanity filter on our server. A name that trips the filter is displayed as an assigned
            clean alias instead. The name on your own device does not change.
          </p>
        </section>

        <section className="policy-section">
          <h2>How Long We Keep It</h2>
          <ul>
            <li><strong>All-time leaderboard</strong>: entries are kept while they rank. The board holds the top 100 runs, and up to five runs per player, so an entry is removed once it is pushed off by better runs.</li>
            <li><strong>Daily leaderboard</strong>: each day's board is deleted shortly after that day ends.</li>
            <li><strong>Challenge links</strong>: stored indefinitely, so that a link shared with a friend keeps working. You can ask us to delete one (see below).</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Service Providers</h2>
          <p>
            Our website, API, and storage are hosted by Vercel Inc. Like any web host, Vercel
            processes the network requests the App makes and may retain standard technical request
            logs (including IP address) for security and reliability. We do not use those logs to
            build profiles, and we do not combine them with your gameplay data. Vercel acts as our
            service provider and is not permitted to use this information for its own purposes.
          </p>
        </section>

        <section className="policy-section">
          <h2>Your Choices and Deletion</h2>
          <ul>
            <li><strong>Stay off the leaderboard</strong>: simply do not set a ghost name. Nothing is submitted without one.</li>
            <li><strong>Change how you appear</strong>: edit your ghost name in the App and your existing leaderboard rows are relabeled on your next submission.</li>
            <li><strong>Delete your data</strong>: email us and we will remove your leaderboard entries or a stored challenge link. Please include the ghost name and roughly what distance to look for, or the challenge link itself.</li>
            <li><strong>Delete everything at once</strong>: removing the App deletes all locally stored data from your device.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Children's Privacy</h2>
          <p>
            Ghosted is rated 4+ and is suitable for all ages. The App does not ask anyone, including
            children under 13, for personal information — no name, email, age, or contact details are
            required to play. The only text a player can enter is a ghost name for the leaderboard,
            which is optional and should be a nickname rather than a real name. If you believe a child
            has entered identifying information as their ghost name, contact us and we will remove it.
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
            Questions about this Privacy Policy, or a deletion request? Contact us at{" "}
            <a href="mailto:ethan@ingenuitylabs.net">ethan@ingenuitylabs.net</a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default GhostedPrivacy;
