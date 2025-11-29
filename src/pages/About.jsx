import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about" data-aos="fade-up">
      <div className="about-grid">
        
        <div className="about-card">
          <h1>Avleen Kaur</h1>
          <p className="role">Software Engineer | Fresher</p>

          <div className="contact-quick">
            <a href="mailto:avleenkaur1904@gmail.com">avleenkaur1904@gmail.com</a>
            <span>•</span>
            <a href="tel:+919817138327">+91 98171 38327</a>
          </div>

          <div className="links-row">
            <a href="https://github.com/avleen19" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/avleen-kaur-835b93269" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          {/* <a className="download-resume" href="/Avleen_Kaur_Resume.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a> */}
        </div>

        
        <div className="about-body">

          <h2>About Me</h2>
          <p>
            I’m <strong>Avleen Kaur</strong>, a Software Engineer (Fresher) with hands-on experience in 
            full-stack development and problem-solving. I have solved <strong>500+ DSA questions </strong> 
             across LeetCode, GFG, and HackerRank, building a strong foundation in algorithms and logic.
          </p>

          <p>
            I enjoy creating clean, scalable applications using modern technologies including 
            React, Node.js, MySQL, MongoDB and cloud services. I constantly learn and apply 
            new tools, patterns, and best practices to improve my engineering skills.
          </p>

          <h3>Technical Skills</h3>
          <ul className="skill-list">
            <li>Java • JavaScript • C++ • C • SQL</li>
            <li>React.js • Node.js • Express.js • REST APIs</li>
            <li>MySQL • MongoDB</li>
            <li>AWS • MongoDB Atlas • Docker • Git</li>
          </ul>

          <h3>Projects (selected)</h3>
          <ul className="projects-list">
            <li><strong>SheRise</strong> — React platform for women's empowerment</li>
            <li><strong>Medimart</strong> — MERN e-commerce + Stripe payments</li>
            <li><strong>UrbanNest</strong> — Furniture store (React, Node, MySQL)</li>
            <li><strong>Fetal Health Classifier</strong> — ML health prediction model</li>
          </ul>

          <h3>Education</h3>
          <p><strong>B.E. (Computer Science)</strong>, Chitkara University — CGPA: 8.45 </p>

          <h3>Certifications</h3>
          <ul className="cert-list">
            <li>Introduction to Cybersecurity — Cisco</li>
            <li>JavaScript Essentials — Cisco</li>
            <li>Social Media Management — Meta</li>
          </ul>

        </div>
      </div>
    </section>
  );
}
