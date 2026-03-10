import React, { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Contact() {
  const ref = useScrollReveal({ threshold: 0.08 });
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1000));
    setStatus("MESSAGE_SENT // WILL_RESPOND_SOON");
    setSending(false);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <div className="contact-big" data-reveal>
          LET'S<br /><span>WORK</span><br />TOGETHER
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div data-reveal="left" data-delay="2">
            <div className="contact-info-block">
              <div className="pixel-label">EMAIL</div>
              <div className="contact-info-val">
                <a href="mailto:sayed.kassem@proton.me">sayed.kassem@proton.me</a>
              </div>
            </div>
            <div className="contact-info-block">
              <div className="pixel-label">PHONE</div>
              <div className="contact-info-val">+961-71844608</div>
            </div>
            <div className="contact-info-block">
              <div className="pixel-label">LOCATION</div>
              <div className="contact-info-val">LEBANON — REMOTE OK</div>
            </div>
            <div className="contact-info-block" style={{ marginTop: "2rem" }}>
              <div className="pixel-label">SOCIALS</div>
              <div style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <a href="https://github.com/sayed-kassem" target="_blank" rel="noopener noreferrer" className="menu-social-link" style={{ fontFamily: "var(--f-pixel)", fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--grey)", textTransform: "uppercase" }}>→ GITHUB</a>
                <a href="https://linkedin.com/in/sayed-kassem" target="_blank" rel="noopener noreferrer" className="menu-social-link" style={{ fontFamily: "var(--f-pixel)", fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--grey)", textTransform: "uppercase" }}>→ LINKEDIN</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={submit} data-reveal="right" data-delay="2">
            <div className="form-field">
              <label className="form-label">NAME</label>
              <input className="form-input" type="text" name="name" placeholder="Your name" value={form.name} onChange={set} required />
            </div>
            <div className="form-field">
              <label className="form-label">EMAIL</label>
              <input className="form-input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={set} required />
            </div>
            <div className="form-field">
              <label className="form-label">MESSAGE</label>
              <textarea className="form-textarea" name="message" placeholder="Tell me about your project..." value={form.message} onChange={set} required />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn-submit" disabled={sending}>
                {sending ? "SENDING..." : "SEND_MESSAGE →"}
              </button>
              {status && <span className="form-status">{status}</span>}
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="footer" style={{ marginTop: "5rem" }}>
          <span className="footer-logo">SAYED</span>
          <span className="footer-copy">© 2026 — ALL RIGHTS RESERVED</span>
          <span className="footer-copy">BUILT WITH REACT + LENIS</span>
        </div>
      </div>
    </section>
  );
}
