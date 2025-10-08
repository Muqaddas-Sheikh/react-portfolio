import React from "react";
import "./home.css";
import img1 from "../assets/html-css-collage-concept-with-person.jpg";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="home-text">
          <p className="intro">HELLO! I'M MUQADDAS</p>
          <h1>
            Full <span>Stack</span> Web Developer
          </h1>
          <p className="desc">
            I build modern, scalable and responsive web applications.
          </p>
          <div className="btn-box">
            <a href="#resume" className="btn btn-primary">
              My Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="home-img">
          <img src={img1} alt="Muqaddas" />
        </div>
      </div>
    </section>
  );
};

export default Home;
