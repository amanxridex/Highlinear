import React from 'react';
import { motion } from 'framer-motion';

const ProjectGallery = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery Showcase</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A glimpse into our world of precision engineering and architectural brilliance.</p>
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden h-64 relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest text-sm">View Project</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-96 relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest text-sm">View Project</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden h-96 relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest text-sm">View Project</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-64 relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest text-sm">View Project</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden h-64 relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest text-sm">View Project</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-96 relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest text-sm">View Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
