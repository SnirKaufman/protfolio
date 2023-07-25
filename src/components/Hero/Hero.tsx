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
            <BsLinkedin size={35} className="icon" />
            <BsGithub size={35} className="icon" />
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
    </div>
  );
}

export default Hero;
