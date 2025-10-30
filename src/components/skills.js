import React from "react";
import "./skills.css";

function Skills() {
  return (
    <section className="skills" id="skills" data-aos="fade-up">
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">
        Here are some of the technologies and tools I’ve worked with.
      </p>

      <div className="skills-grid">

        {/* Frontend */}
        <div className="skill-card" data-aos="zoom-in" data-aos-delay="100">
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3 / Tailwind CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-card" data-aos="zoom-in" data-aos-delay="200">
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL / MongoDB</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-card" data-aos="zoom-in" data-aos-delay="300">
          <h3>Tools & Platforms</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            
            <li>Figma</li>
          </ul>
        </div>

        {/* Other Skills */}
        <div className="skill-card" data-aos="zoom-in" data-aos-delay="400">
          <h3>Other Skills</h3>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Agile Mindset</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
