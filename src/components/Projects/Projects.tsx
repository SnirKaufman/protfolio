import "./Projects.css";
import { PROJECTS_DATA } from "../../Utilites/data";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

function Projects() {
  const PROJECTS_TITLE = "PROJECTS";
  const PROJECTS_SUBTITLE = "Each project is a unique piece of development 🧩";
  return (
    <div className="projects-container">
      <h1 className="projects-title">{PROJECTS_TITLE}</h1>
      <h3 className="projects-subtitle">{PROJECTS_SUBTITLE}</h3>
      <div className="projects-wrapper">
        {PROJECTS_DATA.map(
          ({
            image,
            title,
            projectDescription,
            linkToSite,
            linkToGitHubRepository,
          }) => {
            return (
              <div key={title} className="projects">
                <div className="projects-img-container">
                  <img src={image} alt="website" className="projects-img" />
                </div>
                <div className="projects-text">
                  <h3>{title}</h3>
                  <p className="projects-content">{projectDescription}</p>
                  <div className="projects-technologies">
                    <p>React</p>
                    <p>Scss</p>
                  </div>
                  <div className="projects-links">
                    <a target="_blank" href={linkToGitHubRepository}>
                      Code <BsGithub size={25} />
                    </a>
                    <a target="_blank" href={linkToSite}>
                      Live Demo <BiLinkExternal size={25} />
                    </a>
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
