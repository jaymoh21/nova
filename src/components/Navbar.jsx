import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1.4rem 4rem",
      background: scrolled ? "rgba(245,244,240,0.92)" : "rgba(245,244,240,0.7)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(0,0,0,0.07)",
      transition: "background 0.3s",
    }}>
      {/* ✏️ Change company name here */}
      <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.4rem", letterSpacing: "-0.04em" }}>
        Nova<span style={{ color: "#1a1aff" }}>Tech</span>
      </div>

      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        <a href="#services" className="nav-link">Services</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#stats" className="nav-link">Results</a>
        <a href="#contact" className="nav-link nav-cta">Get Started</a>
      </div>
    </nav>
  );
}
