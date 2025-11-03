import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'AgriCros',
    description:
      'A digital platform that bridges the gap between farmers, suppliers, and buyers by providing a transparent, efficient, and reliable marketplace for agricultural products.',
    techStack: ['Figma', 'UI/UX Design', 'Mobile App'],
    links: [
      {
        type: 'figma',
        url: 'https://www.figma.com/design/zCgckUnLNP8iawxgq8JxXK/AGRICOS-Farming-App-Design?m=auto&t=RrTlNL1gqCbqSnDz-6',
      },
    ],
  },
  {
    title: 'Food Donation Application',
    description:
      'A platform that connects donors, NGOs, and needy communities to reduce food waste and ensure surplus food reaches those in need.',
    techStack: ['Figma', 'UI/UX Design', 'Mobile App', 'Social Impact'],
    links: [
      {
        type: 'figma',
        url: 'https://www.figma.com/design/ZSqcCsdv8frCJEhBMHXhfD/food-applications?m=auto&t=YXpHzkGxbQD4ddUG-6',
      },
    ],
  },
  {
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce solution with advanced features including real-time inventory, payment processing, and customer analytics.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    links: [
      { type: 'github', url: 'https://github.com/ompratapwar/ecommerce-platform' },
      { type: 'demo', url: 'https://ompratapwar-ecommerce.netlify.app' },
    ],
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.',
    techStack: ['React', 'Firebase', 'Material-UI', 'Real-time DB'],
    links: [
      { type: 'github', url: 'https://github.com/ompratapwar/task-management-app' },
      { type: 'demo', url: 'https://ompratapwar-taskmanager.netlify.app' },
    ],
  },
  {
    title: 'Weather Dashboard',
    description:
      'An interactive weather dashboard providing real-time weather data, forecasts, and location-based weather insights.',
    techStack: ['JavaScript', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    links: [
      { type: 'github', url: 'https://github.com/ompratapwar/weather-dashboard' },
      { type: 'demo', url: 'https://ompratapwar-weather.netlify.app' },
    ],
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive portfolio website showcasing projects, skills, and experience with modern design and smooth animations.',
    techStack: ['React', 'CSS3', 'Framer Motion', 'Responsive Design'],
    links: [
      { type: 'github', url: 'https://github.com/ompratapwar/portfolio-website' },
      { type: 'demo', url: 'https://ompratapwar.dev' },
    ],
  },
];

function Projects() {
  return (
    <section className="projects" id="projects" data-aos="zoom-in">
      <h2>Projects</h2>
      <p className="section-subtitle">
        Here are some of the projects I've worked on, showcasing my skills in design and development.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.techStack.map((tech, techIndex) => (
                <span className="tech-tag" key={techIndex}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    link.type === 'github'
                      ? 'github-link'
                      : link.type === 'demo'
                      ? 'demo-link'
                      : 'figma-link'
                  }
                >
                  {/* GitHub Button */}
                  {link.type === 'github' && (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 
                        3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234
                        c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756
                        -1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084
                        1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304
                        3.492.997.107-.775.418-1.305.762-1.604-2.665-.305
                        -5.467-1.334-5.467-5.931 0-1.311.469-2.381
                        1.236-3.221-.124-.303-.535-1.524.117-3.176
                        0 0 1.008-.322 3.301 1.23.957-.266
                        1.983-.399 3.003-.404 1.02.005
                        2.047.138 3.006.404 2.291-1.552
                        3.297-1.23 3.297-1.23.653 1.653.242
                        2.874.118 3.176.77.84 1.235 1.911
                        1.235 3.221 0 4.609-2.807 5.624-5.479
                        5.921.43.372.823 1.102.823 2.222v3.293c0
                        .319.192.694.801.576 4.765-1.589 8.199
                        -6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </>
                  )}

                  {/* Live Demo Button */}
                  {link.type === 'demo' && (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 
                        2 0 0 1 2-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </>
                  )}

                  {/* Figma Button */}
                  {link.type === 'figma' && (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2H8a6 6 0 0 0-6 6v4a6 6 0 0 0" />
                        <path d="M8 8a4 4 0 0 1 4-4h4a4 4 0 0 1
                        4 4v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4z" />
                        
                      </svg>
                      View Design
                      
                    </>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
