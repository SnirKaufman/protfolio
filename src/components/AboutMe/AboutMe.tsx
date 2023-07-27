import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-container">
        <img src="./computer.jpg" alt="about-me-pic" className="about-me-pic" />

        <div className="text-container">
          <h3>About Me</h3>
          <h4>A dedicated Fullstack-end Developer based in israel 📍</h4>
          <p>
            As a passionate Fullstack Developer, I wield an impressive arsenal
            of skills, including expertise in HTML, CSS, JavaScript, React, and
            SCSS. My forte lies in crafting seamless web applications with a
            keen focus on user-friendly interfaces. Through my dedication to
            writing clean and optimized code, I create dynamic and engaging
            interfaces that leave a lasting impact. I thrive on leveraging
            cutting-edge development tools and techniques to stay ahead in this
            rapidly evolving landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
