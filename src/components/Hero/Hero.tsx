import "./Hero.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HERO_TITLE = "Fullstack React Developer";

const HERO_SUBTITLE =
  "Hi, I'm Snir Kaufman. A passionate Front-end React Developer based in Israel. 📍";

const PDF_FILE_URL = "CV.pdf";

const LINKEDIN_PROFILE = "https://www.linkedin.com/in/snir-kaufman-5b289726b/";

const GITHUB_PROFILE = "https://github.com/SnirKaufman?tab=repositories";

const TECH_STACK_TITLE = "Tech Stack";

const TECH_SVGS = [
  { srcName: "html.svg" },
  { srcName: "css.svg" },
  { srcName: "javascript.svg" },
  { srcName: "react.svg" },
  { srcName: "scss.svg" },
];
const heroPictureStyle = {
  backgroundImage: 'url("/public/snir.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const CVBtn = "Download CV";

function Hero() {
  return (
    <div className="hero-section">
      <div className="inner-container">
        <div className="content-wrapper">
          <h1 className="title">
            {HERO_TITLE}
            <img src="/wave.png" alt="waving_hand" className="waving-hand" />
          </h1>
          <p className="subtitle">{HERO_SUBTITLE}</p>
          <div className="hero-svg-container">
            <a target="_blank" href={LINKEDIN_PROFILE}>
              <BsLinkedin size={35} className="icon" />
            </a>
            <a target="_blank" href={GITHUB_PROFILE}>
              <BsGithub size={35} className="icon" />
            </a>
          </div>
        </div>
        <div className="hero-img" style={heroPictureStyle}></div>
      </div>
      <div className="tech-stack-container">
        <div className="tech-stack-title">{TECH_STACK_TITLE}</div>
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
        {CVBtn}
      </a>
    </div>
  );
}

export default Hero;
