import React from 'react';
import { Heart, TreePine, GraduationCap, Stethoscope } from 'lucide-react';

const CsrInitiatives = () => {
  const initiatives = [
    { icon: <TreePine size={40}/>, title: "Environmental Action", desc: "Planted over 50,000 trees across our project sites." },
    { icon: <GraduationCap size={40}/>, title: "Education Support", desc: "Providing scholarships and building schools in rural areas." },
    { icon: <Stethoscope size={40}/>, title: "Health Camps", desc: "Regular medical checkups for workers and nearby communities." },
    { icon: <Heart size={40}/>, title: "Community Relief", desc: "Active participation in disaster relief and infrastructure rebuilding." }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&auto=format&fit=crop" alt="Tree Plantation" className="rounded-2xl w-full h-48 object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400&auto=format&fit=crop" alt="Community" className="rounded-2xl w-full h-64 object-cover" />
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-[#FF5722]"></div>
            <span className="font-bold text-gray-800 tracking-wider uppercase text-sm">Giving Back</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
            Corporate Social <br/>Responsibility
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We believe that true success is measured by the positive impact we leave on society. Our CSR initiatives are focused on long-term, sustainable development for communities across India.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {initiatives.map((init, i) => (
              <div key={i}>
                <div className="text-[#FF5722] mb-3">{init.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{init.title}</h4>
                <p className="text-sm text-gray-500">{init.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CsrInitiatives;
