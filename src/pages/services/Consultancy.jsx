import React from 'react';
import { servicesData } from '../../data/servicesData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceCategories from '../../components/services/ServiceCategories';
import ServiceProcess from '../../components/services/ServiceProcess';
import TechStack from '../../components/services/TechStack';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceCTA from '../../components/services/ServiceCTA';

const Consultancy = () => {
  const data = servicesData.consultancy;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />
      <ServiceCategories categories={data.categories} />
      <TechStack items={data.whoWeHelp} title="Who We Help" />
      <ServiceProcess process={data.process} />
      <TechStack items={data.experts} title="Our Experts" />
      <ServiceFAQ />
      <ServiceCTA />
    </div>
  );
};

export default Consultancy;
