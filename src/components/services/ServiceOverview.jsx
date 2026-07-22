import React from 'react';

const ServiceOverview = ({ overview }) => {
  if (!overview) return null;

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Service Overview</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            {overview.philosophy}
          </p>
          {overview.experience && (
            <div className="inline-block bg-[#F8F9FA] px-6 py-4 rounded-xl border border-gray-100">
              <span className="block text-3xl font-bold text-[#FF5722]">{overview.experience}</span>
              <span className="text-gray-500 font-medium">Delivering Excellence</span>
            </div>
          )}
        </div>
        <div className="md:w-1/2 w-full">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
             <img src="https://images.unsplash.com/photo-1541888082416-a7ae8fc69b35?q=80&w=800&auto=format&fit=crop" alt="Overview" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
