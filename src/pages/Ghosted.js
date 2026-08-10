import React, { useEffect, useState } from "react";
import "./Ghosted.css";
import appIcon from "../assets/ghosted-icon.png";

// App Store product page (id from App Store Connect). The URL is deterministic
// from the app id, so it goes live the moment review approves — 404s until then.
const DOWNLOAD_URL = "https://apps.apple.com/app/id6793375942";

const CHARACTER_COLORS = {
  pip: "#ffffff",
  mochi: "#ff9ad5",
  volt: "#ffd84d",
  minty: "#7dffcf",
};

const MEDALS = ["🥇", "🥈", "🥉"];

const Ghosted = () => {
  const [challenge, setChallenge] = useState(null);
  const [board, setBoard] = useState(null); // null = loading, [] = empty/unavailable

  useEffect(() => {
    fetch("/api/ghosted-leaderboard")
      .then((r) => (r.ok ? r.json() : { scores: [] }))
      .then((data) => setBoard(data.scores || []))
      .catch(() => setBoard([]));
  }, []);

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
        appLink: `ghosted://challenge?${params.toString()}`,
      });
    }
  }, []);

  return (
    <main className="ghosted">
      <div className="gr-stars" aria-hidden="true" />

      <div className="gr-container">
        <div className="gr-header">
          <img src={appIcon} alt="Ghosted" className="gr-icon" />
          <h1 className="gr-wordmark">GHOSTED</h1>
          <p className="gr-tagline">race your friends' ghosts</p>
        </div>

        {challenge ? (
          <section className="gr-challenge">
            <div className="gr-challenge-card">
              <div className="gr-ghost-emoji">👻</div>
              <h2>
                You've been <span className="gr-rival">Ghosted</span> by {challenge.name}
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
                Don't have Ghosted? Get it →
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
              you make becomes a <em>ghost</em> your friends race against — beat theirs, send it
              back, and someone's getting Ghosted.
            </p>
            <a className="gr-btn gr-btn-primary" href={DOWNLOAD_URL}>
              Get it on the App Store
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

        <section className="gr-board">
          <h2 className="gr-board-title">🏆 Global Leaderboard</h2>
          <p className="gr-board-sub">the farthest hauntings on Earth</p>
          {board === null ? (
            <p className="gr-board-empty">Summoning ghosts…</p>
          ) : board.length === 0 ? (
            <p className="gr-board-empty">No ghosts on the board yet — be the first.</p>
          ) : (
            <ol className="gr-board-list">
              {board.slice(0, 10).map((s, i) => (
                <li key={`${s.id}-${s.meters}`} className={`gr-board-row ${i < 3 ? "gr-board-top" : ""}`}>
                  <span className="gr-board-rank">{MEDALS[i] || i + 1}</span>
                  <span
                    className="gr-board-name"
                    style={{ color: CHARACTER_COLORS[s.character] || "#fff" }}
                  >
                    {s.name}
                  </span>
                  <span className="gr-board-meters">{s.meters}m</span>
                </li>
              ))}
            </ol>
          )}
        </section>

        <footer className="gr-footer">
          <a href="/ghosted-privacy">Privacy</a>
          <span>·</span>
          <a href="/ghosted-terms">Terms</a>
          <span>·</span>
          <a href="mailto:ethan@ingenuitylabs.net">Contact</a>
        </footer>
      </div>
    </main>
  );
};

export default Ghosted;
