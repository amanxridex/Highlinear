import React from 'react';
import { servicesData } from '../../data/servicesData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceOverview from '../../components/services/ServiceOverview';
import ServiceCategories from '../../components/services/ServiceCategories';
import ServiceProcess from '../../components/services/ServiceProcess';
import TechStack from '../../components/services/TechStack';
import IndustriesServed from '../../components/services/IndustriesServed';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceCTA from '../../components/services/ServiceCTA';
import ProjectGallery from '../../components/home/ProjectGallery';

const Architecture = () => {
  const data = servicesData.architecture;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />
      <ServiceOverview overview={data.overview} />
      <ServiceCategories categories={data.categories} />
      <ServiceProcess process={data.process} />
      <TechStack items={data.styles} title="Design Styles" />
      <ProjectGallery />
      <IndustriesServed industries={data.industries} />
      <TechStack items={data.software} title="Software Used" />
      <ServiceFAQ />
      <ServiceCTA />
    </div>
  );
};

export default Architecture;
