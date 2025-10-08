import React from "react";
import "./about.css";
import profileImg from "../assets/pexels-mikhail-nilov-6894207.jpg";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-full" id="about">
      <div className="about-container">

        {/* Left Image */}
        <div className="about-left">
          <img src={profileImg} alt="Muqaddas" className="profile-img" />
        </div>

        {/* Right Content */}
        <div className="about-right">
          <div className="about-texts">
            <div className="intro">MY INTRO</div>
            <h1 className="about-heading">About Me</h1>
            <p className="about-description">
              Hi, I'm <strong>Muqaddas</strong>, a professional <strong>Full Stack Web Developer</strong>.  
              I hold a degree in <strong>Software Engineering</strong> and have over 2 years of experience building modern, responsive, and scalable web applications.
            </p>

            {/* Personal Info */}
            <div className="personal-info">
              <div><span>Name:</span> Muqaddas</div>
              <div><span>Date of Birth:</span> Jan 16, 2004</div>
              <div><span>Address:</span> Hyderabad, Pakistan</div>
              <div><span>Email:</span> smuqaddas763@gmail.com</div>
              <div><span>Phone:</span>+92 3213099181</div>
            </div>

            {/* Social Icons */}
            <div className="about-social">
              <a href="https://github.com/Muqadas-g" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
<a href="https://www.facebook.com/muqaddas.sheikh.564/"target="_blank"rel="noopener noreferrer"><FaFacebook /> </a>        
    </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
