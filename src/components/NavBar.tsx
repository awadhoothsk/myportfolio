import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Awadhooth S K</div>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Profile</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/experience">Work</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/interests">Interests</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
