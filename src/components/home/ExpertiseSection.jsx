import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ExpertiseSection = () => {
  const expertises = [
    { 
      title: 'Residential', 
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop',
      desc: 'Creating luxurious and sustainable living spaces.'
    },
    { 
      title: 'Commercial', 
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
      desc: 'Building state-of-the-art office spaces and retail hubs.'
    },
    { 
      title: 'Infrastructure', 
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
      desc: 'Developing roads, bridges, and civic amenities.'
    }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF5722]">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What We Build</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertises.map((exp, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group rounded-[2rem] overflow-hidden relative cursor-pointer"
            >
              <div className="h-96 w-full">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">{exp.title}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {exp.desc}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <Link to={`/projects/${exp.title.toLowerCase()}`} className="text-[#FF5722] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                    Explore <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
