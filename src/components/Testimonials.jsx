import { useState } from "react";
import Reveal from "./Reveal";

const testimonials = [
  {
    text: "NovaTech transformed our entire infrastructure. Their engineers understood our vision and delivered exactly what we needed.",
    author: "Sarah Chen",
    role: "CTO, TechCorp",
    avatar: "SC",
  },
  {
    text: "Working with NovaTech was a game-changer for our business. They delivered on time, on budget, and exceeded expectations.",
    author: "Marcus Johnson",
    role: "CEO, InnovateLabs",
    avatar: "MJ",
  },
  {
    text: "The attention to detail and technical expertise is unmatched. NovaTech went above and beyond to help us succeed.",
    author: "Elena Rodriguez",
    role: "Product Lead, FutureScale",
    avatar: "ER",
  },
  {
    text: "We couldn't have scaled our platform without NovaTech's cloud architecture expertise. Highly recommended.",
    author: "David Kim",
    role: "Founder, DataFlow",
    avatar: "DK",
  },
];

function TestimonialCard({ testimonial, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 100}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#fff",
          border: "1px solid rgba(0,0,0,0.08)",
          padding: "2rem",
          borderRadius: "8px",
          transition: "all 0.3s",
          transform: hovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 12px 24px rgba(0,0,0,0.08)"
            : "0 4px 8px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            marginBottom: "1.2rem",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: "#1a1aff", fontSize: "0.9rem" }}>
              ★
            </span>
          ))}
        </div>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "#444",
            marginBottom: "1.5rem",
            fontStyle: "italic",
          }}
        >
          "{testimonial.text}"
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <div
            style={{
              width: 40,
              height: 40,
              background: "#1a1aff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.85rem",
            }}
          >
            {testimonial.avatar}
          </div>
          <div>
            <div style={{ fontWeight: 600, color: "#0d0d0d" }}>
              {testimonial.author}
            </div>
            <div style={{ fontSize: "0.85rem", color: "#888" }}>
              {testimonial.role}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "7rem 4rem" }}>
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
          What Clients Say
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
          }}
        >
          Trusted by industry leaders.
        </div>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginTop: "4rem",
        }}
      >
        {testimonials.map((testimonial, i) => (
          <TestimonialCard
            key={testimonial.author}
            testimonial={testimonial}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
