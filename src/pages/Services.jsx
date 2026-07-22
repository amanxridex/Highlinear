import React from 'react';

const Services = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA] min-h-[70vh]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF5722]">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What We Offer</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
             { title: "Tower Development", desc: "Process of tall building construction." },
             { title: "Urban Skyline Vision", desc: "Modern city infrastructure." },
             { title: "Concrete Structures", desc: "Solid and durable foundation." }
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow group border border-gray-100 overflow-hidden relative">
              <img src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop&sig=${i}`} className="w-full h-48 object-cover" alt={s.title}/>
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 w-12 h-12 bg-[#FF5722] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
