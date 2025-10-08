import React from "react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section id="project-section" className="project-section">
      <div className="project-content">
        <div className="text-content">
          <h1>Let's Build Something Amazing Together!</h1>
          <p>
            Have a project in mind? I can help you bring your ideas to life with clean, responsive, and professional designs.
          </p>
          <button 
            className="project-button"
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
