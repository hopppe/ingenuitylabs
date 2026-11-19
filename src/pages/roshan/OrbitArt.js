import React, { useEffect, useState } from "react";

// Hairline drawing of a cup and saucer seen from above. Three soft dots
// (orders, messages, deliveries) travel round their orbits as the page scrolls.
const C = 500;
const RINGS = [120, 150, 300, 390];
const ORBITS = [
  { cx: C + 170, cy: C - 70, r: 250 },
  { cx: C - 190, cy: C + 110, r: 290 },
];
const TICKS = Array.from({ length: 96 }, (_, i) => (i * 360) / 96);
const DOTS = [
  { orbit: { cx: C, cy: C, r: 390 }, start: -150, speed: 160, color: "#C9A45C" },
  { orbit: ORBITS[0], start: 60, speed: -220, color: "#B5532F" },
  { orbit: ORBITS[1], start: 200, speed: 190, color: "#1A3A52" },
];

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
};

// 0 → 1 across the first `span` viewport heights of scrolling.
const useScrollProgress = (span, disabled) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (disabled) return undefined;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = window.innerHeight * span;
        setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [span, disabled]);
  return progress;
};

const pointOn = ({ cx, cy, r }, deg) => {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

const OrbitArt = () => {
  const reduced = usePrefersReducedMotion();
  const progress = useScrollProgress(1.6, reduced);

  return (
    <svg className="rs-orbit-svg" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
      <defs>
        {DOTS.map((d, i) => (
          <radialGradient id={`rs-dot-${i}`} key={d.color}>
            <stop offset="0%" stopColor={d.color} stopOpacity="0.55" />
            <stop offset="100%" stopColor={d.color} stopOpacity="0" />
          </radialGradient>
        ))}
      </defs>
      <g className="rs-orbit-lines">
        {RINGS.map((r) => (
          <circle key={r} cx={C} cy={C} r={r} />
        ))}
        {ORBITS.map((o) => (
          <circle key={o.cx} cx={o.cx} cy={o.cy} r={o.r} />
        ))}
        {TICKS.map((deg) => {
          const a = pointOn({ cx: C, cy: C, r: 390 }, deg);
          const b = pointOn({ cx: C, cy: C, r: deg % 30 === 0 ? 412 : 402 }, deg);
          return <line key={deg} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />;
        })}
        <line x1={C} y1={C - 120} x2={C} y2={C - 300} />
      </g>
      {DOTS.map((d, i) => {
        const p = pointOn(d.orbit, d.start + progress * d.speed);
        return (
          <g key={d.color} transform={`translate(${p.x} ${p.y})`}>
            <circle r="46" fill={`url(#rs-dot-${i})`} />
            <circle r="9" fill={d.color} />
          </g>
        );
      })}
    </svg>
  );
};

export default OrbitArt;
