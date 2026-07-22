import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="absolute -inset-4 border-2 border-gray-100 rounded-[2rem] z-0"></div>
          <div className="absolute -inset-4 bg-orange-50/50 rounded-[2rem] z-0 transform translate-x-4 translate-y-4"></div>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://media.istockphoto.com/id/1911777007/photo/team-of-construction-engineers-wearing-vest-and-helmet-safety-discussing-project-at.jpg?s=612x612&w=0&k=20&c=vTTKve1PfollEhw6K6ncM1eQYevHFeX1wRqiGv9uG18=" 
              alt="Highlinear Team" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-[#FF5722] text-white p-6 rounded-tr-[2rem]">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm font-medium">Years Of Excellence</div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-[#FF5722]"></div>
            <span className="font-bold text-gray-800 tracking-wider uppercase text-sm">About Highlinear</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Building Excellence <br />Since 1999
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            High-Linear Civil Private Limited is a leading construction company specializing in residential, commercial, and infrastructure development. We combine engineering expertise, innovative design, and sustainable practices to create world-class projects.
          </p>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Our commitment to quality and transparency has made us the trusted partner for countless families and corporations across the country. From conceptualization to final handover, we ensure every brick laid is a testament to our dedication.
          </p>
          
          <Link to="/about" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[#FF5722] transition-colors shadow-lg group">
            Learn More
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
