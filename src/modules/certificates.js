import React from "react";
import { certificatesData } from "../data";
import { BiLinkExternal } from "react-icons/bi";
function getRandomRolor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

const certificates = () => {
  return (
    <div>
      <p className="intro-low heading subheading">Certificates </p>
      {certificatesData.map((certificate, index) => {
        const { name, link, institution } = certificate;
        return (
          <div
            style={{ backgroundColor: getRandomRolor() }}
            key={index}
            className="skill blog"
          >
            <h2>{name}</h2>
            <h2>{institution}</h2>
            <div className="links-flex">
              <a href={link} className="link">
                <BiLinkExternal />
              </a>
            </div>
          </div>
        );
      })}
      <div className="space"></div>
      <hr />
    </div>
  );
};

export default certificates;
