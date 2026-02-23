// ✏️ Edit these items to match your services
const tickerItems = [
  "Software Development", "Cloud Infrastructure", "AI & Automation",
  "Cybersecurity", "UI/UX Design", "Data Analytics", "Mobile Apps", "Digital Strategy",
];

export default function Ticker() {
  return (
    <div style={{ overflow: "hidden", background: "#0d0d0d", padding: "1rem 0" }}>
      <div style={{ display: "flex", width: "max-content", animation: "ticker 20s linear infinite" }}>
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} style={{
            fontFamily: "Syne, sans-serif", fontSize: "0.85rem",
            fontWeight: 600, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#fff", padding: "0 2.5rem",
          }}>
            {item} <span style={{ color: "#1a1aff" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
