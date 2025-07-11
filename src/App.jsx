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

import "./App.css"; 
export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      <ExtraCurricular /> 
      <div className="section-separator" />

      <Education />
      <div className="section-separator" />

      <Certifications />
      <div className="section-separator" />

      <Contact />
    </>
  );
}
