import React from "react";


function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3 className="title">{project.title}</h3>
      <p className="desc">{project.description}</p>

      <div className="tags">
        {project.tags?.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <a href={project.url} target="_blank" className="btn">
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;