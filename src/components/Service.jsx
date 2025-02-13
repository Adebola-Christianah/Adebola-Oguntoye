import React, { useState } from "react";

// Service data
const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    fullDescription:
      "Building responsive and interactive user interfaces using modern frameworks like React, Angular, and Vue. We ensure cross-browser compatibility, performance optimization, and a seamless user experience.",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    fullDescription:
      "Developing robust server-side logic, RESTful APIs, and databases using Node.js, Python, and PHP. We prioritize security, scalability, and maintainability in our backend solutions to support your business needs.",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    fullDescription:
      "Combining both frontend and backend development skills to deliver complete solutions. We handle everything from UI/UX design to database management, ensuring a cohesive and efficient development process.",
  },
  {
    id: 4,
    title: "Content Creation",
    description: "Writing content for your business and companies.",
    fullDescription:
      "Creating engaging and SEO-friendly content for websites, blogs, and social media. Our content is tailored to resonate with your audience, build brand awareness, and drive conversions.",
  },
  {
    id: 5,
    title: "Robotic Process Automation",
    description: "Automate repetitive tasks to improve efficiency.",
    fullDescription:
      "Using RPA tools to automate repetitive and mundane tasks, improving business efficiency and reducing human error. Our RPA solutions are customized to integrate seamlessly with your existing systems.",
  },
  {
    id: 6,
    title: "Data Analysis",
    description: "Transforming data into actionable insights.",
    fullDescription:
      "Analyzing complex datasets to uncover trends and insights that can drive business decisions. Our data analysis services include data visualization, predictive modeling, and reporting.",
  },
];

// Modal Component
const Modal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300 bg-opacity-50">
      <div className="bg-gray-800 text-white rounded-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
        >
          ✕
        </button>
   
        <h3
          className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-green-400 to-blue-500"
        >
          {service.title}
        </h3>
        <p className="mt-4 text-gray-300">{service.fullDescription}</p>
        <button
          onClick={onClose}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Main Service Component
const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleReadMore = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <button
                onClick={() => handleReadMore(service)}
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal service={selectedService} onClose={closeModal} />
    </div>
  );
};

export default Service;
