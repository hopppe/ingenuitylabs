import React, { useEffect, useState } from "react";
import "./GhostRace.css";
import appIcon from "../assets/ghostrace-icon.png";

// Where friends without the app go. Swap for the real TestFlight public link
// once the first build is uploaded (until then: join-the-beta email).
const DOWNLOAD_URL = "mailto:ethan@ingenuitylabs.net?subject=Ghost%20Race%20beta&body=I%20want%20in%20on%20the%20Ghost%20Race%20beta!";

const GhostRace = () => {
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(window.location.search);
    const g = params.get("g");
    if (g) {
      setChallenge({
        name: params.get("n") || "A rival",
        meters: params.get("m") || "?",
        // Rebuild the custom-scheme deep link so an installed app can still be
        // opened straight from this page (universal link normally handles it first).
        appLink: `ghostrace://challenge?${params.toString()}`,
      });
    }
  }, []);

  return (
    <main className="ghostrace">
      <div className="gr-stars" aria-hidden="true" />

      <div className="gr-container">
        <div className="gr-header">
          <img src={appIcon} alt="Ghost Race" className="gr-icon" />
          <h1 className="gr-wordmark">GHOST RACE</h1>
          <p className="gr-tagline">race your friends' ghosts</p>
        </div>

        {challenge ? (
          <section className="gr-challenge">
            <div className="gr-challenge-card">
              <div className="gr-ghost-emoji">👻</div>
              <h2>
                <span className="gr-rival">{challenge.name}</span> challenges you
              </h2>
              <div className="gr-score">
                <span className="gr-score-num">{challenge.meters}</span>
                <span className="gr-score-unit">m</span>
              </div>
              <p className="gr-score-label">the distance to beat</p>

              <a className="gr-btn gr-btn-primary" href={challenge.appLink}>
                Race their ghost
              </a>
              <a className="gr-btn gr-btn-ghost" href={DOWNLOAD_URL}>
                Don't have Ghost Race? Get it →
              </a>
              <p className="gr-fineprint">
                Tapping “Race their ghost” opens the game if it's installed. Their exact run is
                baked into this link — you'll race their ghost in real time.
              </p>
            </div>
          </section>
        ) : (
          <section className="gr-hero">
            <h2>A one-thumb ghost race you play against your friends.</h2>
            <p>
              You're Pip, a little ghost. <strong>Hold</strong> to dematerialize and slip through
              solid walls; <strong>release</strong> to go solid through the energy gates. Every run
              you make becomes a <em>ghost</em> your friends race against — and every challenge is a
              rematch waiting to happen.
            </p>
            <a className="gr-btn gr-btn-primary" href={DOWNLOAD_URL}>
              Join the beta
            </a>

            <div className="gr-features">
              <div className="gr-feature">
                <div className="gr-feature-icon">👻</div>
                <h3>Race real ghosts</h3>
                <p>Beat a friend's exact run, frame for frame. Losing by 0.3s is unbearable — rematch instantly.</p>
              </div>
              <div className="gr-feature">
                <div className="gr-feature-icon">🔥</div>
                <h3>Keep the streak</h3>
                <p>Trade challenges every day to build a rivalry streak. Miss a day and it's gone.</p>
              </div>
              <div className="gr-feature">
                <div className="gr-feature-icon">⚡️</div>
                <h3>Charge the boost</h3>
                <p>Thread the gates to fill your ecto meter, then blast through everything in an invincible dash.</p>
              </div>
              <div className="gr-feature">
                <div className="gr-feature-icon">🌍</div>
                <h3>Daily run</h3>
                <p>Everyone races the same course each day. Share your distance, no spoilers.</p>
              </div>
            </div>
          </section>
        )}

        <footer className="gr-footer">
          <a href="/ghostrace-privacy">Privacy</a>
          <span>·</span>
          <a href="mailto:ethan@ingenuitylabs.net">Contact</a>
          <span>·</span>
          <span>Ingenuity Labs</span>
        </footer>
      </div>
    </main>
  );
};

export default GhostRace;
