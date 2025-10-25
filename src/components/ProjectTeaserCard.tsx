import { Link } from "react-router-dom";
import { memo } from "react";
import { Project } from "../types";
import LazyImage from "./LazyImage";
import styles from "./ProjectTeaserCard.module.css";

interface ProjectTeaserCardProps {
  project: Project;
}

const ProjectTeaserCard = memo(function ProjectTeaserCard({ project }: ProjectTeaserCardProps) {
  const shortDescription = project.description.length > 130
    ? project.description.substring(0, 127) + "..."
    : project.description;

  return (
    <div className={styles.card}>
      <Link to={`/project/${project.id}`} className={styles.imageLink}>
        <LazyImage src={project.image} alt={project.title} className={styles.image} />
      </Link>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{shortDescription}</p>
        <Link to={`/project/${project.id}`} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </div>
  );
});

export default ProjectTeaserCard;