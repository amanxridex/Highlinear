import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const CompanyOverview = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="absolute -inset-4 border-2 border-gray-100 rounded-[2rem] z-0"></div>
          <div className="absolute -inset-4 bg-orange-50/50 rounded-[2rem] z-0 transform -translate-x-4 translate-y-4"></div>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" 
              alt="Highlinear Headquarters" 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute top-0 left-0 bg-[#FF5722] text-white p-6 rounded-br-[2rem]">
              <div className="text-xl font-bold uppercase tracking-widest">Highlinear</div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-[#FF5722]"></div>
            <span className="font-bold text-gray-800 tracking-wider uppercase text-sm">Who We Are</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
            A Legacy of <br />Structural Brilliance
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At Highlinear, we are committed to delivering exceptional residential, commercial, and infrastructure projects through engineering excellence, innovative technology, and uncompromising quality.
          </p>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Every project we undertake reflects our dedication to safety, sustainability, and customer satisfaction. From our humble beginnings to becoming a nationwide leader in construction, our core philosophy remains the same: build it right, build it to last.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/projects" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF5722] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg group">
              Explore Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg">
              <Phone size={18} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
