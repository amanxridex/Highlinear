import React from 'react';
import { ShieldAlert, Users, HardHat, FileText, HeartPulse, ShieldCheck } from 'lucide-react';

const SafetyCommitment = () => {
  const safetyProtocols = [
    { icon: <Users />, text: "Daily Safety Briefings" },
    { icon: <HardHat />, text: "Strict PPE Compliance" },
    { icon: <FileText />, text: "Surprise Site Audits" },
    { icon: <ShieldAlert />, text: "Emergency Preparedness" },
    { icon: <ShieldCheck />, text: "Skilled Safety Officers" },
    { icon: <HeartPulse />, text: "Accident Prevention" }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#FF5722] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Safety Culture</h2>
        <p className="text-white/90 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          Nothing is more important than the safety of our workforce. We maintain a zero-tolerance policy towards safety violations and continuously invest in training and equipment to ensure every worker returns home safely.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {safetyProtocols.map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
              <div className="mb-4 text-white">
                {item.icon}
              </div>
              <span className="font-semibold text-sm leading-snug">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyCommitment;
