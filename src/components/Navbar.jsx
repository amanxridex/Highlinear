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
      <nav className="w-full flex items-center justify-between px-6 xl:px-12 py-5 bg-white shadow-sm z-50 sticky top-0">
        {/* Logo */}
        <div className="w-[200px] xl:w-[250px]">
          <Link to="/" className="flex items-center">
            <img 
              src="/HIGHLLINEAROFFLOGO.png" 
              alt="Highlinear Logo" 
              className="h-10 xl:h-12 object-contain"
            />
          </Link>
        </div>
        
        {/* Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold text-sm text-gray-800">
          <Link to="/" className="hover:text-[#FF5722] transition-colors py-4">Home</Link>
          <Link to="/about" className="hover:text-[#FF5722] transition-colors py-4">About</Link>
          
          {/* Projects Mega Menu */}
          <div className="group relative cursor-pointer py-4">
            <Link to="/projects" className="hover:text-[#FF5722] transition-colors flex items-center gap-1">
              Projects <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[600px] bg-white shadow-xl rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 grid grid-cols-2 p-6 gap-x-8 gap-y-4 pointer-events-none group-hover:pointer-events-auto">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">Categories</h4>
                <ul className="space-y-3">
                  <li><Link to="/projects/residential" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Residential</Link></li>
                  <li><Link to="/projects/commercial" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Commercial</Link></li>
                  <li><Link to="/projects/industrial" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Industrial</Link></li>
                  <li><Link to="/projects/township" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Township</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">Specialized</h4>
                <ul className="space-y-3">
                  <li><Link to="/projects/villas" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Villas</Link></li>
                  <li><Link to="/projects/affordable-housing" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Affordable Housing</Link></li>
                  <li><Link to="/projects/luxury-housing" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Luxury Housing</Link></li>
                  <li><Link to="/projects/completed" className="hover:text-[#FF5722] font-bold transition-colors block text-gray-800 hover:translate-x-1 transform duration-200">View Completed Projects →</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Mega Menu */}
          <div className="group relative cursor-pointer py-4">
            <Link to="/services" className="hover:text-[#FF5722] transition-colors flex items-center gap-1">
              Services <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[500px] bg-white shadow-xl rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 grid grid-cols-2 p-6 gap-x-8 gap-y-3 pointer-events-none group-hover:pointer-events-auto">
              <Link to="/services/construction" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Construction</Link>
              <Link to="/services/architecture" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Architecture</Link>
              <Link to="/services/interior-design" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Interior Design</Link>
              <Link to="/services/project-management" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Project Management</Link>
              <Link to="/services/renovation" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Renovation</Link>
              <Link to="/services/turnkey" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Turnkey Solutions</Link>
              <Link to="/services/consultancy" className="hover:text-[#FF5722] transition-colors block text-gray-600 hover:translate-x-1 transform duration-200">Consultancy</Link>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="group relative cursor-pointer py-4">
            <Link to="/company" className="hover:text-[#FF5722] transition-colors flex items-center gap-1">
              Company <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-xl rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 py-3 pointer-events-none group-hover:pointer-events-auto">
              <Link to="/about" className="block px-6 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-[#FF5722] transition-colors">About Us</Link>
              <Link to="/leadership" className="block px-6 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-[#FF5722] transition-colors">Leadership</Link>
              <Link to="/team" className="block px-6 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-[#FF5722] transition-colors">Team</Link>
              <Link to="/csr" className="block px-6 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-[#FF5722] transition-colors">CSR</Link>
              <Link to="/awards" className="block px-6 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-[#FF5722] transition-colors">Awards</Link>
              <Link to="/careers" className="block px-6 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-[#FF5722] transition-colors">Careers</Link>
              <Link to="/contact" className="block px-6 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-[#FF5722] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Media Dropdown */}
          <div className="group relative cursor-pointer py-4">
            <Link to="/media" className="hover:text-[#FF5722] transition-colors flex items-center gap-1">
              Media <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-xl rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 py-3 pointer-events-none group-hover:pointer-events-auto">
              <Link to="/news" className="block px-6 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-[#FF5722] transition-colors">News</Link>
              <Link to="/press-releases" className="block px-6 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-[#FF5722] transition-colors">Press Releases</Link>
              <Link to="/gallery" className="block px-6 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-[#FF5722] transition-colors">Gallery</Link>
              <Link to="/videos" className="block px-6 py-2.5 text-gray-600 hover:bg-orange-50 hover:text-[#FF5722] transition-colors">Videos</Link>
            </div>
          </div>

          <Link to="/contact" className="hover:text-[#FF5722] transition-colors py-4">Contact</Link>
        </div>

        {/* Right Nav CTA */}
        <div className="flex justify-end items-center">
          <Link to="/contact" className="bg-[#FF5722] text-white px-6 xl:px-8 py-3 rounded-full text-sm font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 whitespace-nowrap">
            Book Consultation
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
