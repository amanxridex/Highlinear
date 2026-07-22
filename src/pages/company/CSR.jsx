import React from 'react';
import { companyData } from '../../data/companyData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceCategories from '../../components/services/ServiceCategories';
import ProjectGallery from '../../components/home/ProjectGallery'; // Using for CSR Gallery

const CSR = () => {
  const data = companyData.csr;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />

      <section className="py-20 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our CSR Philosophy</h2>
          <p className="text-xl text-gray-600 leading-relaxed">{data.philosophy}</p>
        </div>
      </section>

      <ServiceCategories categories={data.focusAreas} />

      <section className="py-24 px-6 md:px-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact Statistics</h2>
            <p className="text-gray-400">Measuring the difference we make every day.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#FF5722] mb-2">{stat.value}</div>
                <div className="text-xl text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">CSR Gallery</h2>
        <ProjectGallery />
      </div>

      <div className="py-24 px-6 md:px-12 bg-[#FF5722] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl mb-10 opacity-90">Together we can create a lasting positive impact on our communities.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-[#FF5722] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get in Touch
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              Download Annual CSR Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSR;
