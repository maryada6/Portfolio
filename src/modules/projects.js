import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { projectsData } from "../data";
const projects = () => {
  return (
    <div>
      <div className="space"></div>
      <hr />
      <p className="intro-low heading" id="projects">
        Projects
      </p>
      <div id="projects" className="about-container">
        {projectsData.map((project, index) => {
          const { title, link, img, skills, git } = project;

          return (
            <div key={index} className="project-div">
              <img
                loading="lazy"
                src={process.env.PUBLIC_URL + img}
                alt="Project"
                width="275px"
                height="300px"
                object-fit="cover"
              />
              <h1>{title}</h1>
              <div className="project-div-skills">
                {skills.map((skill, index2) => (
                  <div key={index2} className="project-div-skills-sub">
                    #{skill}
                  </div>
                ))}
              </div>
              <div className="links-flex">
                <a href={link}>
                  <BiLinkExternal className="link" />
                </a>
                <a href={git}>
                  <AiFillGithub className="link" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="space"></div>
      <hr />
    </div>
  );
};

export default projects;
