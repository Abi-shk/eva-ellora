import React from 'react';
import logo from '../assets/logo.png';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Header = () => (
  <header className="text-white text-center">
    <div className="flex flex-wrap justify-between items-center gap-4">
      {/* Logo Section */}
      <img
        src={logo}
        alt="Logo"
        className="h-20 w-auto md:h-28 lg:h-28 xl:h-28 max-w-full"
      />

      {/* Contact and Button Section */}
      <div className="text-center">
  <a href="tel:+918891129013">
  <div className="flex items-center justify-center gap-1 mb-2 bg-blue-900 py-2 rounded-full shadow-md text-sm md:text-md font-bold">
    <FaPhoneAlt className=" text-green-400" />
    <p>
      +91-8891 129 013
    </p>
  </div>
    </a>
  <a
    href="https://wa.me/918891129013"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="flex items-center justify-center gap-2 bg-green-500 px-6 md:px-8 py-2 rounded-full shadow-md text-sm md:text-md font-bold hover:bg-green-600 transition-all mb-2">
      <FaWhatsapp className="text-lg md:text-xl" />
      WhatsApp
    </button>
  </a>
</div>

    </div>
  </header>
);

export default Header;
