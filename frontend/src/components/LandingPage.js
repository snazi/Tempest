// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen" style={{ height: '90vh' }}>
      {/* LandingPage Content */}
      <div className="flex flex-col items-center justify-center container mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Responsive margins and padding */}
        <h1 className="text-4xl font-bold mb-8">Welcome to Yabangan League</h1>
        <p className="text-gray-700 mb-6">
          Explore player stats and stay updated with the latest happenings in the league.
        </p>
        <Link
          to="/about"
          className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
