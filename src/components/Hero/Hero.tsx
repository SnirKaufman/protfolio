import "./Hero.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const TITLE = "Fullstack React Developer";
const SUBTITLE =
  "Hi, I'm Snir Kaufman. A passionate Front-end React Developer based in Israel. 📍";
const PDF_FILE_URL = "CV.pdf";
const LINKEDIN_PROFILE = "https://www.linkedin.com/in/snir-kaufman-5b289726b/";
const GITHUB_PROFILE = "https://github.com/SnirKaufman?tab=repositories";

const TECH_SVGS = [
  { srcName: "html.svg" },
  { srcName: "css.svg" },
  { srcName: "javascript.svg" },
  { srcName: "react.svg" },
  { srcName: "scss.svg" },
];
const heroPicture = {
  backgroundImage: 'url("/public/snir.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Hero() {
  return (
    <div className="hero-section">
      <div className="inner-container">
        <div className="content-wrapper">
          <h1 className="title">
            {TITLE}
            <img src="/wave.png" alt="waving_hand" className="waving-hand" />
          </h1>
          <p className="subtitle">{SUBTITLE}</p>
          <div className="hero-svg-container">
            <a target="_blank" href={LINKEDIN_PROFILE}>
              <BsLinkedin size={35} className="icon" />
            </a>
            <a target="_blank" href={GITHUB_PROFILE}>
              <BsGithub size={35} className="icon" />
            </a>
          </div>
        </div>
        <div className="hero-img" style={heroPicture}></div>
      </div>
      <div className="tech-stack-container">
        <div className="tech-stack-title">Tech Stack </div>
        <div className="tech-stack-svg-container">
          {TECH_SVGS.map(({ srcName }) => {
            return (
              <div className="tech-rounded">
                <img className="tech-single-svg" src={srcName} />
              </div>
            );
          })}
        </div>
      </div>
      <a href={PDF_FILE_URL} download className="btn CV">
        Download CV
      </a>
    </div>
  );
}

export default Hero;
