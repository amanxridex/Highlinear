import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#111827] text-white pt-20 pb-10 px-6 md:px-12 border-t-4 border-[#FF5722]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <img src="/HIGHLLINEAROFFLOGO.png" alt="Highlinear Logo" className="h-14 md:h-16 mb-8 object-contain" />
            <p className="text-gray-400 leading-relaxed text-sm">
              Combining Craftsmanship with Innovation for Exceptional Results. We build the foundation of tomorrow.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-[#FF5722] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#FF5722] transition-colors">Our Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#FF5722] transition-colors">Projects Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF5722] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/services" className="hover:text-[#FF5722] transition-colors">Tower Development</Link></li>
              <li><Link to="/services" className="hover:text-[#FF5722] transition-colors">Urban Skyline Vision</Link></li>
              <li><Link to="/services" className="hover:text-[#FF5722] transition-colors">Concrete Structures</Link></li>
              <li><Link to="/services" className="hover:text-[#FF5722] transition-colors">Interior Design</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates on our latest projects.</p>
            <div className="flex bg-white/10 rounded-full p-1 border border-gray-700">
              <input type="email" placeholder="Email Address" className="bg-transparent text-white px-4 py-2 text-sm focus:outline-none w-full" />
              <button className="bg-[#FF5722] rounded-full w-10 h-10 flex items-center justify-center shrink-0 hover:bg-white hover:text-[#FF5722] transition-colors shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} High-Linear Civil Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
