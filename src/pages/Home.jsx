import React from 'react'
import profileImg from "../assets/Image.png";


import { TiSocialFacebookCircular ,
    TiSocialTwitterCircular ,
    TiSocialLinkedinCircular ,
    TiSocialInstagramCircular ,
    TiSocialGithubCircular ,
} from "react-icons/ti";
import { RiTelegramLine } from "react-icons/ri";



function Home() {
  return (
    <div><section className="hero"> 
      {/* Left Content */}
      <div className="hero-content">
        <div className="hello-badge">Hello!</div>

        <h1 className="hero-title">
          I’m <span className="highlight">Anish</span>{" "}
          <span className="wave">👋</span>
        </h1>

        <p className="hero-subtitle">
          UI/UX Designer, Front-End Developer & Thinker. <br />
          Based in India.
        </p>
        

        <div className='sidediv'>
            <div className="side-buttons">
                <div className="social-icons">
                    <a href="#"><TiSocialFacebookCircular  /></a>
                    <a href="#"><TiSocialInstagramCircular /></a>
                    <a href="#"><TiSocialTwitterCircular /></a>
                    <a href="#"><TiSocialGithubCircular /></a>
                    <a href="#"><TiSocialLinkedinCircular /></a>
                    <a href="#"><RiTelegramLine /></a>
                </div>
            </div>
            <div className="hero-buttons">
                <a href="#" className="btn btn-orange">
                    Download CV
                </a>
                <a href="#" className="btn btn-dark">
                    Get in Touch!
                </a>
            </div>
        </div>
        
      </div>

      {/* Right Image Section */}
      <div className="hero-image">
        <div className=""></div>
        <img src={profileImg} alt="Anish" className="profile-pic" />
      </div>
    </section>
    </div>
    )
  
}

export default Home