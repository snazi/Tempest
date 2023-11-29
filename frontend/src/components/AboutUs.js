// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-6 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 mb-6">
          We are dedicated to bringing you the latest updates and insights from the Tempest
          Basketball League.
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default AboutUs;
