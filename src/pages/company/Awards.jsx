import React from 'react';
import { companyData } from '../../data/companyData';
import ServiceHero from '../../components/services/ServiceHero';
import TechStack from '../../components/services/TechStack';
import ServiceProcess from '../../components/services/ServiceProcess'; // Repurposed for timeline

const Awards = () => {
  const data = companyData.awards;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-[#F8F9FA] rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Timeline */}
      <ServiceProcess process={data.timeline.map(t => `${t.year}: ${t.event}`)} />

      {/* Categories & Certifications */}
      <TechStack items={data.categories} title="Award Categories" />
      <div className="pb-20">
        <TechStack items={data.certifications} title="Our Certifications" />
      </div>

      {/* Trophy Gallery */}
      <section className="py-20 px-6 md:px-12 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Trophy Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1589828135898-d1d8a11ed94b?q=80&w=400&auto=format&fit=crop" className="w-full h-64 object-cover rounded-xl shadow-sm" alt="Award 1" />
            <img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=400&auto=format&fit=crop" className="w-full h-64 object-cover rounded-xl shadow-sm" alt="Award 2" />
            <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=400&auto=format&fit=crop" className="w-full h-64 object-cover rounded-xl shadow-sm" alt="Award 3" />
            <img src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=400&auto=format&fit=crop" className="w-full h-64 object-cover rounded-xl shadow-sm" alt="Award 4" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
