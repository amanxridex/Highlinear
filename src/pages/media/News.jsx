import React from 'react';
import { mediaData } from '../../data/mediaData';
import ServiceHero from '../../components/services/ServiceHero';

const News = () => {
  const data = mediaData.news;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />

      {/* Featured News */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <img src={data.featured.image} alt={data.featured.title} className="w-full h-[60vh] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <span className="bg-[#FF5722] text-white px-4 py-1 rounded-full text-sm font-bold w-max mb-4">Featured Story</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{data.featured.title}</h2>
              <p className="text-xl text-gray-200 mb-6">{data.featured.subtitle}</p>
              <div className="flex items-center text-[#FF5722] font-bold group-hover:text-white transition-colors">
                Read Full Story <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Main Content: Categories & Grid */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {data.categories.map((cat, idx) => (
                <button key={idx} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-[#FF5722] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.articles.map(article => (
                <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col cursor-pointer">
                  <div className="relative overflow-hidden h-48">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-white/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">{article.category}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>By {article.author}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF5722] transition-colors">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">{article.desc}</p>
                    <div className="text-[#FF5722] font-bold text-sm">Read More →</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Articles</h3>
              <ul className="space-y-4">
                {data.sidebar.popular.map((title, idx) => (
                  <li key={idx} className="group cursor-pointer">
                    <div className="text-[#FF5722] text-sm font-bold mb-1">0{idx + 1}</div>
                    <p className="text-gray-700 font-medium group-hover:text-[#FF5722] transition-colors leading-snug">{title}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl shadow-sm text-white text-center">
              <div className="w-16 h-16 bg-[#FF5722] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-6">Subscribe to get the latest construction news and updates directly in your inbox.</p>
              <form className="space-y-4">
                <input type="email" placeholder="Your Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#FF5722]" />
                <button type="button" className="w-full py-3 bg-[#FF5722] text-white font-bold rounded-lg hover:bg-orange-600 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default News;
