// src/components/HeroSection.jsx
import React from "react";
import HeroImage1 from "../assets/images/hero-banner-1.png";
import HeroImage2 from "../assets/images/hero-banner-2.png";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto flex flex-col lg:flex-row text-center px-6">
        {/* heading and heading paragraph  */}
        <div className="flex-1 lg:pr-12 mb-8 lg:mb-0">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
            Revitalize Your Website <br /> with Optimal Performance and Design
          </h1>
          <p className=" lg:text-base text-sm text-gray-600 mb-6">
            We tackle all your website issues, from minor tweaks to major
            upgrades, ensuring peak performance and user experience. <br /> Our expert
            team delivers tailored solutions to enhance functionality and
            design, transforming your site into a seamless, efficient platform.
            Partner with us for optimal results!
          </p>
          {/* hero images  */}

          <div className="w-full flex flex-col items-center justify-evenly space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 mt-8 lg:mt-0">
            <img
              src={HeroImage1}
              alt="Hero 1"
              className="w-full h-auto max-w-xs lg:max-w-lg object-cover rounded-lg shadow-lg"
            />
            <img
              src={HeroImage2}
              alt="Hero 2"
              className="w-full h-auto max-w-xs lg:max-w-lg object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
