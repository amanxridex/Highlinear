import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  const phrases = [
    "One Landmark at a Time.",
    "With Uncompromising Quality.",
    "For Generations to Come.",
    "With Precision and Trust."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* YouTube Video Background wrapper */}
        <div className="absolute w-[300vw] h-[300vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <iframe 
            src="https://www.youtube.com/embed/4BzjUq921Y4?autoplay=1&mute=1&controls=0&loop=1&playlist=4BzjUq921Y4&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&vq=hd1080" 
            title="Hero Video Background"
            className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start mt-16 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 flex flex-col items-start">
            <span>Building India's Future,</span>
            <span className="text-[#FF5722] text-3xl md:text-4xl lg:text-5xl mt-2 relative inline-block w-full h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 whitespace-nowrap"
                >
                  {phrases[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium mb-10 max-w-2xl leading-relaxed mt-4 md:mt-0">
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
