/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../data";

export function Projects() {
  const ref = useScrollReveal({ threshold: 0.05 });
  const previewRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const onMove = (e) => {
      if (previewRef.current) {
        previewRef.current.style.left = (e.clientX + 20) + "px";
        previewRef.current.style.top  = (e.clientY - 90) + "px";
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <div className="projects-header">
          <div data-reveal data-delay="1">
            <span className="section-num">— 03</span>
            <div className="projects-title">SELECTED<br />WORK</div>
          </div>
          <span className="projects-count" data-reveal="right" data-delay="2">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        {/* Row list
        <div>
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="project-item"
              data-reveal
              data-delay={i + 1}
              onMouseEnter={() => setActiveProject(p)}
              onMouseLeave={() => setActiveProject(null)}
              onClick={() => window.open(p.link, "_blank")}
            >
              <span className="project-num">{p.id}</span>
              <span className="project-title">{p.title}</span>
              <span className="project-type">{p.type}</span>
              <span className="project-year">{p.year}</span>
            </div>
          ))}
        </div> */}

        {/* Hover image preview */}
        <div
          ref={previewRef}
          className={`project-preview${activeProject ? " visible" : ""}`}
        >
          {activeProject && (
            <img src={activeProject.img} alt={activeProject.title} />
          )}
        </div>

        {/* Card grid */}
        <div className="projects-grid" style={{ marginTop: "4rem" }} data-reveal data-delay="2">
          {projects.map((p) => (
            <div key={p.id} className="pcard">
              <div className="pcard-top">
                <span className="pcard-num">{p.id}</span>
                <div className="pcard-img-wrap">
                  <img src={p.img} alt={p.title} />
                </div>
              </div>

              <div className="pcard-title">{p.title}</div>
              <p className="pcard-desc">{p.desc}</p>

              <div className="pcard-tags">
                {p.tech.map((t, i) => <span key={i} className="pcard-tag">{t}</span>)}
              </div>

              <div className="pcard-links">
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="pcard-link">
                  ↗ LIVE
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="pcard-link">
                  ⌥ CODE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
