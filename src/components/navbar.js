import React, { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["home", "about", "skills", "projects", "services", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">Muqaddas.Dev</div>

      {/* Links */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l}`} onClick={() => setOpen(false)}>
              {l.toUpperCase()}
            </a> 
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}
