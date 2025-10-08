import React, { useState } from "react";
import "./contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mjkojqvb", { // ✅ tumhara Formspree endpoint
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch (error) {
      setStatus("Network error. Try again later.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-box">
        <h2>Contact Me</h2>
        <p>
          I’m a Web Developer. Reach out to me via email, phone, or social media. I’m happy to discuss projects and collaborations!
        </p>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div><FaEnvelope className="icon"/> smuqaddas763@gmail.com</div>
            <div><FaPhone className="icon"/>+92 321 3099181</div>
            <div><FaMapMarkerAlt className="icon"/> Hyderabad, Pakistan</div>

            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
            {status && <p className="status-message">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
