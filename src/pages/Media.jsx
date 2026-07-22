import React from 'react';
import { Link } from 'react-router-dom';
import { mediaData } from '../data/mediaData';

const Media = () => {
  const mediaSections = [
    { title: "News & Updates", slug: "news", desc: "Latest announcements and industry insights.", icon: "news", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" },
    { title: "Press Releases", slug: "press-releases", desc: "Official statements and financial updates.", icon: "press", img: "https://images.unsplash.com/photo-1497215848122-3301f84528bf?q=80&w=800&auto=format&fit=crop" },
    { title: "Photo Gallery", slug: "gallery", desc: "A visual journey of our completed and ongoing projects.", icon: "camera", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" },
    { title: "Video Center", slug: "videos", desc: "Project walkthroughs, drone tours, and time-lapses.", icon: "video", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1600&auto=format&fit=crop" alt="Media Center" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="uppercase tracking-widest text-sm font-bold text-[#FF5722] mb-4 block">Corporate Media</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Media Center</h1>
          <p className="text-xl text-gray-300">Your central hub for all news, announcements, and visual assets related to Highlinear.</p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 px-6 md:px-12 bg-[#F8F9FA] relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaSections.map((s, i) => (
              <div key={i} className="bg-white rounded-[2rem] shadow-lg hover:shadow-xl transition-shadow group border border-gray-100 overflow-hidden relative flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={s.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={s.title}/>
                  <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/20 transition-colors"></div>
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#FF5722] shadow-lg">
                    {s.icon === 'news' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>}
                    {s.icon === 'press' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>}
                    {s.icon === 'camera' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>}
                    {s.icon === 'video' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>}
                  </div>
                </div>
                <div className="p-8 relative flex-grow flex flex-col">
                  <Link to={`/media/${s.slug}`} className="absolute -top-6 right-8 w-12 h-12 bg-[#FF5722] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">{s.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6 flex-grow">{s.desc}</p>
                  <Link to={`/media/${s.slug}`} className="text-[#FF5722] font-bold hover:underline self-start">
                    Explore {s.title} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Media by the Numbers</h2>
          <p className="text-gray-400">Our extensive footprint across digital media channels.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {mediaData.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FF5722] mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-300 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Newsletter / Download CTA */}
      <section className="py-24 px-6 md:px-12 bg-white text-center border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Connected</h2>
          <p className="text-lg text-gray-600 mb-10">Subscribe to our media newsletter to get the latest press releases and project updates directly in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Enter your email address" className="px-6 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF5722] w-full max-w-sm" />
            <button type="button" className="px-8 py-4 bg-[#FF5722] text-white font-bold rounded-lg hover:bg-orange-600 transition-colors">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Media;
