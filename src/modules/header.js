import React from 'react'

const header = () => {
    return (
        <div  className="nav">
            <nav className="sticky">
                <div className="logo">
                    <h4>Maryada</h4>
                </div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#achievements">Achievments</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            </nav>
        </div>
    )
}

export default header
