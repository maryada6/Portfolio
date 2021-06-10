import React from "react";
import { accomplishmentsData } from "../data";
import { BiLinkExternal } from "react-icons/bi";
import { blogs } from "../data";
import achieve from "./photos/achieve.png";

function getRandomRolor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

const accomplishments = () => {
  return (
    <div id="achievements">
      <p className="intro-low heading">Accomplishments</p>

      <div className="about-img-div edu-img">
        <img src={achieve} alt="about-me" className="about-img" />
      </div>

      <p className="intro-low heading subheading">Blogs </p>

      {blogs.map((blog, index) => {
        const { link, topic, describe } = blog;
        return (
          <div
            key={index}
            style={{ backgroundColor: getRandomRolor() }}
            className="skill blog"
          >
            <h1>{topic}</h1>
            <h2>About: {describe}</h2>
            <div className="links-flex">
              <a className="link" key={index} href={link}>
                <BiLinkExternal />
              </a>
            </div>
          </div>
        );
      })}
      <br />
      <p className="intro-low heading subheading" id="projects">
        Achievements{" "}
      </p>
      {accomplishmentsData.map((accomplishment, index) => {
        return (
          <div
            style={{ backgroundColor: getRandomRolor() }}
            key={index}
            className="skill blog achievement"
          >
            <h2 key={index}>{accomplishment}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default accomplishments;
