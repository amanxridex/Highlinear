import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      {/* Top Bar Marquee */}
      <div className="w-full bg-white border-b border-gray-100 overflow-hidden py-3 px-4 hidden md:block relative">
        <div className="flex whitespace-nowrap text-xs font-medium animate-marquee w-max">
          {/* First Set */}
          <span className="text-[#FF5722] mx-4">Strengthening Communities</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-gray-500 mx-4">Transforming Lives with Excellence in Construction</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-gray-500 mx-4">Your Trusted Partner for Construction Excellence</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-[#FF5722] mx-4">Building Landmarks and Strengthening Communities</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-gray-500 mx-4">Transforming Lives</span>
          <span className="text-gray-300 mx-4">|</span>
          
          {/* Duplicate Set for Seamless Loop */}
          <span className="text-[#FF5722] mx-4">Strengthening Communities</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-gray-500 mx-4">Transforming Lives with Excellence in Construction</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-gray-500 mx-4">Your Trusted Partner for Construction Excellence</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-[#FF5722] mx-4">Building Landmarks and Strengthening Communities</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-gray-500 mx-4">Transforming Lives</span>
          <span className="text-gray-300 mx-4">|</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-5 bg-white shadow-sm z-50 sticky top-0">
        {/* Logo */}
        <div className="w-[250px]">
          <Link to="/" className="flex items-center">
            <img 
              src="/HIGHLLINEAROFFLOGO.png" 
              alt="Highlinear Logo" 
              className="h-12 md:h-14 object-contain"
            />
          </Link>
        </div>
        
        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 font-semibold text-sm text-gray-800">
          <Link to="/about" className="hover:text-[#FF5722] transition-colors">About</Link>
          <Link to="/news" className="hover:text-[#FF5722] transition-colors">News</Link>
          <Link to="/contact" className="hover:text-[#FF5722] transition-colors">Contact</Link>
          <div className="relative group cursor-pointer">
            <div className="hover:text-[#FF5722] transition-colors flex items-center gap-1">
              Pages 
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
            {/* Simple Dropdown for Pages */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link to="/services" className="block px-6 py-3 hover:bg-gray-50 hover:text-[#FF5722] transition-colors">Services</Link>
              <Link to="/portfolio" className="block px-6 py-3 hover:bg-gray-50 hover:text-[#FF5722] transition-colors">Portfolio</Link>
            </div>
          </div>
        </div>

        {/* Right Nav */}
        <div className="w-[200px] flex justify-end items-center">
          <Link to="/contact" className="bg-[#FF5722] text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20">
            Get In Touch
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
