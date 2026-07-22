import React from 'react';

const TechStack = ({ items, title = "Technology & Innovation" }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Leveraging the latest tools and methodologies for superior outcomes.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#F8F9FA] border border-gray-100 px-6 py-4 rounded-full font-medium text-gray-700 hover:border-[#FF5722] hover:text-[#FF5722] transition-colors cursor-default">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
