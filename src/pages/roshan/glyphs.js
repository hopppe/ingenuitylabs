import React from "react";

// Line glyphs drawn around (0,0) in a ~28px box. Stroke colour comes from the
// parent (currentColor), so the same glyph works on navy and on light tiles.
export const GLYPHS = {
  chat: (
    <path d="M-11 -10 h22 a4 4 0 0 1 4 4 v10 a4 4 0 0 1 -4 4 h-11 l-7 6 v-6 h-4 a4 4 0 0 1 -4 -4 v-10 a4 4 0 0 1 4 -4z" />
  ),
  mic: (
    <>
      <rect x="-5" y="-14" width="10" height="17" rx="5" />
      <path d="M-10 -1 a10 10 0 0 0 20 0 M0 9 v5 M-6 14 h12" />
    </>
  ),
  qr: (
    <>
      <rect x="-12" y="-12" width="9" height="9" rx="1.5" />
      <rect x="3" y="-12" width="9" height="9" rx="1.5" />
      <rect x="-12" y="3" width="9" height="9" rx="1.5" />
      <path d="M3 3 h3 M10 3 h2 v3 M3 8 v4 h4 M11 10 v2" />
    </>
  ),
  bean: (
    <g transform="rotate(-30)">
      <ellipse cx="0" cy="0" rx="8" ry="13" />
      <path d="M-2 -11 C 4 -4, -4 4, 2 11" />
    </g>
  ),
  box: <path d="M-12 -6 L0 -12 L12 -6 L12 8 L0 14 L-12 8 Z M-12 -6 L0 0 L12 -6 M0 0 V14" />,
  people: (
    <>
      <circle cx="-5" cy="-6" r="4.5" />
      <circle cx="8" cy="-4" r="3.5" />
      <path d="M-14 12 a9 9 0 0 1 18 0 M3 12 a6.5 6.5 0 0 1 12 -3" />
    </>
  ),
  star: <path d="M0 -13 L3.8 -4.5 L13 -4 L6 2.2 L8.2 11.5 L0 6.5 L-8.2 11.5 L-6 2.2 L-13 -4 L-3.8 -4.5 Z" />,
  megaphone: <path d="M-13 -5 h7 l13 -8 v26 l-13 -8 h-7 z M-9 5 l3 9" />,
  brief: (
    <>
      <rect x="-10" y="-13" width="20" height="26" rx="2.5" />
      <path d="M-5 -6 h10 M-5 0 h10 M-5 6 h6" />
    </>
  ),
};

// Which glyph each demo link gets in the menu list.
export const ICON_BY_PATH = {
  "/studio/whatsapp": "chat",
  "/barista": "mic",
  "/m/roshan": "qr",
  "/beans": "bean",
  "/studio/logistics": "box",
  "/studio/insights": "people",
  "/studio/reviews": "star",
  "/studio/ads": "megaphone",
  "/studio": "brief",
};

export const Glyph = ({ name, size = 40 }) => (
  <svg
    className="rs-glyph"
    width={size}
    height={size}
    viewBox="-20 -20 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {GLYPHS[name]}
  </svg>
);
