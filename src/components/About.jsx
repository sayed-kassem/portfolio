import React, { useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { skills } from "../data";

const timeline = [
  { date: "2022 →", role: "Freelance Dev",   where: "Remote" },
  { date: "2024", role: "Data Analyst — IT", where: "UNICEF" },
  { date: "2022", role: "Data Engineer",      where: "Dubai" },
];

export function About() {
  const ref = useScrollReveal({ threshold: 0.08 });
  const skillsRef = useRef(null);

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.querySelectorAll(".skill-fill").forEach(bar => bar.classList.add("animated"));
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about-header">
          <div data-reveal data-delay="1">
            <span className="section-num">— 02</span>
            <div className="about-big-text" style={{ marginTop: "0.5rem" }}>
              CRAFTING<br /><em>PIXELS</em><br />WITH PURPOSE
            </div>
          </div>
          <p className="about-intro-text" data-reveal="right" data-delay="2">
            Enthusiastic about translating designs into actual functional websites
            using the latest technologies. I care deeply about craft — clean code,
            smooth interactions, and interfaces that feel alive.
          </p>
        </div>

        <div className="about-grid" data-reveal data-delay="3">
          {/* Skills */}
          <div className="about-cell" ref={skillsRef}>
            <div className="about-cell-label">SKILL_MATRIX.JSON</div>
            <div className="skills-list">
              {skills.map((s, i) => (
                <div key={i} className="skill-row">
                  <span className="skill-name">{s}</span>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ "--w": `${75 + (i % 3) * 8}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="about-cell">
            <div className="about-cell-label">EXPERIENCE_LOG</div>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-role">{item.role}</div>
                  <div className="timeline-where">{item.where}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2rem" }}>
              <div className="about-cell-label">SPECIALISATIONS</div>
              <div className="about-cell-content" style={{ marginTop: "0.75rem" }}>
                React  — TypeScript — Next.js<br />
                UI/UX Design — Figma Prototyping <br />
                Android / Kotlin — WordPress
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
