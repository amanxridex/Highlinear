import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const projects = [
    { name: 'Luxury Apartments', location: 'Dehradun', status: 'Completed', image: '/ABC.png' },
    { name: 'Corporate Office', location: 'Noida', status: 'Ongoing', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
    { name: 'Industrial Plant', location: 'Lucknow', status: 'Completed', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
    { name: 'Resort', location: 'Thatyur', status: 'Upcoming', image: '/THECREST.png' },
    { name: 'Villa Project', location: 'Gurgaon', status: 'Ongoing', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop' },
    { name: 'Shopping Complex', location: 'Kanpur', status: 'Completed', image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-[#FF5722]"></div>
              <span className="font-bold text-gray-800 tracking-wider uppercase text-sm">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Featured Projects</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Link to="/projects" className="inline-flex items-center gap-2 font-bold text-[#FF5722] hover:text-orange-700 transition-colors">
              View All Projects <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group rounded-3xl overflow-hidden relative cursor-pointer shadow-lg"
            >
              <div className="h-80 w-full overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="bg-[#FF5722] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-3">
                  {project.status}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <MapPin size={16} /> {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
