import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const countRef = useRef(null);

  useEffect(() => {
    if (inView && countRef.current) {
      const controls = animate(0, stat.target, {
        duration: 2.5,
        ease: "easeOut",
        delay: index * 0.15,
        onUpdate: (value) => {
          if (countRef.current) {
            countRef.current.textContent = Math.floor(value) + stat.suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, stat.target, stat.suffix, index]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-8 bg-[#1E293B] rounded-3xl border border-white/5 relative group overflow-hidden shadow-lg hover:shadow-orange-900/20 hover:border-orange-500/30 transition-all duration-500"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FF5722]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <h3 className="text-4xl md:text-5xl font-black text-white mb-3 relative z-10" ref={countRef}>
        0{stat.suffix}
      </h3>
      
      <p className="text-[#FF5722] text-xs font-bold uppercase tracking-widest relative z-10 text-center">{stat.label}</p>

      {/* Growing orange underline */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "40px" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.15 + 0.5, duration: 0.8, ease: "easeOut" }}
        className="h-1 bg-[#FF5722] rounded-full mt-5 relative z-10 group-hover:w-16 transition-all duration-500"
      />
    </motion.div>
  );
};

const StatsCounter = () => {
  const stats = [
    { target: 25, suffix: "+", label: "Years" },
    { target: 500, suffix: "+", label: "Projects" },
    { target: 100, suffix: "+", label: "Cities" },
    { target: 250, suffix: "+", label: "Employees" },
    { target: 5, suffix: "M+", label: "Sq. Ft. Delivered" },
    { target: 98, suffix: "%", label: "Satisfied Clients" }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#64748B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
