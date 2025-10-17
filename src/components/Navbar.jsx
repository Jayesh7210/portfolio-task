import React, { useState, useEffect } from "react";

import logoDark from "../assets/Group 15.png";
import logoLight from "../assets/Logo.svg";
import moon from "../assets/Moon.svg";
import DarkModeToggle from "./DarkModeToggle";


const Navbar = () => {
  const [dark, setDark] = useState(() => localStorage.theme === "dark");

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.body.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={dark ? logoDark : logoLight}
          alt="Logo"
          className="logo-img"
        />
        <span className="logo-text">ANISH KUMAR SINHA</span>
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

        {/* <div className="dark-toggle">
          <img src={moon} alt="Dark-Theme" />
        </div> */}

        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
