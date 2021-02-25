import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import ContactForm from './email';
const footer = () => {
    return (
        <div id="contact">
            <div >
                 <p className="intro-low heading">
                      Contact
                    </p>
                <p className="intro-low heading">
                      Get in touch
                    </p>

            <ContactForm/>
            <div className="contact"> 
            <div className="left">     
            <h2><AiOutlineMail  style={{fontSize:"20px"}}/>: <span>maryada@student.tce.edu</span></h2>
            <h2><AiOutlinePhone  style={{fontSize:"20px"}}/>: <span>9080532800</span></h2>
            </div>
            <div className="contact-links">
            <a href="https://www.linkedin.com/in/maryada-kumar-lodha-d-a86285190"><AiOutlineLinkedin className="contact-icon" /></a>
            <a href="https://github.com/maryada6"><AiFillGithub className="contact-icon" /></a>
            <a href="https://www.facebook.com/maryadalodha6/"><AiOutlineFacebook className="contact-icon"/></a>
            <a href="https://www.instagram.com/maryada_2121/"><AiOutlineInstagram className="contact-icon"/></a>
            </div>
            </div>
            </div>
            <footer>
               Copyright (c) 2021 Maryada
            </footer>
        </div>
    )
}

export default footer
