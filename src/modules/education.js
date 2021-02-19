import React from 'react'
import {educationData} from "../data"
import { FaGraduationCap } from 'react-icons/fa';
import edu from "./photos/edu.png"
const education = () => {
    return (
        <div>
            <p id="education" className="intro-low heading">
                       Education
                    </p>
        <div className="about-container">
            <div className="about-img-div edu-img">
                    <img src={edu} alt="about-me" className="about-img"/>
                </div>

            <div className="edu-contain">
            {educationData.map((education,index)=>{
                const {school,degree,field,start,end,grade,description}=education;
                return(
                    <div key={index} className="school">
                        <h1> <FaGraduationCap/>{school}</h1>
                        <div className="school-info">
                        <h2>{degree}-{field}</h2>
                        <h2>{start}-{end}</h2>
                        <h2>Secured: {grade}</h2>
                        <h2>{description}</h2>
                        </div>
                    </div>
                )
            })}
            </div>
             
        </div>
            <div className="space"></div>
            <hr/>
        </div>
    )
}

export default education
