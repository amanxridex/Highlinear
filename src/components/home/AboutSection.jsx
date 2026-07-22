import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  // Stagger container for text content
  const textStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } // smooth ease out
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image (Mask Reveal) */}
        <div className="relative">
          <div className="absolute -inset-4 border-2 border-gray-100 rounded-[2rem] z-0"></div>
          <div className="absolute -inset-4 bg-orange-50/50 rounded-[2rem] z-0 transform translate-x-4 translate-y-4"></div>
          
          <motion.div 
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }} // smooth ease in out
            className="rounded-[2rem] overflow-hidden shadow-2xl relative z-10 w-full"
            style={{ minHeight: "500px" }}
          >
            <motion.img 
              initial={{ scale: 1.3 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
              src="https://media.istockphoto.com/id/1911777007/photo/team-of-construction-engineers-wearing-vest-and-helmet-safety-discussing-project-at.jpg?s=612x612&w=0&k=20&c=vTTKve1PfollEhw6K6ncM1eQYevHFeX1wRqiGv9uG18=" 
              alt="Highlinear Team" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute bottom-0 left-0 bg-[#FF5722] text-white p-6 rounded-tr-[2rem]"
            >
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm font-medium">Years Of Excellence</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: Content */}
        <motion.div
          variants={textStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={textItem} className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-[#FF5722]"></div>
            <span className="font-bold text-gray-800 tracking-wider uppercase text-sm">About Highlinear</span>
          </motion.div>
          <motion.h2 variants={textItem} className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Building Excellence <br />Since 1999
          </motion.h2>
          <motion.p variants={textItem} className="text-gray-600 text-lg leading-relaxed mb-8">
            High-Linear Civil Private Limited is a leading construction company specializing in residential, commercial, and infrastructure development. We combine engineering expertise, innovative design, and sustainable practices to create world-class projects.
          </motion.p>
          <motion.p variants={textItem} className="text-gray-500 mb-10 leading-relaxed">
            Our commitment to quality and transparency has made us the trusted partner for countless families and corporations across the country. From conceptualization to final handover, we ensure every brick laid is a testament to our dedication.
          </motion.p>
          
          <motion.div variants={textItem}>
            <Link to="/about" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[#FF5722] transition-colors shadow-lg group">
              Learn More
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
