import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Services from "./components/Services";
import Stats from "./components/Stats";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ color: "#0d0d0d", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Stats />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
