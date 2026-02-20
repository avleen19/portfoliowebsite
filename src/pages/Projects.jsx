import React from "react";
import "../styles/projects.css";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
