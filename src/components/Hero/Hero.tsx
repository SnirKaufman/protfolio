import "./Hero.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {
  LINKEDIN_PROFILE,
  GITHUB_PROFILE,
  PDF_FILE_URL,
} from "../../Utilites/data";

const HERO_TITLE = "Fullstack React Developer";

const HERO_SUBTITLE =
  "Hi, I'm Snir Kaufman. A passionate Fullstack React Developer based in Israel. 📍";

const TECH_STACK_TITLE = "Tech Stack";

const TECH_SVGS = [
  { srcName: "html.svg" },
  { srcName: "css.svg" },
  { srcName: "javascript.svg" },
  { srcName: "react.svg" },
  { srcName: "scss.svg" },
];
const heroPictureStyle = {
  backgroundImage: 'url("hero.jpg")',
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
              <div className="tech-rounded" key={srcName}>
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
