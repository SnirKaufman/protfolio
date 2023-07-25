import "./Hero.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const TITLE = "Front-End React Developer";
const SUBTITLE =
  "Hi, I'm Snir Kaufman. A passionate Front-end React Developer based in Israel. 📍";

const TECH_SVGS = [
  { srcName: "html.svg" },
  { srcName: "css.svg" },
  { srcName: "javascript.svg" },
  { srcName: "react.svg" },
  { srcName: "scss.svg" },
];

function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-text-container">
          <h1>
            {TITLE}
            <img src="/wave.png" alt="waving_hand" className="waving-hand" />
          </h1>
          <p>{SUBTITLE}</p>
          <div className="hero-icons-container">
            <BsLinkedin size={35} className="icons" />
            <BsGithub size={35} className="icons" />
          </div>
        </div>
        <div className="hero-img">
          <img src="/Snir.jpg" alt="snir" />
        </div>
      </div>
      <div className="tech-stack-container">
        <div className="tech-stack">Tech Stack </div>
        <div className="tech-stack-icons">
          {TECH_SVGS.map(({ srcName }) => {
            return (
              <div className="tech-rounded">
                <img className="tech" src={srcName} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
