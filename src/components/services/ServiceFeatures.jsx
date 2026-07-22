import React from 'react';

const ServiceFeatures = ({ features, title = "Why Choose Us" }) => {
  if (!features || features.length === 0) return null;

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We combine expertise with dedication to deliver exceptional results.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FFF0EB] text-[#FF5722] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature}</h4>
                <p className="text-gray-500">Committed to maintaining the highest standard in every aspect of this feature.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
