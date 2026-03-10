import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { introdata, meta, services } from "../../content_option";
import "../../styles/home.css";
import "../../styles/pages.css";

const roles = ["Web Developer", "Creating Websites", "Developing Mobile Apps"];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export function Home() {
  const [roleIdx, setRoleIdx] = useState(0);
  const statsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      {/* ── Hero ── */}
      <section className="home">
        <div className="home-orb home-orb-1" />
        <div className="home-orb home-orb-2" />

        <div className="home-inner">
          <div className="home-text">
            <div className="home-greeting reveal">
              <span className="home-greeting-dot" />
              Available for work
            </div>

            <h1 className="home-name reveal reveal-delay-1">
              I'm<br />
              <span className="home-name-accent">Sayed.</span>
            </h1>

            <div className="home-role reveal reveal-delay-2">
              <span className="home-role-line" />
              <span className="home-role-text" key={roleIdx}>
                {roles[roleIdx]}
              </span>
            </div>

            <p className="home-desc reveal reveal-delay-3">
              {introdata.description}
            </p>

            <div className="home-cta reveal reveal-delay-4">
              <button className="btn-primary" onClick={() => scrollTo("portfolio")}>
                View My Work <ArrowIcon />
              </button>
              <button className="btn-secondary" onClick={() => scrollTo("contact")}>
                Get in Touch
              </button>
            </div>

            <div className="home-stats reveal reveal-delay-5" ref={statsRef}>
              <div className="stat-pill">
                <span className="stat-pill-num">3+</span>
                <span className="stat-pill-label">Years exp.</span>
              </div>
              <div className="stat-pill">
                <span className="stat-pill-num">10+</span>
                <span className="stat-pill-label">Projects</span>
              </div>
              <div className="stat-pill">
                <span className="stat-pill-num">5</span>
                <span className="stat-pill-label">Tech stacks</span>
              </div>
            </div>
          </div>

          <div className="home-image-wrap reveal reveal-delay-2">
            <div className="home-image-frame">
              <img src={introdata.your_img_url} alt="Sayed" />
            </div>
            <div className="home-image-deco" />
          </div>
        </div>

        <div className="home-scroll">
          <div className="home-scroll-line" />
          <span>scroll</span>
        </div>
      </section>

      {/* ── Services strip ── */}
      <section style={{ padding: "4rem 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <span className="section-eyebrow reveal">What I do</span>
          <h2 className="section-title reveal reveal-delay-1">Services</h2>
          <hr className="section-rule reveal reveal-delay-2" />
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className={`service-card reveal reveal-delay-${i + 1}`}>
                <div className="service-icon">
                  {i === 0 ? "✦" : i === 1 ? "⟨/⟩" : "◉"}
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
