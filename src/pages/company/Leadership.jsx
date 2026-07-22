import React from 'react';
import { companyData } from '../../data/companyData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceProcess from '../../components/services/ServiceProcess'; // We can adapt this or use it for timeline
import TechStack from '../../components/services/TechStack';
import ServiceCTA from '../../components/services/ServiceCTA';

const Leadership = () => {
  const data = companyData.leadership;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />
      
      {/* Philosophy Section */}
      <section className="py-20 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{data.philosophy.title}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">{data.philosophy.desc}</p>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-20 px-6 md:px-12 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <img src={data.chairman.image} alt={data.chairman.name} className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Chairman's Message</h2>
            <h3 className="text-xl text-[#FF5722] font-semibold mb-6">{data.chairman.name}</h3>
            <blockquote className="text-xl text-gray-600 italic leading-relaxed border-l-4 border-[#FF5722] pl-6">
              "{data.chairman.message}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* MD's Message */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="md:w-1/3">
            <img src={data.md.image} alt={data.md.name} className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Managing Director's Vision</h2>
            <h3 className="text-xl text-[#FF5722] font-semibold mb-6">{data.md.name}</h3>
            <blockquote className="text-xl text-gray-600 italic leading-relaxed border-l-4 border-[#FF5722] pl-6">
              "{data.md.message}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-20 px-6 md:px-12 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Executive Leadership</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The strategic minds driving our global operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.executives.map((exec, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <img src={exec.img} alt={exec.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exec.name}</h3>
                  <p className="text-[#FF5722] font-semibold text-sm mb-4">{exec.role}</p>
                  <p className="text-gray-500 text-sm mb-2">{exec.qual} • {exec.exp}</p>
                  <p className="text-gray-600 text-sm">{exec.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline (Repurposing Process Component) */}
      <ServiceProcess process={data.timeline.map(t => `${t.year} - ${t.event}`)} />

      {/* Principles */}
      <TechStack items={data.principles} title="Leadership Principles" />

      {/* CTA */}
      <div className="py-24 px-6 md:px-12 bg-[#FF5722] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to Join Our Leadership Team?</h2>
          <button className="px-8 py-4 bg-white text-[#FF5722] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            Meet Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
