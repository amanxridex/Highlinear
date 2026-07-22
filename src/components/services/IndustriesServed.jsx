import React from 'react';

const IndustriesServed = ({ industries }) => {
  if (!industries || industries.length === 0) return null;

  return (
    <section className="py-20 px-6 md:px-12 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">Delivering customized solutions across diverse sectors.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-800 hover:shadow-md hover:border-[#FF5722] transition-all">
              {ind}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
