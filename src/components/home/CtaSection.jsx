import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="w-full relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Build Your Dream Project?</h2>
        <p className="text-xl text-gray-300 mb-12">Let's discuss how Highlinear can bring your vision to life with precision, speed, and uncompromising quality.</p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link to="/contact" className="w-full sm:w-auto bg-[#FF5722] text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-orange-600 transition-colors text-lg">
            Get a Quote
          </Link>
          <a href="tel:+1234567890" className="w-full sm:w-auto bg-white text-gray-900 px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-gray-100 transition-colors text-lg flex items-center justify-center gap-3">
            <PhoneCall size={24} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
