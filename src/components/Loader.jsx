import React, { useEffect, useState } from "react";
import "../styles/loader.css";

const CHARS = "SAYED".split("");
const CELLS = Array.from({ length: 32 });

export function Loader({ onDone }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setDone(true);
      setTimeout(onDone, 700);
    }, 2800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className={`loader${done ? " done" : ""}`}>
      <div className="loader-grid">
        {CELLS.map((_, i) => <div key={i} className="loader-cell" />)}
      </div>

      <div className="loader-name">
        {CHARS.map((c, i) => (
          <span key={i} className="loader-name-char">{c}</span>
        ))}
      </div>

      <div className="loader-bar-wrap">
        <div className="loader-bar-fill" />
      </div>

      <div className="loader-status">INITIALIZING_SYSTEM</div>
    </div>
  );
}
