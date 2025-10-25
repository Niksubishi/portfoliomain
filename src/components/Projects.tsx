import { useState, useCallback } from "react";
import styles from "./Projects.module.css";
import ProjectTeaserCard from "./ProjectTeaserCard";
import projects from "../data/projects";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = index < projects.length - 1 ? index + 1 : 0;
        setFocusedIndex(nextIndex);
        const nextElement = document.querySelector(`[data-project-index="${nextIndex}"]`) as HTMLElement;
        nextElement?.focus();
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        const prevIndex = index > 0 ? index - 1 : projects.length - 1;
        setFocusedIndex(prevIndex);
        const prevElement = document.querySelector(`[data-project-index="${prevIndex}"]`) as HTMLElement;
        prevElement?.focus();
        break;

      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        const firstElement = document.querySelector(`[data-project-index="0"]`) as HTMLElement;
        firstElement?.focus();
        break;

      case 'End':
        e.preventDefault();
        const lastIndex = projects.length - 1;
        setFocusedIndex(lastIndex);
        const lastElement = document.querySelector(`[data-project-index="${lastIndex}"]`) as HTMLElement;
        lastElement?.focus();
        break;
    }
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.projects} ${isIntersecting ? 'animate-fade-in-up' : ''}`}
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className={styles.title}>PROJECTS</h2>
      <div
        className={styles.grid}
        role="grid"
        aria-label="Project gallery"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            role="gridcell"
            data-project-index={index}
            tabIndex={index === 0 ? 0 : -1}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`${styles.cardWrapper} ${
              hoveredIndex !== null && hoveredIndex !== index
                ? styles.dimmed
                : hoveredIndex === index || focusedIndex === index
                ? styles.highlighted
                : ""
            } ${isIntersecting ? `animate-scale-in animate-stagger-${Math.min(index + 1, 5)}` : ''} animate-hover-lift`}
            aria-label={`Project: ${project.title}`}
          >
            <ProjectTeaserCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
