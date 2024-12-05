import React from 'react';
import Header from './Header';

function Projects() {
  // Array of project data
  const projects = [
    { name: 'Project 5', github: 'https://github.com/DavitKutsia/hw5', vercel: 'https://vercel.com/davitkutsias-projects/hw5' },
    { name: 'Project 6', github: 'https://github.com/DavitKutsia/hw6', vercel: 'https://vercel.com/davitkutsias-projects/hw6' },
    { name: 'Project 7', github: 'https://github.com/DavitKutsia/hw7', vercel: 'https://vercel.com/davitkutsias-projects/hw7' },
  ];

  return (
    <div>
      <Header /> {/* Reusable header component */}

      <div className="container">
        <h1>Projects Page</h1>
        {/* Map through project data */}
        {projects.map((project, index) => (
          <div key={index}>
            <h2>{project.name}</h2>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> <br />
            <a href={project.vercel} target="_blank" rel="noopener noreferrer">Vercel</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
