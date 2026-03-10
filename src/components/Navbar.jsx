/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../styles/navbar.css";

const navItems = [
  { id: "home",      label: "HOME",      num: "01" },
  { id: "about",     label: "ABOUT",     num: "02" },
  { id: "projects",  label: "PROJECTS",  num: "03" },
  { id: "contact",   label: "CONTACT",   num: "04" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (id) => { setOpen(false); setTimeout(() => scrollTo(id), 400); };

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => go("home")}>SAYED</button>

          <div className="nav-right">
            <div className="nav-status">
              <span className="nav-status-dot" />
              AVAILABLE FOR WORK
            </div>
            <button
              className={`nav-menu-btn${open ? " open" : ""}`}
              onClick={() => setOpen(o => !o)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen modal menu */}
      <div className={`menu-modal${open ? " open" : ""}`}>
        <div className="menu-modal-inner">
          {/* Left — big nav links */}
          <div className="menu-links">
            {navItems.map(item => (
              <button key={item.id} className="menu-link" onClick={() => go(item.id)}>
                <span className="menu-link-num">{item.num}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Right — meta */}
          <div className="menu-meta">
            <div>
              <div className="menu-meta-label">BASED IN</div>
              <div className="menu-meta-val">LEBANON</div>

              <br />
              <div className="menu-meta-label">ROLE</div>
              <div className="menu-meta-val">Frontend Developer<br />UI / UX Designer</div>

              <br />
              <div className="menu-meta-label">LINKS</div>
              <div className="menu-socials">
                <a href="https://github.com/sayed-kassem" target="_blank" rel="noopener noreferrer" className="menu-social-link">→ GITHUB</a>
                <a href="https://linkedin.com/in/sayed-kassem" target="_blank" rel="noopener noreferrer" className="menu-social-link">→ LINKEDIN</a>
                <a href="mailto:sayed.kassem@proton.me" className="menu-social-link">→ EMAIL</a>
              </div>
            </div>

            <div className="menu-bottom-row">
              <span className="menu-bottom-copy">© 2026 SAYED KASSEM</span>
              <span className="menu-bottom-copy">V2.0 — PORTFOLIO</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
