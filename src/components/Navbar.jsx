import React from "react";
import logo from "../assets/logo.svg";
import moon from "../assets/moon.svg";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span>ANISH KUMAR SINHA</span>
      </div>

       <div className="nav-right">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="dark-toggle">
          <img src={moon} alt="Dark-Theme" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
