import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { services } from "../data";

export function Services() {
  const ref = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="services" ref={ref}>
      <div className="container">
        <div className="services-header" data-reveal data-delay="1">
          <span className="section-num">— SERVICES</span>
          <span className="pixel-label">WHAT I BUILD</span>
        </div>

        <div className="services-list">
          {services.map((s, i) => (
            <div key={i} className="service-item" data-reveal data-delay={i + 1}>
              <span className="service-num">{s.num}</span>
              <span className="service-label">{s.label}</span>
              <span className="service-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
