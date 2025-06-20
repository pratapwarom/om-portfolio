import React from 'react';
import './Hero.css';
import profilePic from '../assets/ayush-profile.jpg'; // You’ll add this image next

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Ayush Mahto</span></h1>
        <p>Full Stack Developer | Final Year Student at MIT ADT University</p>
      <a href="/resume.pdf" download className="resume-btn">
        📄 Download Resume
      </a>
        <a href="#contact" className="btn">Contact Me</a>
      </div>
      <div className="hero-img">
        <img src={profilePic} alt="Ayush Mahto" />
      </div>
    </section>
  );
}

export default Hero;
