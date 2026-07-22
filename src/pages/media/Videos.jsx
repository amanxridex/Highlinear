import React from 'react';
import { mediaData } from '../../data/mediaData';
import ServiceHero from '../../components/services/ServiceHero';

const Videos = () => {
  const data = mediaData.videos;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />

      {/* Featured Video */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-gray-900">
            <img src={data.featured.thumbnail} alt={data.featured.title} className="w-full h-[60vh] object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-[#FF5722] rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent p-8 md:p-12">
              <div className="flex items-center gap-4 text-white text-sm font-bold mb-4">
                <span className="bg-[#FF5722] px-4 py-1 rounded-full">Featured Film</span>
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {data.featured.duration}
                </span>
                <span>{data.featured.views}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{data.featured.title}</h2>
              <p className="text-xl text-gray-300 max-w-3xl">{data.featured.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid & Playlists */}
      <section className="py-20 px-6 md:px-12 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Videos</h2>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {data.categories.slice(0, 6).map((cat, idx) => (
                <button key={idx} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-[#FF5722] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                  {cat}
                </button>
              ))}
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
                + More
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.videoList.map(video => (
                <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col cursor-pointer">
                  <div className="relative overflow-hidden h-56 bg-gray-900">
                    <img src={video.img} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-[#FF5722] rounded-full flex items-center justify-center text-white shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                      </div>
                    </div>
                    <span className="absolute bottom-4 right-4 bg-gray-900/80 text-white text-xs font-bold px-2 py-1 rounded">{video.duration}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3 font-medium">
                      <span className="text-[#FF5722]">{video.category}</span>
                      <span>{video.views}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF5722] transition-colors line-clamp-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm flex-grow line-clamp-3">{video.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Playlists Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF5722]"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                Video Playlists
              </h3>
              <ul className="space-y-3">
                {data.playlists.map((pl, idx) => (
                  <li key={idx} className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-[#FF5722] cursor-pointer group pb-3 border-b border-gray-100 last:border-0">
                    <span>{pl}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Subscribe on YouTube</h4>
                <button className="w-full py-3 bg-[#FF0000] text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>
                  Highlinear Channel
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Videos;
