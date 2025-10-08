import React, { useEffect, useRef } from "react";
import "./skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML", percent: 98 },
    { name: "CSS", percent: 95 },
    { name: "JavaScript", percent: 90 },
    { name: "React.js", percent: 85 },
    { name: "Node.js", percent: 80 },
    { name: "Express", percent: 78 },
    { name: "MongoDB", percent: 82 },
    { name: "Bootstrap", percent: 88 },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const circles = sectionRef.current.querySelectorAll(".circle svg circle:nth-child(2)");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            circles.forEach((circle) => {
              const percent = circle.getAttribute("data-percent");
              circle.style.strokeDashoffset = `calc(440 - (440 * ${percent}) / 100)`;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills-container">
        <h1 className="skills-heading">My Skills</h1>
        <p className="skills-subtitle">
          The technologies and tools I work with to build modern web applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="circle">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle
                    cx="70"
                    cy="70"
                    r="70"
                    data-percent={skill.percent}
                  ></circle>
                </svg>
                <div className="percent">
                  <h3>
                    {skill.percent}
                    <span>%</span>
                  </h3>
                </div>
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
