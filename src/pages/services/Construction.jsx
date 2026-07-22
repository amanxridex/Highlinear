import React from 'react';
import { servicesData } from '../../data/servicesData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceOverview from '../../components/services/ServiceOverview';
import ServiceCategories from '../../components/services/ServiceCategories';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceFeatures from '../../components/services/ServiceFeatures';
import TechStack from '../../components/services/TechStack';
import IndustriesServed from '../../components/services/IndustriesServed';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceCTA from '../../components/services/ServiceCTA';
import ProjectGallery from '../../components/home/ProjectGallery';

const Construction = () => {
  const data = servicesData.construction;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        videoUrl={data.hero.videoUrl}
      />
      <ServiceOverview overview={data.overview} />
      <ServiceFeatures features={data.whyChooseUs} title="Why Choose Us" />
      <ServiceCategories categories={data.categories} />
      <ServiceProcess process={data.process} />
      <ProjectGallery />
      <IndustriesServed industries={data.industries} />
      <TechStack items={data.tech} title="Technology Used" />
      <TechStack items={data.equipment} title="Construction Equipment" />
      <ServiceFAQ />
      <ServiceCTA />
    </div>
  );
};

export default Construction;
