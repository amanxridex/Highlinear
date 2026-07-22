import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
          alt="Highlinear Best Project" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 w-full text-center mt-16 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-1 bg-[#FF5722]"></div>
            <span className="uppercase tracking-widest text-sm font-bold text-white">About Us</span>
            <div className="w-8 h-1 bg-[#FF5722]"></div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Building Tomorrow with <br/><span className="text-[#FF5722]">Excellence and Integrity</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium max-w-3xl mx-auto leading-relaxed">
            Delivering innovative construction solutions that shape skylines, communities, and the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
