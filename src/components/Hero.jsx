export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10rem 4rem 6rem",
        position: "relative",
        overflow: "hidden",
        background: "#0d0d0d",
        color: "#fff",
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

      {/* ✏️ Edit the tag line */}
      <div
        style={{
          display: "inline-block",
          fontSize: "0.78rem",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#1a1aff",
          border: "1px solid #1a1aff",
          padding: "0.3rem 0.9rem",
          borderRadius: "100px",
          marginBottom: "2rem",
          width: "fit-content",
          animation: "heroFadeUp 0.8s 0.2s both",
          position: "relative",
        }}
      >
        Technology that moves forward
      </div>

      {/* ✏️ Edit the main headline */}
      <h1
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          maxWidth: "14ch",
          animation: "heroFadeUp 0.9s 0.4s both",
          color: "#fff",
          position: "relative",
        }}
      >
        Build the <span style={{ color: "#1a1aff" }}>Future</span> with NovaTech
      </h1>

      {/* ✏️ Edit the subtitle */}
      <p
        style={{
          marginTop: "2.5rem",
          fontSize: "1.15rem",
          fontWeight: 300,
          color: "rgba(255,255,255,0.7)",
          maxWidth: "42ch",
          lineHeight: 1.7,
          animation: "heroFadeUp 0.9s 0.6s both",
          position: "relative",
        }}
      >
        We engineer smart software solutions that transform how businesses
        operate — faster, smarter, and built to scale.
      </p>

      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          animation: "heroFadeUp 0.9s 0.8s both",
          position: "relative",
        }}
      >
        <a href="#services" className="btn-primary">
          Explore Services
        </a>
        <a href="#contact" className="btn-outline">
          Talk to Us
        </a>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "4rem",
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          fontSize: "0.8rem",
          color: "#1a1aff",
          letterSpacing: "0.05em",
        }}
      >
        <div
          style={{
            width: 40,
            height: 1,
            background: "#1a1aff",
            animation: "lineGrow 1.5s 1.2s ease forwards",
            transformOrigin: "left",
            transform: "scaleX(0)",
          }}
        />
        Scroll to explore
      </div>
    </section>
  );
}
