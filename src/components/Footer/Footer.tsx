import { LINKEDIN_PROFILE, GITHUB_PROFILE } from "../../Utilites/data";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./Footer.css";

function Footer() {
  const email = "Snirkaufman1@gmail.com";
  const phoneNumber = "054-3340222";
  return (
    <div className="footer-container">
      <div className="footer-details">
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
      <div className="footer-links-container">
        <a target="_blank" href={LINKEDIN_PROFILE}>
          <BsLinkedin size={25} />
        </a>
        <a target="_blank" href={GITHUB_PROFILE}>
          <BsGithub size={25} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
