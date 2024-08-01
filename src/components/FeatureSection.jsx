import React from 'react';
import { FaRocket, FaStar, FaShieldAlt, FaMobileAlt, FaCogs, FaHandshake } from 'react-icons/fa';

const features = [
  { id: 1, title: 'Innovative Design', description: 'Modern and sleek design that stands out.', icon: <FaRocket /> },
  { id: 2, title: 'High Performance', description: 'Optimized for speed and efficiency.', icon: <FaStar /> },
  { id: 3, title: 'Secure & Reliable', description: 'Robust security features and reliability.', icon: <FaShieldAlt /> },
  { id: 4, title: 'Mobile Friendly', description: 'Responsive design that works on any device.', icon: <FaMobileAlt /> },
  { id: 5, title: 'Customizable', description: 'Flexible and customizable to meet your needs.', icon: <FaCogs /> },
  { id: 6, title: '24/7 Support', description: 'Around-the-clock customer support and assistance.', icon: <FaHandshake /> },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Key Features</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ id, title, description, icon }) => (
            <div key={id} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4 text-[#FF004D] text-2xl">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
