import React, { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const wrapRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    // Dot follows cursor exactly
    const moveDot = () => {
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top  = my + "px";
      }
    };

    // Ring lags behind
    let raf;
    const moveRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top  = ry + "px";
      }
      moveDot();
      raf = requestAnimationFrame(moveRing);
    };
    raf = requestAnimationFrame(moveRing);

    // Hover detection
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Hide on mobile
  if (typeof window !== "undefined" && window.matchMedia("(pointer:coarse)").matches) return null;

  return (
    <div ref={wrapRef} className={`cursor${hovering ? " hovering" : ""}`}>
      <div ref={dotRef}  className="cursor-dot"  style={{ position:"fixed" }} />
      <div ref={ringRef} className="cursor-ring" style={{ position:"fixed" }} />
    </div>
  );
}
