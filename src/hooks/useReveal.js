import { useEffect, useRef } from "react";

export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (!options.repeat) observer.unobserve(entry.target);
          } else if (options.repeat) {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: options.threshold || 0.12,
        rootMargin: options.rootMargin || "0px 0px -40px 0px",
      }
    );

    // Observe the element itself or all .reveal children
    const targets = options.children
      ? el.querySelectorAll(".reveal")
      : [el];

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [options.children, options.threshold, options.rootMargin, options.repeat]);

  return ref;
}
