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
                        <h2>{name}</h2>
                        <h2>{institution}</h2>
                        <div className="links-flex">
                             <a href={link} className="link"><BiLinkExternal/></a>
                        </div>
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
