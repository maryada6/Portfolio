import React from 'react'
import {skillsData} from "../data"
import skillimg from "./photos/skill.png"
const skills = () => {
    return (
        <div id="skills">
            <p className="intro-low heading">
                       Skills
                    </p>
            <div className="about-img-div edu-img">
                    <img src={skillimg} alt="about-me" className="about-img"/>
                </div>
            <div className="skills">
            {
                skillsData.map((skill,index)=>{
                   return <div className="skill" key={index}>{skill}</div>
                })
            }
            </div>
            <div className="space"></div>
            <hr/>
        </div>
    )
}

export default skills
