import React, { useState } from 'react';
import { mediaData } from '../../data/mediaData';
import ServiceHero from '../../components/services/ServiceHero';

const Gallery = () => {
  const data = mediaData.gallery;
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = activeFilter === "All" 
    ? data.images 
    : data.images.filter(img => img.category === activeFilter);

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />

      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {data.categories.map((cat, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeFilter === cat 
                    ? 'bg-[#FF5722] text-white shadow-lg scale-105' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-[#FF5722] hover:text-[#FF5722]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map(item => (
              <div key={item.id} className="relative rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid">
                <img src={item.img} alt={item.title} className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#FF5722] font-bold text-sm mb-1">{item.category}</span>
                  <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {item.location}
                  </p>
                  <div className="flex items-center text-white font-bold text-sm hover:text-[#FF5722] transition-colors">
                    View Gallery <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
             <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-[#FF5722] transition-colors shadow-lg flex items-center gap-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download Full Media Kit
              </button>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Gallery;
