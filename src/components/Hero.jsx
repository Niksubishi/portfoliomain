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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vitae velit ex.
          </p>
          <a
            href="https://github.com/Niksubishi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.github}
          >
            <img src="/icons/git.svg" alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
