import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const stats = [
    { value: "500+", label: "Projects" },
    { value: "20+", label: "Years Experience" },
    { value: "150+", label: "Engineers" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30, scaleX: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scaleX: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth ease out
      className="w-full bg-[#111827] py-12 relative z-30 -mt-8 mx-auto max-w-7xl rounded-t-[2rem] md:rounded-[2rem] shadow-2xl px-6 md:px-12 origin-center"
    >
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
        }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10"
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="flex flex-col items-center justify-center text-center px-4"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-[#FF5722] text-xs md:text-sm font-bold uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TrustedBy;
