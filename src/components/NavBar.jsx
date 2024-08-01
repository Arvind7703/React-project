// src/components/NavBar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogoAdobe } from "react-icons/bi";
import {
  FaHome,
  FaBook,
  FaDollarSign,
  FaPhone,
  FaQuestionCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 z-50 py-4">
      <div className="container mx-auto flex items-center justify-between px-5">
        {/* brand Logo */}
        <BiLogoAdobe className="text-5xl text-[#FF004D]" />

        {/* hamburger menu-bar */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* brand logo & navigation options */}
        <div
          className={`lg:flex lg:space-x-8 transition-transform transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent`}
        >
          <Link
            to="/"
            className="block lg:inline-block py-2 px-4 hover:text-[#FF004D] transition-colors flex items-center"
          >
            <FaHome className="inline-block mr-1" /> Home
          </Link>
          <Link
            to="/blog"
            className="block lg:inline-block py-2 px-4 hover:text-[#FF004D] transition-colors flex items-center"
          >
            <FaBook className="inline-block mr-1" /> Blog
          </Link>
          <Link
            to="/pricing"
            className="block lg:inline-block py-2 px-4 hover:text-[#FF004D] transition-colors flex items-center"
          >
            <FaDollarSign className="inline-block mr-1" /> Pricing
          </Link>
          <Link
            to="/contact"
            className="block lg:inline-block py-2 px-4 hover:text-[#FF004D] transition-colors flex items-center"
          >
            <FaPhone className="inline-block mr-1" /> Contact
          </Link>
          <Link
            to="/faq"
            className="block lg:inline-block py-2 px-4 hover:text-[#FF004D] transition-colors flex items-center"
          >
            <FaQuestionCircle className="inline-block mr-1" /> FAQ
          </Link>
        </div>

        {/* navigation btn */}
        <div className="hidden lg:block">
          <Link
            to="/get-started"
            className="bg-[#ff004cd2] text-white py-2 px-4 rounded-lg hover:bg-[#ff001e] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
