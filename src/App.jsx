import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import ExtraCurricular from "./sections/ExtraCurricular"; 
import NavBar from "./components/Navbar";
import Technologies from "./sections/Technologies";

import "./App.css"; 

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / total) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <NavBar />

      <progress className="scroll-bar" value={scrollProgress} max="100" />

      <Hero />
      <div className="section-separator" />

      <About />
      <div className="section-separator" />

      <Projects />
      <div className="section-separator" />

      <Experience />
      <div className="section-separator" />

      <Technologies />
      <div className="section-separator" />

      <ExtraCurricular /> 
      <div className="section-separator" />

      <Education />
      <div className="section-separator" />

      <Certifications />
      <div className="section-separator" />

      <Contact />

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
}
