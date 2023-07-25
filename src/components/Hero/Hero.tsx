import "./Hero.css";
import waveHand from "../../assets/wave.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import snirPic from "../../assets/Snir.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-text-container">
          <h1>
            Front-End React Developer
            <img src={waveHand} alt="waving_hand" className="waving-hand" />
          </h1>
          <p>
            Hi, I'm Snir Kaufman. A passionate Front-end React Developer based
            in Israel. 📍
          </p>
          <div className="hero-icons-container">
            <BsLinkedin size={30} className="icons" />
            <BsGithub size={30} className="icons" />
          </div>
        </div>
        <div className="hero-img">
          <img src={snirPic} alt="snir" />
        </div>
      </div>
      <div className="tech-stack-container">
        <div className="tech-stack">Tech Stack</div>
        <div className="tech-stack-icons"></div>
      </div>
    </>
  );
};

export default Hero;
