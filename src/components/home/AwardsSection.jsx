import React from 'react';
import { Award } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    { title: "ISO 9001:2015", desc: "Quality Management Certified" },
    { title: "RERA Approved", desc: "Fully Compliant Projects" },
    { title: "Govt. Recognized", desc: "Class A Contractor" },
    { title: "Safety Excellence", desc: "National Safety Council 2023" }
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-[#FF5722] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold mb-4">Awards & Certifications</h2>
          <p className="text-white/80">Recognized for our unwavering commitment to quality and safety.</p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 border border-white/20 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-default">
              <Award size={40} className="mb-4 text-white" />
              <h4 className="font-bold mb-1">{award.title}</h4>
              <p className="text-xs text-white/70">{award.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
