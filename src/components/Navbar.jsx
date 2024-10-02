import React from 'react';

const Navbar = () => {

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Adebola</div>
        
        {/* Navigation Links */}
        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400' onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a>
          <a href="#about" className='hover:text-gray-400' onClick={(e) => handleSmoothScroll(e, 'about')}>About Me</a>
          <a href="#service" className='hover:text-gray-400' onClick={(e) => handleSmoothScroll(e, 'service')}>Services</a>
          <a href="#project" className='hover:text-gray-400' onClick={(e) => handleSmoothScroll(e, 'project')}>Projects</a>
          <a href="#contact" className='hover:text-gray-400' onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
        </div>

        {/* Connect Me Button */}
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
