
import employeeMSImage from "../assets/ecommerce.png";
import bookMSImage from "../assets/netflix.png";
import PersonalFinance from "../assets/personal-finance.jpeg";
import Expo from "../assets/expo.dev-Expo.jpeg";
import Data from "../assets/job.png";
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
    link: "https://movie-app-v2-yos3.onrender.com/",
  },
 
  {
    id: 3,
    name: "Job Portal",
    technologies: "MERN Stack",
    image: Data,
    link: "https://job-portal-1-imc8.onrender.com",
  },
  {
    id: 4,
    name: "Personal Finance App",
    technologies: "MERN Stack",
    image: PersonalFinance,
    link: "https://personal-finance-frontend-mo2y.onrender.com",
  },
  {
    id: 5,
    name: "Memz",
    technologies: "React Native, Expo, appwrite",
    image: Expo,
    link: "https://expo.dev/preview/update?message=first%20commit&updateRuntimeVersion=1.0.0&createdAt=2024-12-22T02%3A45%3A05.798Z&slug=exp&projectId=2f176bcc-18a0-4e61-b39e-1bf4104c38bc&group=2fe11a85-2a39-4cb7-8d90-3aeb40f6fc61",
  }
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
              w-full h-48 object-contain" />
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
