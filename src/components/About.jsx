import Reveal from "./Reveal";

// ✏️ Edit your tech tags here
const tags = [
  "React & Next.js",
  "Node.js",
  "Python",
  "AWS / GCP",
  "Machine Learning",
  "DevOps",
  "PostgreSQL",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "7rem 4rem" }}>
      <Reveal>
        <div
          style={{
            fontSize: "0.78rem",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "1rem",
          }}
        >
          About NovaTech
        </div>
      </Reveal>

      <div style={{ marginTop: "4rem" }}>
        <Reveal delay={150}>
          {/* ✏️ Edit the about heading */}
          <div
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(2rem,3vw,2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}
          >
            We don't just build software. We build advantage.
          </div>

          {/* ✏️ Edit the about paragraphs */}
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#444",
              marginBottom: "1.5rem",
            }}
          >
            NovaTech was founded with a singular mission:{" "}
            <strong style={{ color: "#0d0d0d", fontWeight: 500 }}>
              help ambitious businesses harness technology to outpace the
              competition.
            </strong>
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#444",
              marginBottom: "1.5rem",
            }}
          >
            Our team of engineers, designers, and strategists bring obsessive
            attention to craft. Every line of code, every interaction, every
            deployment is done with intention.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444" }}>
            We believe technology should feel inevitable — like it was always
            meant to work this way.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
              marginTop: "2rem",
            }}
          >
            {tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  border: "1px solid rgba(0,0,0,0.2)",
                  padding: "0.35rem 0.9rem",
                  borderRadius: "100px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
