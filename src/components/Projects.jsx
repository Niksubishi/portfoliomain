import { useState } from "react";
import styles from "./Projects.module.css";
import ProjectTeaserCard from "./ProjectTeaserCard";
import projects from "../data/projects";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>PROJECTS</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`${styles.cardWrapper} ${
              hoveredIndex !== null && hoveredIndex !== index
                ? styles.dimmed
                : hoveredIndex === index
                ? styles.highlighted
                : ""
            }`}
          >
            <ProjectTeaserCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
