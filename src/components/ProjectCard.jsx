import React from "react";
import "../styles/projects.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-media">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="desc">{project.description}</p>

        <div className="tech-stack">
          {project.tech.split("•").map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech.trim()}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a href={project.link} target="_blank" rel="noreferrer">
            View Project →
          </a>
        </div>
      </div>
    </article>
  );
}
