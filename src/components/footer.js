import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Muqaddas. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="mailto:muqaddas@example.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}
