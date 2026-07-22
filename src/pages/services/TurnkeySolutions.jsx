import React from 'react';
import { servicesData } from '../../data/servicesData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceCategories from '../../components/services/ServiceCategories';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceFeatures from '../../components/services/ServiceFeatures';
import IndustriesServed from '../../components/services/IndustriesServed';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceCTA from '../../components/services/ServiceCTA';
import ProjectGallery from '../../components/home/ProjectGallery';

const TurnkeySolutions = () => {
  const data = servicesData.turnkey;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />
      <section className="py-16 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">What is Turnkey?</h2>
          <p className="text-xl text-gray-600">{data.whatIsTurnkey}</p>
        </div>
      </section>
      <ServiceCategories categories={data.categories} />
      <ServiceProcess process={data.process} />
      <ServiceFeatures features={data.benefits} title="Benefits of Turnkey Solutions" />
      <ProjectGallery />
      <IndustriesServed industries={data.industries} />
      <ServiceFAQ />
      <ServiceCTA />
    </div>
  );
};

export default TurnkeySolutions;
