import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact-container" data-aos="fade-up">
      <div className="contact-body">
        <h2>Contact Me</h2>
        <p className="contact-text">
          Feel free to reach out for opportunities, collaborations, or discussions!
        </p>

        <div className="contact-links">
          <a href="mailto:avleenkaur1904@gmail.com" className="email-btn">
            ✉ avleenkaur1904@gmail.com
          </a>

          <a 
            href="https://www.linkedin.com/in/avleen-kaur-835b93269" 
            target="_blank" 
            rel="noreferrer"
          >
            🔗 LinkedIn
          </a>

          <a 
            href="https://github.com/avleen19" 
            target="_blank" 
            rel="noreferrer"
          >
            💻 GitHub
          </a>

          <p className="phone">📞 +91 98171 38327</p>
        </div>
      </div>
    </section>
  );
}
