import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-pink-500 text-white py-8 px-6 sm:px-12 hover:text-black">
    {/* Content Wrapper - Hidden on Small Screens */}
    <div className="hidden sm:block">
      {/* Company Name Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mb-2 animate-pulse">
          ELLORA VALUATION & ADVISORY SERVICES
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl italic font-semibold">
          "Precision in Valuation, Excellence in Advisory"
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 hover:text-black transition-colors">
            About Us
          </h2>
          <p className="text-sm sm:text-base leading-relaxed hover:text-black transition-colors">
            Welcome to EVAS Property Valuation Services! We specialize in assisting you with obtaining your Property Valuation Certificate for VISA purposes, certified by government-approved Chartered Engineers and Valuers. Our services are exclusively available across Kerala. Contact us today for your Valuation Certificate needs!
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 hover:text-black transition-colors">
            Contact Us
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 hover:text-black transition-colors">
              <FaMapMarkerAlt className="text-lg" />
              <span>Mamangalam, Pin: 682024, Kochin, Kerala</span>
            </li>
            <li className="flex items-center gap-3 hover:text-black transition-colors">
              <FaPhoneAlt className="text-lg" />
              <span>8891129013</span>
            </li>
            <li className="flex items-center gap-3 hover:text-black transition-colors">
              <FaEnvelope className="text-lg" />
              <span>valuationkerala@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Office Hours Section */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 hover:text-black transition-colors">
            Office Hours
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 hover:text-black transition-colors">
              <FaClock className="text-lg" />
              <span>Opens 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
          
        </div>
      </div>
    </div>

    {/* Footer Bottom - Visible Only on Small Screens */}
    <div className="mt-8 border-t border-white/20 pt-4 text-center sm:hidden">
      <p className="text-sm sm:text-base">
        &copy; 2024 Ellora Valuation & Advisory Services. All rights reserved.
      </p>
    </div>

    {/* Subtle Animation */}
    <style jsx>{`
      footer:hover {
        background: linear-gradient(to right, #ff80ab, #ff4081);
        transition: background 0.5s ease-in-out;
      }

      footer div:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out;
      }

      h1.animate-pulse {
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.6;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
