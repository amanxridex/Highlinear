import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full px-6 md:px-12 py-12 md:py-20 lg:h-[85vh] flex flex-col lg:flex-row items-center bg-gradient-to-br from-orange-50 via-white to-white overflow-hidden">
        
        {/* Decorative Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-orange-50 rounded-full opacity-50 z-0 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[20px] border-orange-50 rounded-full opacity-50 z-0 pointer-events-none"></div>

        {/* Bottom Orange Slant */}
        <div className="absolute -bottom-20 -left-10 right-0 h-40 bg-[#FF5722] -skew-y-3 transform origin-bottom-left z-0"></div>

        {/* Left Content */}
        <div className="w-full lg:w-1/2 relative z-10 lg:pr-12">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 text-gray-900">
            Building Your<br />Dream Shape
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-lg mb-10 leading-relaxed">
            Construction is more than just bricks and mortar; it's about transforming ideas into reality. It's about creating spaces that inspire, connect, and uplift.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="bg-[#FF5722] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-colors inline-block">
              Start Your Project
            </Link>
            <a href="tel:+1234567890" className="bg-white border-2 border-gray-200 text-gray-900 px-8 py-3.5 rounded-full font-bold hover:border-gray-900 transition-colors flex items-center gap-2 shadow-sm inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Us Now
            </a>
          </div>
        </div>

        {/* Right Image/Worker */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative inline-block w-full max-w-3xl xl:max-w-4xl overflow-hidden rounded-[2.5rem] drop-shadow-2xl">
            <video 
              src="https://media.gettyimages.com/id/2149833172/video/architects-analyzing-blueprint-in-building-under-construction.mp4?s=mp4-640x640-gi&k=20&c=StHNJ-aitVv3uhlvZhJngZp85F9Zr-JSlcNpNbOSU4A=" 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-tr-[2rem] flex items-center gap-4 border border-white/20">
               <div className="w-10 h-10 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold">
                 ★
               </div>
               <div>
                 <div className="font-bold text-gray-900 text-lg">9,738+</div>
                 <div className="text-xs text-gray-500 font-medium">Total Buildings</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-scroll Gallery Section */}
      <section className="w-full py-16 bg-white overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900"><span className="text-[#FF5722]">CONSTRUCTION</span> DEVELOPMENT</h2>
        </div>
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {[
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
          ].map((src, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[400px] h-[300px] rounded-[1rem] overflow-hidden snap-center shrink-0 shadow-md group cursor-pointer border border-gray-200">
              <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
