
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'agricros',
    description: 'AgriCros is a digital platform that bridges the gap between farmers, suppliers, and buyers by providing a transparent, efficient, and reliable marketplace for agricultural products..',
    link: 'https://www.figma.com/design/zCgckUnLNP8iawxgq8JxXK/AGRICOS-Farming-App-Design?m=auto&t=RrTlNL1gqCbqSnDz-6'
  },
  {
    title: 'Food Donation Application',
    description: 'A platform that connects donors, NGOs, and needy communities to reduce food waste and ensure surplus food reaches those in need.',
    link: 'https://www.figma.com/design/ZSqcCsdv8frCJEhBMHXhfD/food-applications?m=auto&t=RrTlNL1gqCbqSnDz-6'
  },
 
];

function Projects() {
  return (
    <section className="projects" id="projects"data-aos="zoom-in">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">🔗 View on Figma</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

