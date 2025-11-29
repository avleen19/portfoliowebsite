import React from "react";
import "../styles/projects.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card" data-aos="fade-up">
      <div className="project-card-inner">
        <div className="project-media">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-body">
          <h3>{project.title}</h3>
          <p className="desc">{project.description}</p>
          <p className="tech">{project.tech}</p>
          <div className="project-actions">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer">View</a>
            ) : (
              <span className="badge">Demo/Repo</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
