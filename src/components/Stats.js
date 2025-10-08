import React from "react";
import "./stats.css";
import { FaProjectDiagram, FaSmile, FaCoffee, FaClock } from "react-icons/fa";

const stats = [
  { icon: <FaProjectDiagram />, number: 8, label: "Personal Projects" },
  { icon: <FaSmile />, number: 5, label: "Freelance Clients" },
  { icon: <FaCoffee />, number: 300, label: "Hours of Coding" },
  { icon: <FaClock />, number: 2, label: "Year of Learning" },
];


const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-icon">{stat.icon}</div>
            <h2 className="stat-number">{stat.number}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
