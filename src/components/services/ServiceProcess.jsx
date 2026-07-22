import React from 'react';

const ServiceProcess = ({ process }) => {
  if (!process || process.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A systematic approach to ensure quality, transparency, and timely delivery.</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 relative z-10">
            {process.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-gray-800 border-4 border-gray-900 shadow-xl flex items-center justify-center text-[#FF5722] font-bold text-xl mb-4 group-hover:scale-110 group-hover:bg-[#FF5722] group-hover:text-white transition-all duration-300 relative">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-gray-200">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
