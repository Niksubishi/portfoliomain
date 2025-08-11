import styles from "./ProjectCard.module.css";

function ProjectCard({ image, title, description, repo, live }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.links}>
          <a href={repo} target="_blank" rel="noopener noreferrer">
            Repo
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
