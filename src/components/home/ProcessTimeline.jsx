import React from 'react';
import { motion } from 'framer-motion';

const ProcessTimeline = () => {
  const steps = [
    { title: "Consultation", desc: "Understanding your vision." },
    { title: "Planning", desc: "Feasibility and budget." },
    { title: "Design", desc: "Architectural blueprints." },
    { title: "Approval", desc: "Permits and compliance." },
    { title: "Construction", desc: "Execution on site." },
    { title: "Quality Check", desc: "Rigorous inspections." },
    { title: "Handover", desc: "Keys to your project." },
    { title: "Support", desc: "Ongoing maintenance." }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF5722]">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">How We Build</h2>
        </div>

        <div className="relative mt-20 pb-10">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-gray-100 -z-10 hidden md:block"></div>
          
          {/* Scrollable Container for smaller screens, Grid for large */}
          <div className="flex md:grid md:grid-cols-4 lg:grid-cols-8 gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center min-w-[200px] md:min-w-0 snap-center"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-100 text-gray-400 flex items-center justify-center text-xl font-bold mb-6 shadow-sm relative">
                  {i + 1}
                  {/* Arrow overlay */}
                  {i < steps.length - 1 && (
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-gray-300 hidden md:block">
                      →
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
