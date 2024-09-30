import React from "react";
import employeeMSImage from "../assets/ecommerce.png";
import bookMSImage from "../assets/netflix.png";
import Data from "../assets/data.jpeg";
// import {Link} from 'react-router-dom'
const projects = [
  {
    id: 1,
    name: "Ecommerce App",
    technologies: "Django, React, Postgress",
    image: employeeMSImage,
    link: "https://ecommerce-frontend-3awr.onrender.com",
  },
  {
    id: 2,
    name: "Netflix Clone",
    technologies: "MERN Stack",
    image: bookMSImage,
    link: "https://movie-app-1-ocg6.onrender.com",
  },
  {
    id: 3,
    name: "Book MS",
    technologies: "MERN Stack",
    image: Data,
    link: "https://github.com/YouafKhan1",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a href={project.link} target="_blank" key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href='https://github.com/Adebola-Christianah' className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
