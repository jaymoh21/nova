import { useState } from "react";
import Reveal from "./Reveal";

// ✏️ Edit your services here
const services = [
  { num: "01", icon: "⚡", name: "Software Development", desc: "Custom web and mobile applications engineered for performance, reliability, and growth." },
  { num: "02", icon: "☁️", name: "Cloud Infrastructure", desc: "Scalable cloud architecture on AWS, Azure, or GCP. Designed for uptime and efficiency." },
  { num: "03", icon: "🤖", name: "AI & Automation", desc: "Intelligent systems that reduce manual work, surface insights, and accelerate decisions." },
  { num: "04", icon: "🔒", name: "Cybersecurity", desc: "End-to-end protection strategies to keep your business and data safe from threats." },
  { num: "05", icon: "🎨", name: "UI/UX Design", desc: "Interfaces that are not just beautiful — they convert, retain, and delight users." },
  { num: "06", icon: "📊", name: "Data Analytics", desc: "Turn raw data into actionable strategy with dashboards, pipelines, and reporting tools." },
];

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#0d0d0d" : "#f5f4f0",
        padding: "2.5rem",
        borderRight: "1.5px solid rgba(0,0,0,0.1)",
        borderBottom: "1.5px solid rgba(0,0,0,0.1)",
        transition: "background 0.3s",
        cursor: "default",
      }}
    >
      <div style={{ fontSize: "0.75rem", fontWeight: 700, color: hovered ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)", letterSpacing: "0.1em", marginBottom: "1.5rem", fontFamily: "Syne, sans-serif", transition: "color 0.3s" }}>
        {service.num}
      </div>
      <div style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{service.icon}</div>
      <div style={{ fontFamily: "Syne, sans-serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem", color: hovered ? "#fff" : "#0d0d0d", transition: "color 0.3s" }}>
        {service.name}
      </div>
      <div style={{ fontSize: "0.9rem", color: hovered ? "rgba(255,255,255,0.65)" : "#666", lineHeight: 1.7, transition: "color 0.3s" }}>
        {service.desc}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ padding: "7rem 4rem" }}>
      <Reveal>
        <div style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", marginBottom: "1rem" }}>
          What We Do
        </div>
      </Reveal>
      <Reveal delay={100}>
        <div style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", maxWidth: "20ch", lineHeight: 1.1 }}>
          Precision-built solutions for modern businesses.
        </div>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", marginTop: "4rem", border: "1.5px solid rgba(0,0,0,0.1)" }}>
        {services.map((s, i) => (
          <Reveal key={s.num} delay={i * 80}>
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
