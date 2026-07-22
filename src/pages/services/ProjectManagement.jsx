import React from 'react';
import { servicesData } from '../../data/servicesData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceCategories from '../../components/services/ServiceCategories';
import ServiceProcess from '../../components/services/ServiceProcess';
import TechStack from '../../components/services/TechStack';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceCTA from '../../components/services/ServiceCTA';
import Testimonials from '../../components/home/Testimonials';

const ProjectManagement = () => {
  const data = servicesData.projectManagement;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />
      <ServiceCategories categories={data.categories} />
      <ServiceProcess process={data.process} />
      <TechStack items={data.software} title="Software & Tools" />
      <TechStack items={data.kpis} title="Key Performance Indicators (KPIs)" />
      <Testimonials />
      <ServiceFAQ />
      <ServiceCTA />
    </div>
  );
};

export default ProjectManagement;
