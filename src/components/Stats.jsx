import Reveal from "./Reveal";

// ✏️ Edit your stats here
const stats = [
  { num: "200+", label: "Projects delivered" },
  { num: "98%", label: "Client satisfaction" },
  { num: "12+", label: "Years of expertise" },
  { num: "40+", label: "Team members globally" },
];

export default function Stats() {
  return (
    <section
      id="stats"
      style={{
        padding: "7rem 4rem",
        background: "#0d0d0d",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blue glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(26,26,255,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Reveal>
        <div
          style={{
            fontSize: "0.78rem",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "1rem",
            position: "relative",
          }}
        >
          By the Numbers
        </div>
      </Reveal>
      <Reveal delay={100}>
        <div
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(2rem,4vw,3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            maxWidth: "20ch",
            lineHeight: 1.1,
            color: "#fff",
            position: "relative",
          }}
        >
          Results that speak for themselves.
        </div>
      </Reveal>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
          gap: "3rem",
          marginTop: "4rem",
          position: "relative",
        }}
      >
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "3.5rem",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#fff",
              }}
            >
              {s.num.replace(/[+%]/, "")}
              <span style={{ color: "#1a1aff" }}>
                {s.num.match(/[+%]/)?.[0]}
              </span>
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.6)",
                marginTop: "0.3rem",
              }}
            >
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
