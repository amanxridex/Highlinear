import React, { useState, useEffect } from 'react';
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

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF5722]">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">How We Build</h2>
        </div>

        <div className="relative pb-16 px-4 md:px-8 w-full max-w-full overflow-x-auto md:overflow-visible hide-scrollbar">
          
          {/* The Track Line (Desktop) */}
          <div className="absolute top-8 left-[6%] right-[6%] h-1 bg-gray-200 -z-10 hidden md:block"></div>
          
          {/* The Animated Crane (Desktop) */}
          <div className="hidden md:block absolute top-0 left-[6%] right-[6%] h-16 pointer-events-none z-20">
            <motion.div 
               animate={{ left: `${(currentStep / (steps.length - 1)) * 100}%` }}
               transition={{ type: "spring", stiffness: 50, damping: 14 }}
               className="absolute -top-14 -ml-[26px] flex flex-col items-center"
            >
              {/* Crane SVG */}
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-xl relative z-10">
                {/* Base and tower */}
                <path d="M8 22h8M12 22V4" strokeWidth="1.5" />
                {/* Boom */}
                <path d="M2 4h18" strokeWidth="1.5" />
                {/* Counterweight */}
                <path d="M2 4v4h3V4" fill="#111827" />
              </svg>

              {/* Animated Hook Line */}
              <motion.div
                key={`line-${currentStep}`}
                animate={{ height: [12, 12, 34, 12] }}
                transition={{ duration: 3, times: [0, 0.4, 0.7, 1] }}
                className="absolute top-[11px] left-[53.5px] w-[1.5px] bg-gray-800 origin-top z-0"
              />
              
              {/* Animated Material Block */}
              <motion.div
                key={`box-${currentStep}`}
                animate={{ y: [12, 12, 34, 12] }}
                transition={{ duration: 3, times: [0, 0.4, 0.7, 1] }}
                className="absolute top-[11px] left-[49px] w-2.5 h-2.5 bg-[#FF5722] rounded-sm shadow-md z-0 flex items-center justify-center"
              >
                <div className="w-[1px] h-[1px] bg-white rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline Nodes */}
          <div className="flex flex-nowrap md:justify-between gap-8 md:gap-0 min-w-max md:min-w-0">
            {steps.map((step, i) => {
               const isActive = i === currentStep;
               const isPast = i < currentStep;
               
               return (
                  <div key={i} className="flex flex-col items-center text-center w-[160px] md:w-auto relative group">
                    {/* Circle Node */}
                     <motion.div
                        animate={{ 
                          backgroundColor: isActive || isPast ? "#FF5722" : "#FFFFFF",
                          borderColor: isActive || isPast ? "#FF5722" : "#E5E7EB",
                          color: isActive || isPast ? "#FFFFFF" : "#9CA3AF",
                          scale: isActive ? 1.2 : 1
                        }}
                        className="w-16 h-16 rounded-full border-[3px] flex items-center justify-center text-xl font-bold mb-8 shadow-sm z-10 transition-colors duration-300"
                     >
                       {i + 1}
                     </motion.div>
                     
                     {/* Info Card Pop */}
                     <motion.div
                        animate={{
                          y: isActive ? -8 : 0,
                          scale: isActive ? 1.05 : 1,
                          opacity: isActive ? 1 : 0.6
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`bg-white px-4 py-5 rounded-2xl transition-all duration-300 min-h-[100px] flex flex-col justify-center w-full ${isActive ? 'shadow-2xl border border-orange-100 ring-4 ring-orange-50' : 'shadow-sm border border-transparent'}`}
                     >
                       <h4 className={`font-bold mb-1 ${isActive ? 'text-[#FF5722]' : 'text-gray-900'}`}>{step.title}</h4>
                       <p className="text-xs text-gray-500">{step.desc}</p>
                     </motion.div>
                  </div>
               )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
