import React from 'react'
import {accomplishmentsData} from "../data"
import { BiLinkExternal } from 'react-icons/bi';
import {blogs} from "../data"
import achieve from "./photos/achieve.png"
const accomplishments = () => {
    return (
        <div id="achievements">
            <p className="intro-low heading" id="projects">
                     Accomplishments
                    </p>

             <div className="about-img-div edu-img">
                    <img src={achieve} alt="about-me" className="about-img"/>
                </div>

            <p className="intro-low heading subheading" >
                    Blogs  </p>
                    
            
            {
                blogs.map((blog,index)=>{
                    const{link,topic,describe}=blog;
                    return (
                        
                        <div key={index} className="skill blog">
                            <h1>{topic}   <a className="link" key={index} href={link}><BiLinkExternal/></a></h1>
                            <h2>About: {describe}</h2> 
                        </div>
                    )
                })
            }
            <br/>
            <p className="intro-low heading subheading" id="projects">
                    Achievements </p>
            {
                accomplishmentsData.map((accomplishment,index)=>{
                   
                    return ( <div key={index} className="skill blog achievement">
                             <h2 key={index}>{accomplishment}</h2>  
                    </div>)
                                 })
            }
        </div>
    )
}

export default accomplishments
