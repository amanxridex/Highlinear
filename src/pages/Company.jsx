import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
  const companySections = [
    { title: "Leadership", slug: "leadership", desc: "Meet the visionaries driving our commitment to excellence.", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" },
    { title: "Our Team", slug: "team", desc: "The diverse experts behind every successful Highlinear project.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" },
    { title: "CSR", slug: "csr", desc: "Building better communities through sustainable social initiatives.", img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop" },
    { title: "Awards & Recognition", slug: "awards", desc: "Celebrating our commitment to quality, safety, and innovation.", img: "https://images.unsplash.com/photo-1589828135898-d1d8a11ed94b?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA] min-h-[70vh]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF5722]">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Company Overview</h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Discover the people, the philosophy, and the recognition that make Highlinear a leader in the global construction industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companySections.map((s, i) => (
            <div key={i} className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow group border border-gray-100 overflow-hidden relative flex flex-col">
              <img src={s.img} className="w-full h-64 object-cover" alt={s.title}/>
              <div className="p-8 relative flex-grow flex flex-col">
                <Link to={`/${s.slug}`} className="absolute -top-6 right-8 w-12 h-12 bg-[#FF5722] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <h3 className="text-3xl font-bold mb-3 text-gray-900">{s.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6 flex-grow">{s.desc}</p>
                <Link to={`/${s.slug}`} className="text-[#FF5722] font-bold hover:underline self-start">
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

export default Company;
