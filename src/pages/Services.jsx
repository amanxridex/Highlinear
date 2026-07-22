import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const allServices = [
    { title: "Construction", slug: "construction", desc: "Premium civil and structural construction spanning residential, commercial, and industrial domains." },
    { title: "Architecture", slug: "architecture", desc: "Innovative, sustainable, and visionary architectural designs that inspire generations." },
    { title: "Interior Design", slug: "interior-design", desc: "Transforming internal spaces into aesthetic, highly functional works of art." },
    { title: "Project Management", slug: "project-management", desc: "Efficient end-to-end execution, ensuring on-time and within-budget delivery." },
    { title: "Renovation", slug: "renovation", desc: "Giving existing structures a new life with modern upgrades and structural enhancements." },
    { title: "Turnkey Solutions", slug: "turnkey", desc: "Hassle-free, comprehensive solutions handled by a single contractor from concept to handover." },
    { title: "Consultancy", slug: "consultancy", desc: "Expert guidance, feasibility studies, and strategic insights for successful projects." }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA] min-h-[70vh]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF5722]">Our Core Offerings</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Premium Services</h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Discover our comprehensive suite of solutions tailored to meet the highest industry standards. From concept to handover, we are your trusted partners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((s, i) => (
            <div key={i} className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow group border border-gray-100 overflow-hidden relative flex flex-col">
              <img src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop&sig=${i}`} className="w-full h-56 object-cover" alt={s.title}/>
              <div className="p-8 relative flex-grow flex flex-col">
                <Link to={`/services/${s.slug}`} className="absolute -top-6 right-8 w-12 h-12 bg-[#FF5722] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{s.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed mb-6 flex-grow">{s.desc}</p>
                <Link to={`/services/${s.slug}`} className="text-[#FF5722] font-bold hover:underline self-start">
                  Explore {s.title} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
