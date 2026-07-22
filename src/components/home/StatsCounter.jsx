import React from 'react';
import { motion } from 'framer-motion';

const StatsCounter = () => {
  const stats = [
    { value: "25+", label: "Years" },
    { value: "500+", label: "Projects" },
    { value: "100+", label: "Cities" },
    { value: "250+", label: "Employees" },
    { value: "5M+", label: "Sq. Ft. Delivered" },
    { value: "98%", label: "Satisfied Clients" }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background map or lines could go here */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FF5722 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
            >
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-[#FF5722] text-xs font-bold uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
