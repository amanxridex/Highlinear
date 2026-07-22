import React from 'react';
import { mediaData } from '../../data/mediaData';
import ServiceHero from '../../components/services/ServiceHero';

const PressReleases = () => {
  const data = mediaData.pressReleases;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />

      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Main Content: Releases & Categories */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Press Releases</h2>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {data.categories.map((cat, idx) => (
                <button key={idx} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-[#FF5722] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              {data.releases.map(release => (
                <div key={release.id} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col sm:flex-row gap-8 items-start cursor-pointer">
                  <div className="shrink-0 w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-[#FF5722]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold text-[#FF5722] mb-2">{release.date}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF5722] transition-colors">{release.headline}</h3>
                    <p className="text-gray-600 mb-6">{release.summary}</p>
                    <div className="flex items-center gap-6">
                      <span className="text-sm font-bold text-gray-900 hover:text-[#FF5722] flex items-center gap-2">
                        Read Full Release <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </span>
                      <span className="text-sm font-bold text-gray-500 hover:text-gray-900 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg> Download PDF
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
                Load More Releases
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-10">
            
            {/* Press Kit */}
            <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5722]"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Media Kit
              </h3>
              <p className="text-gray-600 text-sm mb-6">Resources for journalists and media partners.</p>
              <ul className="space-y-3">
                {data.pressKit.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-[#FF5722] cursor-pointer group pb-2 border-b border-gray-200 last:border-0">
                    <span>{item}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 py-3 bg-gray-900 text-white text-sm font-bold rounded-lg hover:bg-[#FF5722] transition-colors">
                Download Complete Kit (ZIP)
              </button>
            </div>

            {/* Media Contact */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Media Contact</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900">{data.contact.name}</p>
                  <p className="text-sm text-[#FF5722]">{data.contact.role}</p>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {data.contact.phone}
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {data.contact.email}
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {data.contact.hours}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default PressReleases;
