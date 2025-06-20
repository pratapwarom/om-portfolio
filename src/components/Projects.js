// import React from 'react';
// import './Projects.css';

// function Projects() {
//   return (
//     <section className="projects" id="projects">
//       <h2>Projects</h2>
//       <div className="project-list">
//         <div className="project">
//           <h3>QR Code Generator</h3>
//           <p>React-based app that generates customizable QR codes for various platforms like Instagram, Google Pay, etc.</p>
//         </div>
//         {/* Add more projects here */}
//       </div>
//     </section>
//   );
// }

// export default Projects;
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'QR Code Generator',
    description: 'React app that creates app-specific QR codes with creative scanner behavior.',
    link: 'https://github.com/AyushMahto/qr-code-generator'
  },
  {
    title: 'Ayush Portfolio',
    description: 'A fully responsive personal portfolio built with React and hosted on GitHub Pages.',
    link: 'https://github.com/AyushMahto/ayush-portfolio'
  },
  {
    title: 'Python Hangman Game',
    description: 'A terminal-based Hangman game developed in Python as a learning project.',
    link: 'https://github.com/AyushMahto/python-hangman'
  }
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
            <a href={project.link} target="_blank" rel="noreferrer">🔗 View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

