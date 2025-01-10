import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-red-500 to-pink-500 shadow-md sticky top-0 text-white z-10">
      <div className="flex items-center justify-between ">

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none md:hidden"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="-2 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex md:justify-center md:space-x-16 py-0 text-xl font-bold`}
      >
        <li>
          <Link to="/" className="block py-2 hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="block py-2 hover:text-black">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" className="block py-2 hover:text-black">
            Services
          </Link>
        </li>
        <li>
          <Link to="/documents" className="block py-2 hover:text-black">
            Required Documents
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="block py-2 hover:text-black">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
