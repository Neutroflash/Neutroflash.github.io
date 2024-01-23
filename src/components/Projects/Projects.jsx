import * as React from "react";
import styles from "./Projects.module.css";

import projects from "../../../projects.json";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1>Proyectos</h1>
      <div className={styles.boxProjects}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.bg} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h2>{project.title}</h2>
              <p>Tecnologías: {project.tecnologias}</p>
              <p className={styles.projectText}>{project.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
