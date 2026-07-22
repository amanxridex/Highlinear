import React from 'react';
import { motion } from 'framer-motion';

const OurTeam = () => {
  const departments = [
    "Civil Engineers",
    "Architects",
    "Structural Engineers",
    "Project Managers",
    "Site Supervisors",
    "Safety Officers",
    "Interior Designers",
    "Quality Inspectors"
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#111827] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-[#FF5722]"></div>
            <span className="font-bold text-gray-400 tracking-wider uppercase text-sm">Our Strength</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            The Experts Behind <br/>The Blueprints
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Our success is driven by a multidisciplinary team of highly skilled professionals who bring passion, precision, and expertise to every single project.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {departments.map((dept, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                <div className="w-2 h-2 bg-[#FF5722] rounded-full"></div>
                <span className="font-medium text-sm md:text-base">{dept}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 relative w-full h-[500px]">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"></div>
           <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
            alt="Engineering Team"
            className="w-full h-full object-cover rounded-[3rem] shadow-2xl relative z-10"
           />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
