import React from "react";
import photo from "./photos/profile.png";
import me from "./photos/about.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
const about = () => {
  return (
    <div id="about" className="about">
      <div className="about-container height-add">
        <div className="img-div">
          <img src={photo} loading="lazy" alt="profile" className="profile" />
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/maryada-kumar-lodha-d-a86285190">
              <AiOutlineLinkedin className="contact-icon" />
            </a>
            <a href="https://github.com/maryada6">
              <AiFillGithub className="contact-icon" />
            </a>
            <a href="https://www.instagram.com/jainsubhamd/">
              <AiOutlineInstagram className="contact-icon" />
            </a>
          </div>
        </div>
        <div className="intro-div">
          <div className="text">
            <p className="intro">
              Hi,
              <br />
              I’m <span className="intro color-intro">Maryada</span>
              <span className="intro-low">
                <br />I am a Web developer and a Software Engineer
              </span>
              <br />
            </p>
            <a className="intro-btn" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <hr id="about" />
      <p className="intro-low heading">About me:</p>
      <div className="about-container">
        <div className="text">
          <div className="about-div">
            <p>
              I have a curiosity to learn and implement new things and
              technologies. I love coding. I am an enthusiastic, responsible,
              and passionate person and a hardworking professional. I am a
              reflexive and energetic person. I learn new skills and try to
              apply them. I have a keen interest in Web Development. I am a
              self-learner, who puts google to good use. <br />
              I handle the TCE Quiz club's the Quizzards OF TCE blog.
              (https://quizzardsoftce.blogspot.com/). <br /> When I am not
              working I usually spend my time listening to music or reading a
              book. I like MCU and Star Wars.
            </p>
          </div>
        </div>
        <div className="about-img-div">
          <img src={me} alt="about-me" className="about-img" />
        </div>
      </div>
      <div className="space"></div>
      <hr />
    </div>
  );
};

export default about;
