import { useEffect, useRef } from "react";

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.dataset.visible = "true";
          if (!options.repeat) obs.unobserve(e.target);
        } else if (options.repeat) {
          e.target.dataset.visible = "false";
        }
      });
    }, { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || "0px 0px -60px 0px" });
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [options.repeat, options.threshold, options.rootMargin]);
  return ref;
}
