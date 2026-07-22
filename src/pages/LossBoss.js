import React from "react";
import { Link } from "react-router-dom";

const DOWNLOAD_URL = "mailto:ethan@ingenuitylabs.net?subject=LossBoss%20Beta"; // swap to App Store URL after approval

const S = {
  page: { background: "#0E1116", color: "#fff", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" },
  wrap: { maxWidth: 900, margin: "0 auto", padding: "80px 24px 60px", textAlign: "center" },
  h1: { fontSize: "3.2rem", fontWeight: 900, margin: "0 0 12px" },
  accent: { color: "#FF5A3C" },
  sub: { fontSize: "1.25rem", color: "rgba(255,255,255,0.65)", maxWidth: 620, margin: "0 auto 32px", lineHeight: 1.6 },
  cta: { display: "inline-block", background: "#FF5A3C", color: "#fff", padding: "16px 40px", borderRadius: 16, fontWeight: 700, fontSize: "1.1rem", textDecoration: "none" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 56, textAlign: "left" },
  card: { background: "#171C24", borderRadius: 18, padding: 22, border: "1px solid rgba(255,255,255,0.08)" },
  cardTitle: { fontWeight: 700, marginBottom: 8, fontSize: "1.05rem" },
  cardBody: { color: "rgba(255,255,255,0.62)", lineHeight: 1.55, fontSize: "0.95rem" },
  footer: { marginTop: 64, color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" },
  link: { color: "rgba(255,255,255,0.55)", margin: "0 10px" },
};

const FEATURES = [
  ["🎭", "Pick your coach's personality", "Sunny cheers you on. Sarge holds the line. Savage roasts you off the couch (you opt in — it never body-shames). Doc explains the science."],
  ["🧠", "A coach that actually remembers", "Hate salmon? Work nights? Your coach learns your preferences and adapts the plan — and you can view or delete every memory in Settings."],
  ["📸", "Snap a photo, get the calories", "AI estimates calories and protein from a picture of your plate. Edit in one tap. No database spelunking."],
  ["📊", "Science-backed numbers", "Mifflin-St Jeor metabolism math, weekly adaptive recalibration from your real trend, protein targets that protect muscle — every claim cited to the actual study."],
  ["🏋️", "Workouts that fit your life", "Gym, home, walking, or running plans with a full routine runner: sets, reps, rest timer, check-offs."],
  ["🎯", "Weekly goals & real progress", "Trend-line weigh-ins (not daily noise), streaks, weekly report cards, and a coach who notices when you drift."],
];

const LossBoss = () => (
  <main style={S.page}>
    <div style={S.wrap}>
      <div style={{ fontSize: 64, marginBottom: 8 }}>👑</div>
      <h1 style={S.h1}>
        Loss<span style={S.accent}>Boss</span>
      </h1>
      <p style={S.sub}>
        The AI weight-loss coach with a personality you choose — friendly, drill-sergeant, or
        full-on savage. Science-backed plan, photo calorie logging, and a coach that remembers
        what works for you.
      </p>
      <a style={S.cta} href={DOWNLOAD_URL}>Get LossBoss</a>
      <div style={S.grid}>
        {FEATURES.map(([emoji, title, body]) => (
          <div style={S.card} key={title}>
            <div style={{ fontSize: 30, marginBottom: 8 }}>{emoji}</div>
            <div style={S.cardTitle}>{title}</div>
            <div style={S.cardBody}>{body}</div>
          </div>
        ))}
      </div>
      <div style={S.footer}>
        <p>Your data stays on your phone. Not medical advice.</p>
        <p>
          <Link style={S.link} to="/lossboss-privacy">Privacy Policy</Link>·
          <Link style={S.link} to="/lossboss-terms">Terms of Use</Link>
        </p>
        <p>© {new Date().getFullYear()} Ingenuity Labs LLC</p>
      </div>
    </div>
  </main>
);

export default LossBoss;
