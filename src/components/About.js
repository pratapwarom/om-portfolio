import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about" data-aos="fade-up">
      <h2>About Me</h2>
      <div className="about-divider"></div>
      
      <div className="about-card" data-aos="zoom-in">
        <p>
          I’m <strong>Om Pratapwar</strong>, a Third Year B.Tech student at MIT ADT University, Pune. 
          I'm passionate about <strong>full-stack development</strong> and building real-world, accessible applications 
          with a focus on modern design and clean code.
        </p>
        <p>
          I specialize in <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>Express.js</strong>, 
          crafting seamless experiences that blend creativity and performance. 
          I enjoy translating ideas into visually engaging, functional products.
        </p>
        <p>
          My work includes <strong>voice-based assistants</strong>, <strong>QR generators</strong>, 
          and <strong>responsive portfolio websites</strong>. 
          I’m always eager to learn, collaborate, and contribute to impactful digital projects.
        </p>
      </div>
    </section>
  );
}

export default About;
