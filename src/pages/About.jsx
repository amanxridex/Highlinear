import React from 'react';

// About specific components
import AboutHero from '../components/about/AboutHero';
import CompanyOverview from '../components/about/CompanyOverview';
import OurStory from '../components/about/OurStory';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import LeadershipTeam from '../components/about/LeadershipTeam';
import OurTeam from '../components/about/OurTeam';
import TechnologyInnovation from '../components/about/TechnologyInnovation';
import QualityAssurance from '../components/about/QualityAssurance';
import SafetyCommitment from '../components/about/SafetyCommitment';
import Sustainability from '../components/about/Sustainability';
import ClientsPartners from '../components/about/ClientsPartners';
import CsrInitiatives from '../components/about/CsrInitiatives';

// Reused Home components
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessTimeline from '../components/home/ProcessTimeline';
import StatsCounter from '../components/home/StatsCounter';
import AwardsSection from '../components/home/AwardsSection';
import Testimonials from '../components/home/Testimonials';
import FAQSection from '../components/home/FAQSection';
import CtaSection from '../components/home/CtaSection';

const About = () => {
  return (
    <div className="w-full flex flex-col bg-white overflow-hidden">
      <AboutHero />
      <CompanyOverview />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <WhyChooseUs />
      <LeadershipTeam />
      <OurTeam />
      <StatsCounter />
      <ProcessTimeline />
      <TechnologyInnovation />
      <QualityAssurance />
      <SafetyCommitment />
      <Sustainability />
      <AwardsSection />
      <ClientsPartners />
      <Testimonials />
      <CsrInitiatives />
      <FAQSection />
      <CtaSection />
    </div>
  );
};

export default About;
