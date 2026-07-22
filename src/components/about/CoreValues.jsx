import React from 'react';
import { Shield, Award, Lightbulb, HardHat, Leaf, Users, Search, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreValues = () => {
  const values = [
    { icon: <Shield size={32}/>, title: "Integrity", desc: "Honesty and transparency in all dealings." },
    { icon: <Award size={32}/>, title: "Quality", desc: "Uncompromising standards of construction." },
    { icon: <Lightbulb size={32}/>, title: "Innovation", desc: "Embracing modern tech and methodologies." },
    { icon: <HardHat size={32}/>, title: "Safety", desc: "Zero-tolerance for safety violations." },
    { icon: <Leaf size={32}/>, title: "Sustainability", desc: "Eco-friendly and responsible building." },
    { icon: <Users size={32}/>, title: "Customer First", desc: "Client satisfaction drives our business." },
    { icon: <Search size={32}/>, title: "Transparency", desc: "Clear communication at every phase." },
    { icon: <Star size={32}/>, title: "Excellence", desc: "Striving for perfection in every detail." },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF5722]">Our Core Values</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What Drives Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-orange-50 text-[#FF5722] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF5722] group-hover:text-white transition-colors duration-300">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
