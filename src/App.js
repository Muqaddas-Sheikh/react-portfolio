import React, { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Stats from "./components/Stats";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Services from "./components/services";
import ContactSection from "./components/ContactSection";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ResumeSection from "./components/ResumeSection";

export default function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div>
      <Navbar />
      <Home />  {/* Home button scroll only */}
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Services />
      <ResumeSection showResume={showResume} setShowResume={setShowResume} /> {/* Toggle button inside section */}
      <ContactSection />
      <Contact />
      <Footer />
    </div>
  );
}
