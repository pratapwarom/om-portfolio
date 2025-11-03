import React from 'react';
import './Hero.css';
import profilePic from '../assets/om photo.jpg'; // ✅ Correct path

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="hero-content">
        <div className="hero-image">
          <img src={profilePic} alt="Om Pratapwar" />
        </div>

        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Om Pratapwar</span>
          </h1>
          <p className="subtitle">
            Full Stack Developer | Final Year Student at MIT ADT University
          </p>

          <div className="hero-buttons">
            <a
              href="Om-Pratapwar-Resume (2).pdf"
              download="Om-Pratapwar-Resume.pdf"
              className="btn resume-btn"
            >
              📄 Download Resume
            </a>
            <a href="#contact" className="btn contact-btn">
              ✉️ Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
