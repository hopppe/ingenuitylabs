// Dynamic link-preview card for a Ghosted challenge — 1200×630 PNG rendered at
// the edge. iMessage/WhatsApp/Twitter fetch this via the og:image tag on
// /ghosted/c/<key>. Falls back to a generic card if the key doesn't resolve.
// NOTE: @vercel/blob isn't edge-compatible; blobs are written with
// addRandomSuffix:false so their public URLs are deterministic and fetchable.
import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

const BLOB_BASE = "https://to108uvrngcmvv9c.public.blob.vercel-storage.com";

const el = (type, style, ...children) => ({ type, props: { style, children } });

export default async function handler(req) {
  const key = new URL(req.url).pathname.split("/").pop().replace(/\.png$/, "");

  let payload = null;
  if (/^[a-z2-9]{4,16}$/.test(key)) {
    try {
      const r = await fetch(`${BLOB_BASE}/c/${key}.json`);
      if (r.ok) payload = await r.json();
    } catch {
      // generic card below
    }
  }

  const name = (payload && payload.n ? payload.n : "A RIVAL").toUpperCase();
  const line = payload ? `${name} RAN ${payload.m}m` : "RACE YOUR FRIENDS' GHOSTS";
  const sub = payload ? "CAN YOU OUTRUN THEIR GHOST?" : "PHASE • GLIDE • BOOST";

  const image = new ImageResponse(
    el(
      "div",
      {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #150533 0%, #0a0118 62%, #1b0640 100%)",
        color: "#fff",
        fontSize: 32,
      },
      // neon horizon stripe
      el("div", {
        position: "absolute",
        top: 392,
        left: 0,
        width: "1200px",
        height: "4px",
        background:
          "linear-gradient(90deg, rgba(79,241,255,0) 0%, #4ff1ff 30%, #ff4dd8 70%, rgba(255,77,216,0) 100%)",
        boxShadow: "0 0 40px 8px rgba(79,241,255,0.55)",
      }),
      el("div", { fontSize: 150, marginBottom: 8, display: "flex" }, "👻"),
      el(
        "div",
        {
          fontSize: 76,
          fontWeight: 700,
          letterSpacing: "2px",
          textShadow: "0 0 24px rgba(181,123,255,0.9)",
          display: "flex",
        },
        line
      ),
      el(
        "div",
        { fontSize: 34, marginTop: 14, color: "#4ff1ff", letterSpacing: "6px", display: "flex" },
        sub
      ),
      el(
        "div",
        { fontSize: 30, marginTop: 40, color: "#b57bff", letterSpacing: "12px", display: "flex" },
        "GHOSTED"
      )
    ),
    { width: 1200, height: 630, emoji: "twemoji" }
  );
  image.headers.set("Cache-Control", "public, max-age=300, s-maxage=86400");
  return image;
}
