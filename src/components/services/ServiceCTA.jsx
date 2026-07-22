import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCTA = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FF5722] text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build with Confidence?</h2>
        <p className="text-xl opacity-90 mb-10">
          Let's discuss your next project. Our experts are ready to turn your vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="px-8 py-4 bg-white text-[#FF5722] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            Request a Consultation
          </Link>
          <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
            Get a Detailed Proposal
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
