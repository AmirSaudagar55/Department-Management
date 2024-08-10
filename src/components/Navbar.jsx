import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
      <div className="flex items-center">
      
        <img
          src="/images/Logo.png"
          alt="Logo"
          className="h-8 w-auto mr-2"
        />
        <span className="text-white text-lg font-semibold">Department Management System</span>
      
      </div>
      </Link>
      
      {/* Navigation Links */}
      <div className="space-x-4">
        <Link to="/admin" className="text-white hover:text-gray-300">Admin</Link>
        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        <Link to="/contact" className="text-white hover:text-gray-300">Contact us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
