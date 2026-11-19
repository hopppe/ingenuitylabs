import React from "react";

// Small, static mock-ups of each outcome in action. Decorative: the tile's
// heading and text carry the meaning, so these are hidden from screen readers.

// Demand per hour, 2 pm → 1 am; dips where prayer times fall.
const STAFF_BARS = [30, 38, 24, 46, 52, 20, 58, 82, 96, 88, 64, 40];
const PRAYER_BARS = new Set([2, 5]);

const ChatMock = ({ m }) => (
  <div className="rs-mock rs-mock-chat" aria-hidden="true">
    <p className="rs-bubble rs-bubble-in">{m.chatIn}</p>
    <p className="rs-bubble rs-bubble-out">{m.chatOut}</p>
  </div>
);

const StockMock = ({ m }) => (
  <div className="rs-mock rs-mock-stock" aria-hidden="true">
    <div className="rs-stock-row">
      <span>{m.stockItem}</span>
      <span className="rs-stock-left">{m.stockLeft}</span>
    </div>
    <div className="rs-stock-bar">
      <span />
    </div>
    <p className="rs-stock-sent">
      <span className="rs-check" />
      {m.stockSent}
    </p>
  </div>
);

const StaffMock = ({ m }) => (
  <div className="rs-mock rs-mock-staff" aria-hidden="true">
    <div className="rs-staff-head">
      <span>{m.staffDay}</span>
    </div>
    <div className="rs-staff-bars">
      {STAFF_BARS.map((h, i) => (
        <span
          key={i}
          className={PRAYER_BARS.has(i) ? "is-prayer" : h > 80 ? "is-rush" : ""}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
    <p className="rs-staff-note">{m.staffNote}</p>
  </div>
);

const ReviewMock = ({ m }) => (
  <div className="rs-mock rs-mock-review" aria-hidden="true">
    <p className="rs-stars">
      <span>★★★★</span>
      <span className="rs-star-off">★</span>
    </p>
    <p className="rs-review-in">{m.reviewIn}</p>
    <p className="rs-bubble rs-bubble-out">{m.reviewOut}</p>
  </div>
);

export const GLANCE_MOCKS = [ChatMock, StockMock, StaffMock, ReviewMock];
