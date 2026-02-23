import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" style={{
      background: "#0d0d0d", color: "#fff",
      padding: "7rem 4rem", textAlign: "center",
      position: "relative", overflow: "hidden",
    }}>
      {/* Blue glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(26,26,255,0.25) 0%, transparent 70%)", pointerEvents: "none" }} />

      <Reveal>
        {/* ✏️ Edit the CTA headline */}
        <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 800, letterSpacing: "-0.04em", position: "relative" }}>
          Ready to build<br />something <span style={{ color: "#1a1aff" }}>remarkable?</span>
        </h2>

        {/* ✏️ Edit the CTA subtext */}
        <p style={{ margin: "1.5rem auto 3rem", fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", maxWidth: "44ch", lineHeight: 1.7, position: "relative" }}>
          Let's talk about your next project. We'll help you find the right path forward — no jargon, no fluff.
        </p>

        {/* ✏️ Change the email address */}
        <a href="mailto:hello@novatech.com" className="btn-white" style={{ position: "relative" }}>
          Start a Conversation →
        </a>
      </Reveal>
    </section>
  );
}
