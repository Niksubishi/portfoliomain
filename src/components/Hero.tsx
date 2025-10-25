import styles from "./Hero.module.css";
import profileImage from "/profile.jpg";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <img src={profileImage} alt="Profile" className={styles.profileImage} />
        <div className={styles.text}>
          <h1 className={styles.name}>Nik Bishop</h1>
          <p className={styles.title}>Frontend Developer</p>
          <p className={styles.bio}>
            Hi, I’m Nik Bishop, a frontend developer specializing in HTML, CSS,
            JavaScript, and React, with experience in Tailwind CSS, Photoshop,
            and Figma. I’m passionate about creating creative, user-focused
            projects that deliver unique and engaging experiences. Currently
            finishing my Frontend degree at Noroff University, I’m eager to
            collaborate and grow through exciting opportunities. Originally from
            Essex, England, I’m now based in Bergen, Norway, bringing a love of
            aesthetics inspired by film, music, and art into every project.
          </p>
          <div className={styles.iconRow}>
            <a
              href="https://github.com/Niksubishi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <img src="/icons/git.svg" alt="GitHub" />
            </a>
            <a
              href="mailto:nikbishopdesign@gmail.com"
              className={styles.iconLink}
            >
              <img src="/icons/email.svg" alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
