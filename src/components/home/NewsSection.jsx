import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const news = [
    { title: "Highlinear announces new 50-acre township in Pune", category: "Project Launch", date: "Oct 12, 2026", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop" },
    { title: "Our commitment to Net-Zero emissions by 2035", category: "Sustainability", date: "Sep 28, 2026", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" },
    { title: "Q3 Financial Results: Breaking industry records", category: "Company News", date: "Sep 15, 2026", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Latest Updates</h2>
          </div>
          <Link to="/news" className="text-[#FF5722] font-bold hover:text-orange-700 transition-colors hidden md:block">
            View All News →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="rounded-[2rem] overflow-hidden mb-6 h-64">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="text-[#FF5722] font-bold">{item.category}</span>
                <span>•</span>
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF5722] transition-colors line-clamp-2">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
