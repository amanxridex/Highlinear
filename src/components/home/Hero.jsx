import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video 
          src="https://media.gettyimages.com/id/2149833172/video/architects-analyzing-blueprint-in-building-under-construction.mp4?s=mp4-640x640-gi&k=20&c=StHNJ-aitVv3uhlvZhJngZp85F9Zr-JSlcNpNbOSU4A=" 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start mt-16 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Building India's Future, <span className="text-[#FF5722]">One Landmark at a Time.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium mb-10 max-w-2xl leading-relaxed">
            Delivering premium residential, commercial, and infrastructure projects with uncompromising quality, innovation, and trust.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/projects" className="w-full sm:w-auto bg-[#FF5722] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group">
              Explore Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-2">
              <Phone size={18} />
              Get a Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 hidden md:flex"
      >
        <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-[#FF5722] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
