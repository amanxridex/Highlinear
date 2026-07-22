import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Store, Factory, Hammer, PenTool, Wrench } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { title: 'Residential Construction', icon: <Building2 size={32} />, desc: 'Premium homes and luxury apartments built with uncompromising quality.' },
    { title: 'Commercial Construction', icon: <Store size={32} />, desc: 'Modern office spaces, malls, and corporate parks designed for the future.' },
    { title: 'Industrial Projects', icon: <Factory size={32} />, desc: 'State-of-the-art warehouses, factories, and industrial facilities.' },
    { title: 'Turnkey Solutions', icon: <Hammer size={32} />, desc: 'End-to-end project execution from conceptualization to final handover.' },
    { title: 'Architecture & Design', icon: <PenTool size={32} />, desc: 'Innovative architectural planning and sustainable structural designs.' },
    { title: 'Renovation & Maintenance', icon: <Wrench size={32} />, desc: 'Expert restoration, interior fit-outs, and ongoing facility maintenance.' },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF5722]">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What We Offer</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#FF5722] mb-6 group-hover:bg-[#FF5722] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
