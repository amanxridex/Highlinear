import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission Card */}
        <div className="bg-[#111827] text-white p-12 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
            <Target size={160} />
          </div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#FF5722] rounded-2xl flex items-center justify-center mb-8">
              <Target size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              To deliver world-class construction solutions through innovation, quality craftsmanship, and lasting client relationships.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-[#FF5722] text-white p-12 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
            <Eye size={160} />
          </div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
              <Eye size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-white/90 leading-relaxed font-light">
              To become one of India's most trusted and respected construction companies, shaping sustainable communities and iconic landmarks.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
