import React from 'react';

const Sustainability = () => {
  const points = [
    { title: "Green Building Practices", desc: "LEED certified structures that harmonize with nature." },
    { title: "Energy-Efficient Designs", desc: "Maximizing natural light and incorporating solar tech." },
    { title: "Waste Management", desc: "Rigorous recycling protocols on every construction site." },
    { title: "Water Conservation", desc: "Rainwater harvesting and advanced STP installations." },
    { title: "Eco-Friendly Materials", desc: "Using locally sourced, low-carbon footprint materials." },
    { title: "Carbon Footprint Reduction", desc: "Optimizing logistics to reduce emissions." }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-green-500"></div>
            <span className="font-bold text-green-400 tracking-wider uppercase text-sm">Sustainability</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Building for a <br/>Greener Tomorrow
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            We recognize our responsibility towards the planet. Highlinear is at the forefront of sustainable construction, ensuring that our progress today does not compromise the environment of tomorrow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, i) => (
              <div key={i} className="border-l-2 border-green-500 pl-4 py-1">
                <h4 className="font-bold text-gray-200 mb-1">{pt.title}</h4>
                <p className="text-sm text-gray-500">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 w-full h-[600px] relative">
          <img 
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=800&auto=format&fit=crop" 
            alt="Sustainable Building" 
            className="w-full h-full object-cover rounded-[3rem] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#111827] via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
