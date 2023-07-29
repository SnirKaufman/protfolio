import "./Projects.css";
import { LINKEDIN_PROFILE, GITHUB_PROFILE } from "../../Utilites/data";
import { PROJECTS_DATA } from "../../Utilites/data";

function Projects() {
  const PROJECTS_TITLE = "PORTFOLIO";
  const PROJECTS_SUBTITLE = "Each project is a unique piece of development 🧩";
  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        <h1 className="projects-title">{PROJECTS_TITLE}</h1>
        <h3 className="projects-subtitle">{PROJECTS_SUBTITLE}</h3>

        {PROJECTS_DATA.map(
          ({
            id,
            image,
            title,
            projectDescription,
            linkToSite,
            linkToGitHubRepository,
          }) => {
            return (
              <div key={id} className="projects-grid">
                <div className="projects">
                  <div className="projects-img">
                    <a target="_blank" href={linkToSite}>
                      <img src={image} alt="website" />
                    </a>
                  </div>
                  <div className="projects-text">
                    <h3>{title}</h3>
                    <p>{projectDescription}</p>
                    <div className="projects-technologies">
                      <p>React</p>
                      <p>Scss</p>
                    </div>
                    <div className="projects-links">
                      <a target="_blank" href={linkToSite}></a>
                      <a target="_blank" href={linkToGitHubRepository}></a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
