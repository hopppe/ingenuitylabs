import React from "react";
import { GLYPHS } from "./glyphs";

// The hero image: steam from a coffee cup rises, gathers into a hub, and
// becomes the signal lines that reach each thing the AI handles.
const HUB = { x: 280, y: 292 };
const NODE_KEYS = ["chat", "mic", "qr", "box", "people", "star"];
// Six points on an arc above the hub (165° → 15°).
const NODE_POS = [
  { x: 76, y: 222 },
  { x: 128, y: 128 },
  { x: 224, y: 74 },
  { x: 336, y: 74 },
  { x: 432, y: 128 },
  { x: 484, y: 222 },
];

const STEAM = [
  "M262 368 C 250 350, 274 330, 266 314 S 276 298, 280 292",
  "M280 368 C 270 352, 292 336, 282 318 S 280 300, 280 292",
  "M298 368 C 310 350, 286 330, 294 314 S 284 298, 280 292",
];

const signalPath = ({ x, y }) =>
  `M${HUB.x} ${HUB.y} Q ${HUB.x + (x - HUB.x) * 0.15} ${y + (HUB.y - y) * 0.2}, ${x} ${y}`;

const HeroArt = ({ labels, title }) => (
  <svg
    className="rs-art"
    viewBox="0 -20 560 520"
    role="img"
    aria-label={title}
    direction="ltr"
  >
    <defs>
      <radialGradient id="rs-glow" cx="50%" cy="58%" r="50%">
        <stop offset="0%" stopColor="#C9A45C" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#C9A45C" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="rs-cup" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#D8D2C6" />
      </linearGradient>
    </defs>

    <circle cx="280" cy="270" r="250" fill="url(#rs-glow)" />

    {/* signal lines */}
    {NODE_POS.map((pos, i) => (
      <g key={`line-${i}`}>
        <path d={signalPath(pos)} className="rs-art-track" />
        <path
          d={signalPath(pos)}
          className="rs-art-signal"
          style={{ animationDelay: `${i * -0.6}s` }}
        />
      </g>
    ))}

    {/* steam */}
    {STEAM.map((d, i) => (
      <path
        key={`steam-${i}`}
        d={d}
        className="rs-art-steam"
        style={{ animationDelay: `${i * -0.8}s` }}
      />
    ))}

    {/* hub */}
    <circle cx={HUB.x} cy={HUB.y} r="14" className="rs-art-hub-ring" />
    <circle cx={HUB.x} cy={HUB.y} r="6" fill="#C9A45C" />

    {/* cup */}
    <g>
      <ellipse cx="280" cy="458" rx="104" ry="16" fill="#0A1824" />
      <ellipse cx="280" cy="448" rx="96" ry="14" fill="#1A3A52" />
      <path d="M352 392 a28 26 0 1 1 -6 50" fill="none" stroke="#E4DFD5" strokeWidth="10" />
      <path
        d="M200 376 h160 l-10 54 a30 30 0 0 1 -30 22 h-80 a30 30 0 0 1 -30 -22 z"
        fill="url(#rs-cup)"
      />
      <ellipse cx="280" cy="376" rx="80" ry="10" fill="#6B3A1E" />
      <ellipse cx="280" cy="374" rx="62" ry="6" fill="#8A4F2A" />
    </g>

    {/* nodes */}
    {NODE_POS.map((pos, i) => (
      <g key={`node-${i}`} transform={`translate(${pos.x} ${pos.y})`} className="rs-art-node">
        <circle r="31" className="rs-art-node-bg" />
        <circle
          r="31"
          className="rs-art-node-pulse"
          style={{ animationDelay: `${i * 0.5}s` }}
        />
        <g
          fill="none"
          stroke="#C9A45C"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {GLYPHS[NODE_KEYS[i]]}
        </g>
        <text y="-44" textAnchor="middle" className="rs-art-label">
          {labels[i]}
        </text>
      </g>
    ))}
  </svg>
);

export default HeroArt;
