import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import projects from "../data/projects";
import styles from "./ProjectArticle.module.css";

function ProjectArticle() {
  const { id } = useParams();
  const project = projects[parseInt(id)];
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className={styles.container}>
        <h1>Project not found</h1>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
      </div>
    );
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      console.error('Failed to copy link');
    }
  };

  const formatDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((paragraph, index) => (
        <p key={index} className={styles.paragraph}>{paragraph}</p>
      ));
    }
    return description.split('\\n\\n').map((paragraph, index) => (
      <p key={index} className={styles.paragraph}>{paragraph}</p>
    ));
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>← Back to Home</Link>

      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <button
            onClick={handleCopyLink}
            className={styles.shareButton}
            aria-label="Copy page link"
          >
            {copySuccess ? '✓ Copied!' : '🔗 Share/Copy Link'}
          </button>
        </header>

        <div className={styles.imageContainer}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.image}
          />
          <p className={styles.imageCaption}>{project.imageCaption}</p>
        </div>

        <div className={styles.links}>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveLink}
          >
            🌐 View Live Site
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repoLink}
          >
            📁 GitHub Repository
          </a>
        </div>

        {project.technologies && (
          <div className={styles.technologiesSection}>
            <h3>Technologies Used</h3>
            <div className={styles.technologies}>
              {project.technologies.map((tech) => (
                <div key={tech} className={styles.technology}>
                  <img
                    src={`/icons/${tech}.svg`}
                    alt={tech}
                    className={styles.techIcon}
                  />
                  <span className={styles.techName}>
                    {tech === 'js' ? 'JavaScript' :
                     tech === 'typescript' ? 'TypeScript' :
                     tech === 'html' ? 'HTML' :
                     tech === 'css' ? 'CSS' :
                     tech === 'react' ? 'React' :
                     tech === 'tailwind' ? 'Tailwind' :
                     tech === 'git' ? 'Git' :
                     tech === 'figma' ? 'Figma' :
                     tech.charAt(0).toUpperCase() + tech.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.content}>
          <h2>About This Project</h2>
          {formatDescription(project.detailedDescription)}
        </div>
      </article>
    </div>
  );
}

export default ProjectArticle;