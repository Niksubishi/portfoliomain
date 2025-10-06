import { Link } from "react-router-dom";
import styles from "./ProjectTeaserCard.module.css";

function ProjectTeaserCard({ project, index }) {
  const shortDescription = project.description.length > 130
    ? project.description.substring(0, 127) + "..."
    : project.description;

  return (
    <div className={styles.card}>
      <Link to={`/project/${index}`} className={styles.imageLink}>
        <img src={project.image} alt={project.title} className={styles.image} />
      </Link>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{shortDescription}</p>
        <Link to={`/project/${index}`} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default ProjectTeaserCard;