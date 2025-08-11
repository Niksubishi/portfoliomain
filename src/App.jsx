import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
