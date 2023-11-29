import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TestPage from './components/TestPage';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your App Name</h1>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/test" className="hover:text-gray-300">
            Test Page
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Use Tailwind CSS dropdown with menu icon */}
          <div className="relative inline-block text-left">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none flex items-center"
              id="menu-button"
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
            >
              {/* Menu icon */}
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0 5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0 5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z" />
              </svg>
              <span className="ml-2">Menu</span>
            </button>

            {isMenuOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 text-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm hover:bg-gray-700"
                    role="menuitem"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link
                    to="/test"
                    className="block px-4 py-2 text-sm hover:bg-gray-700"
                    role="menuitem"
                    onClick={toggleMenu}
                  >
                    Test Page
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/test" element={<TestPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
