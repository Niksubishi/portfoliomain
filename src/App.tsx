import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectArticle from "./components/ProjectArticle";
import SEO from "./components/SEO";
import styles from "./App.module.css";

function HomePage() {
  return (
    <div className={styles.app}>
      <SEO />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Hero />
      <Skills />
      <main id="main-content">
        <Projects />
      </main>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectArticle />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
