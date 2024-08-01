// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center py-2">
        {/* footer navigation */}
        <nav className="mb-2">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-[#FF004D] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#FF004D] transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-[#FF004D] transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-[#FF004D] transition-colors">Contact</Link></li>
          </ul>
        </nav>

{/* copy ryt  */}
        <p className="text-sm">
          &copy; 2024 All Rights Reserved By Arvind Vishwakarma.
        </p>

        {/* social media handles */}
        <div className="mt-2">
          <a href="/" target="_blank"  className="inline-block mx-2 text-xl hover:text-[#FF004D] transition-colors">
            <FaTwitter />
          </a>
          <a href="/" target="_blank"  className="inline-block mx-2 text-xl hover:text-[#FF004D] transition-colors">
            <FaLinkedin />
          </a>
          <a href="/" target="_blank"  className="inline-block mx-2 text-xl hover:text-[#FF004D] transition-colors">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
