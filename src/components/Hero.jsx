import React from 'react';
import HeroImage from '../assets/my image.png';
import ResumePDF from '../assets/Adebola oguntoye.pdf'; // Update this path to your actual PDF file location

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img 
        src={HeroImage} 
        alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105 bg-gray-50'
      />
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Adebola Oguntoye
        </span>
        , Full-Stack Software Engineer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in developing modern, responsive, and user-friendly web applications, as well as automating processes using RPA.
      </p>
      <div className='mt-8 space-x-4'>
        <a href="#contact"
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Contact 
        </a>
        
        <a href={ResumePDF} target="_blank" rel="noopener noreferrer"> {/* Added anchor tag for resume */}
          <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
