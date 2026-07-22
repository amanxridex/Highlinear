import React from 'react';
import { Cpu, Box, Camera, Laptop, PenTool, BatteryCharging } from 'lucide-react';

const TechnologyInnovation = () => {
  const techs = [
    { icon: <Box size={32}/>, title: "BIM Modeling", desc: "3D Building Information Modeling for clash detection and precise resource planning." },
    { icon: <Camera size={32}/>, title: "Drone Monitoring", desc: "Aerial surveys and real-time site monitoring for large-scale projects." },
    { icon: <Laptop size={32}/>, title: "Smart Project Mgmt", desc: "Cloud-based ERP systems for transparent tracking of budget and timelines." },
    { icon: <Cpu size={32}/>, title: "AI-Based Planning", desc: "Utilizing AI algorithms to optimize structural designs and material usage." },
    { icon: <PenTool size={32}/>, title: "3D Visualization", desc: "Immersive VR/AR walkthroughs for clients before construction begins." },
    { icon: <BatteryCharging size={32}/>, title: "Green Tech", desc: "Implementation of solar integration and smart grid technologies." },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF5722]">Innovation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Technology & Innovation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techs.map((tech, i) => (
            <div key={i} className="p-8 bg-[#F8F9FA] rounded-[2rem] hover:-translate-y-2 transition-transform duration-300">
              <div className="text-[#FF5722] mb-6">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
              <p className="text-gray-500 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyInnovation;
