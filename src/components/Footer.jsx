export default function Footer() {
  return (
    <footer style={{
      padding: "3rem 4rem",
      borderTop: "1px solid rgba(0,0,0,0.1)",
      display: "flex", alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap", gap: "1rem",
    }}>
      {/* ✏️ Change company name */}
      <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.04em" }}>
        Nova<span style={{ color: "#1a1aff" }}>Tech</span>
      </div>

      <div style={{ display: "flex", gap: "2rem" }}>
        <a href="#services" className="footer-link">Services</a>
        <a href="#about" className="footer-link">About</a>
        <a href="#stats" className="footer-link">Results</a>
        <a href="#contact" className="footer-link">Contact</a>
      </div>

      {/* ✏️ Change the year / company name */}
      <div style={{ fontSize: "0.82rem", color: "#888" }}>
        © 2026 NovaTech. All rights reserved.
      </div>
    </footer>
  );
}
