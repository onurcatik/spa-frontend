import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-bar bg-blue-600 dark:bg-gray-900 p-4 fixed top-0 left-0 w-full z-[9999]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Company Name as Home Link */}
        <div className="flex items-center">
          <ScrollLink 
            to="home" 
            smooth={true} 
            duration={500} 
            className="text-white text-2xl font-bold cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <img src="https://via.placeholder.com/40" alt="Company Logo" className="w-10 h-10 mr-3" />
            Doktor Web Sitesi
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* Dark Mode Toggle for Mobile */}
          <button
            className="text-white focus:outline-none"
            onClick={toggleDarkMode}
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="w-6 h-6" />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? 'block' : 'hidden'
          } lg:flex space-y-4 lg:space-y-0 lg:space-x-6 lg:items-center lg:flex-row absolute lg:relative bg-blue-600 dark:bg-gray-900 w-full lg:w-auto left-0 lg:left-auto mt-12 lg:mt-0 py-4 lg:py-0 text-center`}
        >
          {/* Smooth Scrolling Links */}
          <li>
            <ScrollLink 
              to="home" 
              smooth={true} 
              duration={500} 
              className="block py-2 lg:inline-block hover:underline text-white dark:text-gray-200 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Ana Sayfa
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="services" 
              smooth={true} 
              duration={500} 
              className="block py-2 lg:inline-block hover:underline text-white dark:text-gray-200 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Hizmetler
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="about" 
              smooth={true} 
              duration={500} 
              className="block py-2 lg:inline-block hover:underline text-white dark:text-gray-200 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Hakkımızda
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="testimonials" 
              smooth={true} 
              duration={500} 
              className="block py-2 lg:inline-block hover:underline text-white dark:text-gray-200 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Hasta Görüşleri
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="block py-2 lg:inline-block hover:underline text-white dark:text-gray-200 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              İletişim
            </ScrollLink>
          </li>

          {/* Dark Mode Toggle for Web */}
          <li className="hidden lg:block">
            <button
              className="ml-4 p-2 bg-white text-blue-600 dark:bg-gray-700 dark:text-gray-200 rounded-full"
              onClick={toggleDarkMode}
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
