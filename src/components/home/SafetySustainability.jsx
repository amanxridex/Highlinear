import React from 'react';
import { Leaf, ShieldCheck, HeartHandshake, HardHat } from 'lucide-react';

const SafetySustainability = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Safety & <br />Sustainability</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            We are committed to protecting our environment and our people. Highlinear integrates eco-friendly practices and strict safety protocols into every phase of construction.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <Leaf className="text-green-400 shrink-0" size={32} />
              <div>
                <h4 className="text-xl font-bold mb-1">Green Building</h4>
                <p className="text-gray-400 text-sm">Utilizing sustainable materials and energy-efficient designs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck className="text-blue-400 shrink-0" size={32} />
              <div>
                <h4 className="text-xl font-bold mb-1">Worker Safety</h4>
                <p className="text-gray-400 text-sm">Zero-tolerance policy for safety violations on site.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <HeartHandshake className="text-red-400 shrink-0" size={32} />
              <div>
                <h4 className="text-xl font-bold mb-1">Community Impact</h4>
                <p className="text-gray-400 text-sm">Minimizing disruption and noise in surrounding neighborhoods.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <HardHat className="text-yellow-400 shrink-0" size={32} />
              <div>
                <h4 className="text-xl font-bold mb-1">Quality Standards</h4>
                <p className="text-gray-400 text-sm">Strict adherence to national and international building codes.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-green-500/20 rounded-[3rem] transform translate-x-4 translate-y-4"></div>
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
            alt="Safety and Sustainability" 
            className="rounded-[3rem] w-full h-[600px] object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default SafetySustainability;
