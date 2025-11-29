import React from "react";
import "../styles/projects.css";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

export default function Projects() {
  return (
    <section className="projects" data-aos="fade-up">
      <h2 className="heading">My Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </div>
    </section>
  );
}
