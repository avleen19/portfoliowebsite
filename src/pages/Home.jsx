import React from "react";
import "../styles/home.css";
import icon from "../assets/icon.jpg"; 

export default function Home() {
  return (
    <section className="home">
      <div className="home-left">
        <h1>
          Hi, I'm <span className="highlight">Avleen Kaur</span>
        </h1>

        <p className="lead">
          Software Engineer • MERN • Java • SQL • AWS
        </p>

        <p className="sub">
          I build clean, scalable and user-friendly applications.
          Strong in full-stack architecture, REST APIs and DSA.
        </p>

        <a href="/projects" className="btn">View My Work</a>
      </div>

      <div className="home-right">
        <div className="profile-glass">
          <img src={icon} alt="icon" />
        </div>
      </div>
    </section>
  );
}
