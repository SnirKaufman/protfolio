import "./AboutMe.css";

function AboutMe() {
  const ABOUT_ME_TITLE = "About Me";
  const ABOUT_ME_SUBTITLE =
    "A dedicated Fullstack Developer based in israel 📍";
  const ABOUT_ME_TEXT =
    "As a passionate Fullstack Developer, I wield an impressive arsenal of skills, including expertise in HTML, CSS, JavaScript, React, and SCSS. My forte lies in crafting seamless web applications with a keen focus on user-friendly interfaces. Through my dedication to writing clean and optimized code, I create dynamic and engaging interfaces that leave a lasting impact. I thrive on leveraging cutting-edge development tools and techniques to stay ahead in this rapidly evolving landscape.";

  return (
    <div className="about-me">
      <div className="about-me-container">
        <div className="about-me-img-container">
          <img
            src="./computer.jpg"
            alt="about-me-pic"
            className="about-me-pic"
          />
        </div>
        <div className="text-container">
          <h3>{ABOUT_ME_TITLE}</h3>
          <h4>{ABOUT_ME_SUBTITLE}</h4>
          <p>{ABOUT_ME_TEXT}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
