import React from 'react';

const TrustedBy = () => {
  const stats = [
    { value: "500+", label: "Projects" },
    { value: "20+", label: "Years Experience" },
    { value: "150+", label: "Engineers" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="w-full bg-[#111827] py-12 relative z-30 -mt-8 mx-auto max-w-7xl rounded-t-[2rem] md:rounded-[2rem] shadow-2xl px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-[#FF5722] text-xs md:text-sm font-bold uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
