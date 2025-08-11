import { useEffect, useState, useRef } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>PROJECTS</h2>
      <div className={styles.list}>
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{
              filter:
                index === activeIndex ? "brightness(1)" : "brightness(0.6)",
              transition: "filter 0.3s ease",
              width: "100%",
            }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
