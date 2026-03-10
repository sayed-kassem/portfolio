import { useEffect } from "react";

/**
 * Watches every [data-section] element.
 * Adds .in-view when the section enters the viewport,
 * adds .out-up when it's scrolled past (so it fades up & out).
 */
export function useSectionReveal() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-section]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const idx = sections.indexOf(el);

          if (entry.isIntersecting) {
            el.classList.add("in-view");
            el.classList.remove("out-up");
          } else {
            // Only fade-up-out if we've already seen it and scrolled PAST it
            if (
              el.classList.contains("in-view") &&
              entry.boundingClientRect.top < 0
            ) {
              el.classList.add("out-up");
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}
