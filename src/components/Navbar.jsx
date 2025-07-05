import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white shadow-lg font-lansui">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo or App Name */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-yellow-400">SendSmart AI</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 items-center">
            <Link
              to="/"
              className="text-white hover:text-yellow-500 hover:scale-110 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/primary"
              className="text-white hover:text-yellow-500 hover:scale-110 transition duration-200"
            >
              Send Email
            </Link>
            <Link
              to="/profileCompletePage"
              className="text-white hover:text-yellow-500 hover:scale-110 transition duration-200"
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
