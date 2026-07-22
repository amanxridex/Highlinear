import React from 'react';
import { Leaf, ShieldCheck, HeartHandshake, HardHat } from 'lucide-react';
import { motion } from 'framer-motion';

const SafetySustainability = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#111827] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Safety & <br />Sustainability</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed mb-10">
            We are committed to protecting our environment and our people. Highlinear integrates eco-friendly practices and strict safety protocols into every phase of construction.
          </motion.p>
          
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="flex gap-4 group">
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="shrink-0 text-green-400 p-2 bg-green-400/10 rounded-xl">
                <Leaf size={28} />
              </motion.div>
              <div>
                <h4 className="text-xl font-bold mb-1 group-hover:text-green-400 transition-colors">Green Building</h4>
                <p className="text-gray-400 text-sm">Utilizing sustainable materials and energy-efficient designs.</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex gap-4 group">
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="shrink-0 text-blue-400 p-2 bg-blue-400/10 rounded-xl">
                <ShieldCheck size={28} />
              </motion.div>
              <div>
                <h4 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">Worker Safety</h4>
                <p className="text-gray-400 text-sm">Zero-tolerance policy for safety violations on site.</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex gap-4 group">
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="shrink-0 text-red-400 p-2 bg-red-400/10 rounded-xl">
                <HeartHandshake size={28} />
              </motion.div>
              <div>
                <h4 className="text-xl font-bold mb-1 group-hover:text-red-400 transition-colors">Community Impact</h4>
                <p className="text-gray-400 text-sm">Minimizing disruption and noise in surrounding neighborhoods.</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex gap-4 group">
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="shrink-0 text-yellow-400 p-2 bg-yellow-400/10 rounded-xl">
                <HardHat size={28} />
              </motion.div>
              <div>
                <h4 className="text-xl font-bold mb-1 group-hover:text-yellow-400 transition-colors">Quality Standards</h4>
                <p className="text-gray-400 text-sm">Strict adherence to national and international building codes.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="absolute inset-0 bg-green-500/20 rounded-[3rem] transform translate-x-4 translate-y-4"
          ></motion.div>
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
            alt="Safety and Sustainability" 
            className="rounded-[3rem] w-full h-[600px] object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SafetySustainability;
