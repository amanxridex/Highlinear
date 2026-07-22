import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Company from './pages/Company';
import Media from './pages/Media';
import Careers from './pages/Careers';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] text-gray-900 flex flex-col font-sans overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/media" element={<Media />} />
          <Route path="/careers" element={<Careers />} />
          {/* Catch-all for sub-pages pointing to their main section for now */}
          <Route path="/leadership" element={<Company />} />
          <Route path="/team" element={<Company />} />
          <Route path="/csr" element={<Company />} />
          <Route path="/awards" element={<Company />} />
          <Route path="/press-releases" element={<Media />} />
          <Route path="/gallery" element={<Media />} />
          <Route path="/videos" element={<Media />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
