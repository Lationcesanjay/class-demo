import React from "react";
import "./Css/project.css"; // Ensure you create this CSS file for styles

export const Project = () => {
  const projectList = [
    {
      title: "Project One",
      description: "A brief description of Project One. This project focuses on ...",
      image: "path/to/project1.jpg",
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two. This project involves ...",
      image: "path/to/project2.jpg",
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three. This project aims to ...",
      image: "path/to/project3.jpg",
    },
    {
      title: "Project Four",
      description: "A brief description of Project One. This project focuses on ...",
      image: "path/to/project1.jpg",
    },
    {
      title: "Project Five",
      description: "A brief description of Project Two. This project involves ...",
      image: "path/to/project2.jpg",
    },
    {
      title: "Project Six",
      description: "A brief description of Project Three. This project aims to ...",
      image: "path/to/project3.jpg",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="fade-in">Our Projects</h1>
      <p className="fade-in">
        Here are some of the projects we have worked on. We are proud of our
        contributions to the industry.
      </p>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card fade-in" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 
