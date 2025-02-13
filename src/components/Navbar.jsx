import React, { useState } from 'react';
import { TiHomeOutline } from "react-icons/ti";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 fixed z-50 w-full py-3'>
      <div className='container flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold'>
          Adebola
        </div>

        {/* Desktop Navigation Links */}
        <div className='hidden md:flex space-x-6'>
          <a className='hover:text-gray-400 cursor-pointer' onClick={(e) => handleSmoothScroll(e, 'hero')}>Home</a>
          <a className='hover:text-gray-400 cursor-pointer' onClick={(e) => handleSmoothScroll(e, 'about')}>About Me</a>
          <a className='hover:text-gray-400 cursor-pointer' onClick={(e) => handleSmoothScroll(e, 'service')}>Services</a>
          <a className='hover:text-gray-400 cursor-pointer' onClick={(e) => handleSmoothScroll(e, 'project')}>Projects</a>
          <a className='hover:text-gray-400 cursor-pointer' onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
        </div>

        {/* Mobile Navigation - Hamburger Menu */}
        <div className='md:hidden flex items-center'>
          
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <FaTimes className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
          </button>
        </div>

        {/* Connect Me Button (Hidden on Mobile) */}
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center space-y-4 mt-4 h-screen'>
          <a className='hover:text-gray-400' onClick={(e) => handleSmoothScroll(e, 'hero')}>Home</a>
          <a className='hover:text-gray-400' onClick={(e) => handleSmoothScroll(e, 'about')}>About Me</a>
          <a className='hover:text-gray-400' onClick={(e) => handleSmoothScroll(e, 'service')}>Services</a>
          <a className='hover:text-gray-400' onClick={(e) => handleSmoothScroll(e, 'project')}>Projects</a>
          <a className='hover:text-gray-400' onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
