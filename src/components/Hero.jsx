import React from "react";

const MARQUEE_ITEMS = [
  "FRONTEND DEVELOPER", "◆", "UI / UX DESIGNER", "◆",
  "REACT SPECIALIST",   "◆", "MOBILE APPS",       "◆",
  "FRONTEND DEVELOPER", "◆", "UI / UX DESIGNER",  "◆",
  "REACT SPECIALIST",   "◆", "MOBILE APPS",        "◆",
];

export function Hero() {
  return (
    <section id="home" className="hero">
      {/* Badge top right */}
      <div className="hero-badge container">
        <span className="pixel-label">EST. 2022</span>
        <span className="pixel-label">BEIRUT, LB</span>
      </div>

      <div className="hero-inner container">
        <div className="hero-eyebrow">
          <div className="hero-eyebrow-line" />
          <span className="pixel-label">CREATIVE FRONTEND DEVELOPER</span>
        </div>

        <h1 className="hero-name">
          <span className="hero-name-row">
            <span className="hero-name-inner">BUILDING</span>
          </span>
          <span className="hero-name-row">
            <span className="hero-name-inner hero-name-stroke">DIGITAL</span>
          </span>
          <span className="hero-name-row">
            <span className="hero-name-inner">WORLDS.</span>
          </span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-desc">
            Computer engineer graduate with a passion for crafting
            interfaces that breathe — every pixel intentional,
            every interaction felt.
          </p>
          <div className="hero-scroll">
            <span className="hero-scroll-label">SCROLL</span>
            <div className="hero-scroll-line" />
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="hero-marquee-wrap">
        <div className="hero-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="hero-marquee-item">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
