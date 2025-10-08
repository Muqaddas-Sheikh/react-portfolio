import React from "react";
import "./ResumeSection.css";

export default function ResumeSection({ showResume, setShowResume }) {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <button
          className="resume-toggle-btn"
          onClick={() => setShowResume(!showResume)}
        >
          {showResume ? "Hide Resume" : "Show Resume"}
        </button>

        {showResume && (
          <div className="resume-content">
            <h1 className="resume-name">Muqaddas</h1>
            <h2 className="resume-role">Full Stack Web Developer</h2>

            <div className="resume-block">
              <h3>About Me</h3>
              <p>
                Undergraduate student with a medical background, passionate about web development.
                Skilled in HTML, CSS, JavaScript, React.js, Node.js, Express, MongoDB, and Bootstrap.
                Enjoys gardening and building projects.
              </p>
            </div>

            <div className="resume-block">
              <h3>Education</h3>
              <p>Undergraduate – Pre-Medical, Hyderabad, Pakistan</p>
            </div>

            <div className="resume-block">
              <h3>Skills</h3>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React.js, Node.js, Express, MongoDB</li>
                <li>Bootstrap, Responsive Design</li>
                <li>Word, Excel</li>
              </ul>
            </div>

            <div className="resume-block">
              <h3>Projects</h3>
              <ul>
                <li>Restaurant Website – HTML, CSS, JavaScript</li>
                <li>Coffee Website – HTML, CSS, JavaScript</li>
                <li>Flower Website – HTML, CSS, JavaScript</li>
              </ul>
            </div>

            <div className="resume-block">
              <h3>Hobbies</h3>
              <p>Gardening, Learning new web technologies</p>
            </div>

            <div className="resume-block">
              <h3>Contact</h3>
              <p>Email: smuqaddas763@gmail.com</p>
              <p>Phone: +92 3213099181</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
