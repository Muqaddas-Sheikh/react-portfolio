import React from "react";
import "./services.css";
import { FaLaptopCode, FaServer, FaPalette, FaChartLine } from "react-icons/fa";

export default function Services() {
  const services = [
    { 
      name: "Frontend Development", 
      description: "Build responsive and interactive websites using HTML, CSS, JavaScript, React.", 
      icon: <FaLaptopCode /> 
    },
    { 
      name: "Backend Development", 
      description: "Server-side development, REST APIs, database integration using Node.js & MongoDB.", 
      icon: <FaServer /> 
    },
    { 
      name: "UI/UX Design", 
      description: "Create clean, modern, and user-friendly interfaces and experience designs.", 
      icon: <FaPalette /> 
    },
    { 
      name: "Website Optimization", 
      description: "Improve website performance, SEO, speed and maintain smooth functionality.", 
      icon: <FaChartLine /> 
    }
  ];

  return (
    <section id="services">
      {/* Main heading for Services */}
      <h1 className="main-services-heading">Services</h1>

      <h2>I AM GREAT AT</h2>
      <h3>We provide awesome services for our clients</h3>
      <p>Delivering high-quality web solutions tailored to your business needs and modern standards.</p>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
