import React from 'react';

const ServiceCategories = ({ categories }) => {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="py-20 px-6 md:px-12 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive solutions tailored to meet the highest industry standards.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-[#FF5722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
