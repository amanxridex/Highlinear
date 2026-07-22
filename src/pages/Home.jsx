import React from 'react';

// Import all sections
import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessTimeline from '../components/home/ProcessTimeline';
import StatsCounter from '../components/home/StatsCounter';
import ExpertiseSection from '../components/home/ExpertiseSection';
import ProjectGallery from '../components/home/ProjectGallery';
import Testimonials from '../components/home/Testimonials';
import SafetySustainability from '../components/home/SafetySustainability';
import AwardsSection from '../components/home/AwardsSection';
import NewsSection from '../components/home/NewsSection';
import FAQSection from '../components/home/FAQSection';
import CtaSection from '../components/home/CtaSection';

const Home = () => {
  return (
    <div className="w-full flex flex-col bg-white overflow-hidden">
      <Hero />
      <TrustedBy />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProcessTimeline />
      <StatsCounter />
      <ExpertiseSection />
      <ProjectGallery />
      <Testimonials />
      <SafetySustainability />
      <AwardsSection />
      <NewsSection />
      <FAQSection />
      <CtaSection />
    </div>
  );
};

export default Home;
