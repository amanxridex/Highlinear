import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import NewsIndex from './pages/News'; // Might be obsolete now, we'll route /news to Media
import Contact from './pages/Contact';
import ServicesIndex from './pages/Services'; // Will act as index
import Projects from './pages/Projects';
import Company from './pages/Company'; // Acts as index
import MediaIndex from './pages/Media'; // Acts as index
import Careers from './pages/Careers';

// Legal Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';

// Individual Service Pages
import Construction from './pages/services/Construction';
import Architecture from './pages/services/Architecture';
import InteriorDesign from './pages/services/InteriorDesign';
import Renovation from './pages/services/Renovation';
import Consultancy from './pages/services/Consultancy';
import ProjectManagement from './pages/services/ProjectManagement';
import TurnkeySolutions from './pages/services/TurnkeySolutions';

// Individual Corporate Pages
import Leadership from './pages/company/Leadership';
import Team from './pages/company/Team';
import CSR from './pages/company/CSR';
import Awards from './pages/company/Awards';

// Individual Media Pages
import News from './pages/media/News';
import PressReleases from './pages/media/PressReleases';
import Gallery from './pages/media/Gallery';
import Videos from './pages/media/Videos';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] text-gray-900 flex flex-col font-sans">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} /> {/* Overrides old NewsIndex */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/architecture" element={<Architecture />} />
          <Route path="/services/interior-design" element={<InteriorDesign />} />
          <Route path="/services/renovation" element={<Renovation />} />
          <Route path="/services/consultancy" element={<Consultancy />} />
          <Route path="/services/project-management" element={<ProjectManagement />} />
          <Route path="/services/turnkey" element={<TurnkeySolutions />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Corporate / Company Routes */}
          <Route path="/company" element={<Company />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/team" element={<Team />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/awards" element={<Awards />} />

          {/* Media Routes */}
          <Route path="/media" element={<MediaIndex />} />
          <Route path="/media/news" element={<News />} />
          <Route path="/media/press-releases" element={<PressReleases />} />
          <Route path="/media/gallery" element={<Gallery />} />
          <Route path="/media/videos" element={<Videos />} />
          
          {/* Legal Routes */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookie" element={<CookiePolicy />} />
          
          {/* Redirect old routes */}
          <Route path="/press-releases" element={<PressReleases />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
