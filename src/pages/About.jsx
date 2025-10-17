import React from "react";
import Navbar from "../components/Navbar.jsx";
import handImage from "../assets/Group 33.png"; 
import rightImage from "../assets/Vector 3.png"; 
import leftbotImage from "../assets/Vector 4.png";
import rightbotImage from "../assets/Vector 5.png";  


import { TiSocialFacebookCircular ,
    TiSocialTwitterCircular ,
    TiSocialLinkedinCircular ,
    TiSocialInstagramCircular ,
    TiSocialGithubCircular ,
} from "react-icons/ti";
import { RiTelegramLine } from "react-icons/ri";



const About = () => {
  return (
    <div style={{ height: "100vh" }}>
        <Navbar/>
    <div className="about-container">
      {/* Social icons on the left */}
      <div className="social-icons-about">
                          <a href="#"><TiSocialFacebookCircular  /></a>
                          <a href="#"><TiSocialInstagramCircular /></a>
                          <a href="#"><TiSocialTwitterCircular /></a>
                          <a href="#"><TiSocialGithubCircular /></a>
                          <a href="#"><TiSocialLinkedinCircular /></a>
                          <a href="#"><RiTelegramLine /></a>
                      </div>

      {/* Main content */}
      <div className="about-content">
        <h1><span>T</span>his is it. ;)</h1>

        <p>
          Anish Kr. Sinha is an Indian <b>UI/UX Designer & Front End Developer</b> with a passion for designing beautiful and functional user experiences. 
          Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff 
          for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11.
        </p>

        <p>
          He holds a <b>bachelor degree in Computer Applications</b>. During his graduation, he has been actively involved in the web design community 
          for the last 3 years. He has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India, 
          where he’s working as an independent creative.
        </p>

        <p>
          His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing 
          <b> 3D floor plans</b>.
        </p>

        <p>
          When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching, or messing around on something inspired by YouTube tutorials.
        </p>

        <p className="email-text">sinhaanishkumara@outlook.com</p>
      </div>

      <img src={handImage} alt="Hand pointing" className="blob blob-left" />
      <img src={rightImage} alt="Hand pointing" className="blob blob-right" />
      <img src={leftbotImage} alt="Hand pointing" className="blob blob-yellow" />
      <img src={rightbotImage} alt="Hand pointing" className="blob blob-gray" />
      <div className="blob blob-yellow"></div>
      <div className="blob blob-right"></div>
    </div>
    </div>);
};

export default About;
