import React from "react";
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <div className="nav">
      <nav className="sticky">
        <div className="logo">
          <h4>Maryada</h4>
        </div>
        <ul className="nav-links">
        <Link to="/" style={{ textDecoration: 'none' }} >
          <li>
            Home
          </li>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }} >
          <li>
          About
          </li>
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none' }} >
          <li>
          Projects
          </li>
        </Link>
        <Link to="/education" style={{ textDecoration: 'none' }} >
          <li>
          Education
          </li>
        </Link>
        <Link to="/skills" style={{ textDecoration: 'none' }} >
          <li>
          Skills
          </li>
        </Link>
        <li><a href="#contact">Contact</a></li>
          </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default header;
