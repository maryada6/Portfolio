import React from 'react'
import {projectsData} from "../data" 
const projects = () => {
    return (
        <div>
            <div className="space"></div>
            <hr/>
            <p className="intro-low heading" id="projects">
                       Projects
                    </p>
            <div className="about-container">
            {
                projectsData.map((project,index)=>{
                    const {title,link,img,skills}= project;
                    
                    return (
                    <a  key={index} href={link}>
                    <div id={index} className="project-div">
                        <img  src={process.env.PUBLIC_URL+img} alt="Project"  width="300px" height="300px" object-fit="cover"/>
                        <h1>{title}</h1>
                        <div className="project-div-skills">
                        {skills.map((skill,index)=><div className="project-div-skills-sub" key={index}>#{skill}</div>)}
                        </div>
                    </div>
                    </a>)
                })
            }
            </div>
            <div className="space"></div>
            <hr/>
        </div>
    )
}

export default projects
