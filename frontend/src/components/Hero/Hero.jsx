import React from "react";
import "./Hero.css";
import heroImage from "./first.jpeg"; 

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>
          <span className="highlight">CODEQUEST</span> <br />
          HACKATHON <br />
          WEEK
        </h1>
        <p>
          Join our Online Design Hackathon to showcase your creativity, tackle
          unique challenges, and win incredible prizes!
        </p>
        <button className="register-button">REGISTER TODAY</button>
      </div>
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${heroImage})`, width: '40%', height: '600px' }}
      ></div>
    </section>
  );
};

export default Hero;
