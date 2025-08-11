import styles from "./Skills.module.css";

function Skills() {
  const skills = [
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "JavaScript", icon: "/icons/js.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Photoshop", icon: "/icons/photoshop.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
  ];

  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>SKILLS</h2>
      <div className={styles.icons}>
        {skills.map((skill) => (
          <img
            key={skill.name}
            src={skill.icon}
            alt={skill.name}
            title={skill.name}
            className={styles.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
