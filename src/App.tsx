import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
