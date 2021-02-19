import React from 'react'
import {certificatesData} from "../data"
import { BiLinkExternal } from 'react-icons/bi';
const certificates = () => {
    return (
        <div>
            <p className="intro-low heading subheading" >
                   Certificates </p>
            {
                certificatesData.map((certificate,index)=>{
                    const {name,link,institution}=certificate;
                    return(
                        <div key={index} className="skill blog">
                        <h2>{name} <a href={link} className="link"><BiLinkExternal/></a></h2>
                        <h2>{institution}</h2>
                        </div>
                    )
                })
            }
            <div className="space"></div>
            <hr/>
        </div>
    )
}

export default certificates
