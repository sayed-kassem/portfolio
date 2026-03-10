import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { dataabout, worktimeline, skills, meta } from "../../content_option";
import "../../styles/pages.css";

export function About() {
  const skillsRef = useRef(null);

  useEffect(() => {
    // Reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    // Skill bars observer
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
              bar.classList.add("animated");
            });
            skillObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) skillObserver.observe(skillsRef.current);

    return () => {
      revealObserver.disconnect();
      skillObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <div className="about container">
          <span className="section-eyebrow reveal">Who I am</span>
          <h1 className="section-title reveal reveal-delay-1">{dataabout.title}</h1>
          <hr className="section-rule reveal reveal-delay-2" />

          <div className="about-grid">
            {/* Left — bio + timeline */}
            <div>
              <p className="about-bio reveal reveal-delay-1">{dataabout.aboutme}</p>

              <span className="section-eyebrow reveal reveal-delay-2" style={{ marginTop: "2.5rem", display: "block" }}>
                Experience
              </span>

              <div className="timeline reveal reveal-delay-3">
                {worktimeline.map((job, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-date">{job.date}</div>
                    <div className="timeline-title">{job.jobtitle}</div>
                    <div className="timeline-where">{job.where}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — skills */}
            <div ref={skillsRef}>
              <span className="section-eyebrow reveal">Skills</span>
              <div className="skills-grid" style={{ marginTop: "1.25rem" }}>
                {skills.map((skill, i) => (
                  <div key={i} className={`skill-item reveal reveal-delay-${(i % 4) + 1}`}>
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.value}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
