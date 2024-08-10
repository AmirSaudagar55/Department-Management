import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4" style={{ marginTop: 'auto' }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left side content */}
        <div className="text-sm">
          <p>&copy; 2024 Company. All rights reserved.</p>
          <p>Designed with ❤️</p>
        </div>
        
        {/* Right side content */}
        <div className="text-sm">
          <Link to="/" className="text-white hover:text-gray-300 mr-4">Privacy Policy</Link>
          <Link to="/" className="text-white hover:text-gray-300 mr-4">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
