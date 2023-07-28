import "./Projects.css";
import { LINKEDIN_PROFILE, GITHUB_PROFILE } from "../../Utilites/data";

function Projects() {
  const PROJECTS_TITLE = "PORTFOLIO";
  const PROJECTS_SUBTITLE = "Each project is a unique piece of development 🧩";
  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        <h1 className="projects-title">{PROJECTS_TITLE}</h1>
        <h3 className="projects-subtitle">{PROJECTS_SUBTITLE}</h3>
        <div className="projects">
          <div className="projects-img">
            <img src="/meckmovies.png" />
          </div>
          <div className="projects-text">
            <h3>Car Rental</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              laudantium sint quia blanditiis. Maiores possimus, explicabo esse
              a amet illum!
            </p>
            <div className="projects-technologies">
              <p>React</p>
              <p>Scss</p>
            </div>
            <div className="projects-links">
              <a href={LINKEDIN_PROFILE}></a>
              <a href={GITHUB_PROFILE}></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
