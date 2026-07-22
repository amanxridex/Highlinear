import React from 'react';
import { servicesData } from '../../data/servicesData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceCategories from '../../components/services/ServiceCategories';
import ServiceProcess from '../../components/services/ServiceProcess';
import IndustriesServed from '../../components/services/IndustriesServed';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceCTA from '../../components/services/ServiceCTA';
import ProjectGallery from '../../components/home/ProjectGallery';

const Renovation = () => {
  const data = servicesData.renovation;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />
      <ServiceCategories categories={data.categories} />
      <ServiceProcess process={data.process} />
      <ProjectGallery />
      <IndustriesServed industries={data.industries} />
      <ServiceFAQ />
      <ServiceCTA />
    </div>
  );
};

export default Renovation;
