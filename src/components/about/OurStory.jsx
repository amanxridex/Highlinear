import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  const milestones = [
    { year: "1999", title: "Founded", desc: "Highlinear is established with a vision to revolutionize construction." },
    { year: "2002", title: "First Project", desc: "Successfully delivered our first major residential complex." },
    { year: "2010", title: "Commercial Expansion", desc: "Entered the commercial real estate sector with corporate parks." },
    { year: "2018", title: "100+ Projects", desc: "Crossed the milestone of 100 successfully completed projects." },
    { year: "2026", title: "Present Day", desc: "A national leader in sustainable and innovative infrastructure." }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF5722]">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">The Highlinear Story</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-[45%] p-6 bg-white rounded-3xl shadow-sm border border-gray-100 text-center md:text-left hover:shadow-xl transition-shadow relative">
                  {/* Pointer arrow */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-gray-100 transform ${i % 2 === 0 ? '-left-2 -rotate-135' : '-right-2 rotate-45'}`}></div>
                  
                  <h3 className="text-2xl font-bold text-[#FF5722] mb-2">{milestone.year}</h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                  <p className="text-gray-500">{milestone.desc}</p>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-12 h-12 bg-[#FF5722] rounded-full border-4 border-white shadow-md items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="hidden md:block w-full md:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
