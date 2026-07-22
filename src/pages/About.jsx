import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white relative min-h-[70vh]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          {/* Orange frame styling */}
          <div className="absolute -inset-4 border-2 border-[#FF5722] rounded-[2rem] z-0 rounded-tr-none rounded-bl-none"></div>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://media.istockphoto.com/id/1911777007/photo/team-of-construction-engineers-wearing-vest-and-helmet-safety-discussing-project-at.jpg?s=612x612&w=0&k=20&c=vTTKve1PfollEhw6K6ncM1eQYevHFeX1wRqiGv9uG18=" 
              alt="Construction Team" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-[#FF5722] text-white p-6 rounded-tr-3xl">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm font-medium">Years Of Experience</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-[#FF5722]"></div>
            <span className="font-bold text-gray-800">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
            Our Reputation is as<br />Solid as Concrete
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            The project timeline will vary depending on the scope and complexity of the work. We will provide you with a realistic timeline during the initial consultation and keep you updated.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-[#FF5722]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">Results For You</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit. Eget rutrum sit ut egestas ipsum.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-[#FF5722]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">Real Estate Gets Real</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit. Eget rutrum sit ut egestas ipsum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
