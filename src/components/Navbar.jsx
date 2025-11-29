import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const location = useLocation();

  useEffect(() => {
    // load theme from localStorage
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  useEffect(() => {
    // close mobile menu on route change
    setOpen(false);
  }, [location]);

  // const toggleTheme = () => {
  //   const next = theme === "dark" ? "light" : "dark";
  //   setTheme(next);
  //   document.documentElement.setAttribute("data-theme", next);
  //   localStorage.setItem("theme", next);
  // };

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">Avleen Kaur</Link>

        {/* <button className="theme-toggle" onClick={toggleTheme} aria-label="toggle theme">
          {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button> */}

        <button className="hamburger" onClick={() => setOpen(v => !v)} aria-label="menu">
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            {/* <a href="/Avleen_Kaur_Resume.pdf" target="_blank" rel="noreferrer" className="resume-btn">
              Resume
            </a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}
