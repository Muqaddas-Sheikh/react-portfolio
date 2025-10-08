import React from "react";
import "./Project.css";
import { FaCalculator, FaQuestionCircle, FaUtensils, FaSpa } from "react-icons/fa";

const projects = [
  {
    icon: <FaCalculator />,
    title: "Calculator App",
    description: "A responsive calculator built with HTML, CSS, and JavaScript.",
  },
  {
    icon: <FaQuestionCircle />,
    title: "Quiz App",
    description: "An interactive quiz with levels, timer, and score tracking.",
  },
  {
    icon: <FaUtensils />,
    title: "Restaurant Website",
    description: "A responsive restaurant website with modern design and layout.",
  },
  {
    icon: <FaSpa />,
    title: "Beauty Salon Website",
    description: "Aesthetic 3D-inspired beauty salon landing page.",
  },
];

export default function Project() {
  return (
    <section className="project-section" id="projects">
      <h1 className="project-heading">My Projects</h1>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
