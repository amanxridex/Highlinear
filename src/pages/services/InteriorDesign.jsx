import React from 'react';
import { servicesData } from '../../data/servicesData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceCategories from '../../components/services/ServiceCategories';
import TechStack from '../../components/services/TechStack';
import IndustriesServed from '../../components/services/IndustriesServed';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceCTA from '../../components/services/ServiceCTA';
import ProjectGallery from '../../components/home/ProjectGallery';
import Testimonials from '../../components/home/Testimonials';

const InteriorDesign = () => {
  const data = servicesData.interiorDesign;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />
      <ServiceCategories categories={data.categories} />
      <TechStack items={data.styles} title="Design Styles" />
      <TechStack items={data.materials} title="Premium Materials" />
      <ProjectGallery />
      <IndustriesServed industries={data.industries} />
      <Testimonials />
      <ServiceFAQ />
      <ServiceCTA />
    </div>
  );
};

export default InteriorDesign;
