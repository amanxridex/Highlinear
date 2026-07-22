import React from 'react';

const ClientsPartners = () => {
  const clients = ["L&T", "DLF", "Godrej", "Tata Projects", "Shapoorji", "Reliance", "Infosys", "Wipro"];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-gray-500 font-bold tracking-widest uppercase text-sm">Trusted by Industry Leaders</p>
        </div>

        {/* Marquee effect */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
            {clients.map((client, i) => (
              <span key={i} className="text-3xl md:text-5xl font-black text-gray-200 uppercase">
                {client}
              </span>
            ))}
            {/* Repeat for seamless looping */}
            {clients.map((client, i) => (
              <span key={`repeat-${i}`} className="text-3xl md:text-5xl font-black text-gray-200 uppercase">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsPartners;
