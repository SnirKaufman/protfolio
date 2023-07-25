import "./Hero.css";
import waveHand from "../../assets/wave.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text-container">
        <div className="hero-title">
          <h1>Front-End React Developer</h1>
          <img src={waveHand} alt="waving_hand" />
        </div>
        <p>
          Hi, I'm Snir Kaufman. A passionate Front-end React Developer based in
          Israel.
          <GrLocationPin className="icons location" />
        </p>
        <div className="hero-icons-container">
          <BsGithub size={40} className="icons" />
          <BsLinkedin size={40} className="icons" />
        </div>
      </div>
      <div className="hero-img"></div>
    </div>
  );
};

export default Hero;
