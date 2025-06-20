import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about" data-aos="fade-down">
      <h2>About Me</h2>
      <div className="about-card">
        <p>
          I’m <strong>Ayush Mahto</strong>, a final year B.Tech student at MIT ADT University Pune. I'm passionate about full-stack development and building real-world, accessible applications.
        </p>
        <p>
          I specialize in modern JavaScript frameworks like React and backend tech like Node.js and Express. I love turning creative ideas into professional web experiences.
        </p>
        <p>
          My projects include voice-based assistants, smart QR generators, and responsive portfolio sites. I’m always eager to learn and build things that make an impact.
        </p>
      </div>
    </section>
  );
}

export default About;
