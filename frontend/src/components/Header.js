// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 md:p-8 lg:p-12 h-screen" style={{ height: '10vh' }}>
      {/* Header Content */}
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="text-2xl font-bold">Yabangan League</div>

        {/* Navigation for medium and large screens */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/player" className="hover:text-gray-300">
            Players
          </Link>
          <Link to="/teams" className="hover:text-gray-300">
            Teams
          </Link>
          <Link to="/schedule" className="hover:text-gray-300">
            Schedule
          </Link>
          {/* New link for About Us */}
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
        </nav>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>

          {/* Responsive menu */}
          {isMenuOpen && (
            <div className="absolute top-16 right-4 bg-gray-800 text-white p-4 rounded-md">
              <Link
                to="/"
                className="block py-2 hover:text-gray-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/player"
                className="block py-2 hover:text-gray-300"
                onClick={toggleMenu}
              >
                Players
              </Link>
              <Link
                to="/teams"
                className="block py-2 hover:text-gray-300"
                onClick={toggleMenu}
              >
                Teams
              </Link>
              <Link
                to="/schedule"
                className="block py-2 hover:text-gray-300"
                onClick={toggleMenu}
              >
                Schedule
              </Link>
              {/* New link for About Us in the responsive menu */}
              <Link
                to="/about"
                className="block py-2 hover:text-gray-300"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
