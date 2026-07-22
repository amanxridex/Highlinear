import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const QualityAssurance = () => {
  const steps = [
    "Material Testing & Verification",
    "Daily Site Inspections",
    "Third-Party Structural Audits",
    "ISO 9001 Compliant Processes",
    "Comprehensive Quality Checklists",
    "Pre-Handover Final Inspection"
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 order-2 md:order-1 relative">
          <div className="absolute inset-0 bg-gray-100 rounded-[2rem] transform -translate-x-4 translate-y-4 -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
            alt="Quality Control" 
            className="w-full h-[500px] object-cover rounded-[2rem] shadow-xl"
          />
        </div>

        <div className="md:w-1/2 order-1 md:order-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-[#FF5722]"></div>
            <span className="font-bold text-gray-800 tracking-wider uppercase text-sm">Quality First</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
            Uncompromising <br/>Quality Assurance
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            At Highlinear, we believe that quality is not an act, but a habit. Our rigorous quality control protocols ensure that every structure we build stands the test of time.
          </p>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-50 text-[#FF5722] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-semibold text-gray-800">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
