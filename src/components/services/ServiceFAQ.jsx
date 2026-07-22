import React, { useState } from 'react';

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How long does a typical project take?", a: "Project timelines vary greatly depending on the scope, scale, and specific requirements. We provide a detailed schedule during the planning phase." },
    { q: "Do you handle all necessary permits and approvals?", a: "Yes, our team manages all required documentation, permits, and regulatory approvals to ensure a hassle-free experience." },
    { q: "How do you ensure quality control?", a: "We have stringent quality assurance protocols at every stage, involving regular inspections by experienced site engineers and project managers." },
    { q: "Can we request changes during construction?", a: "While changes can impact timeline and budget, we maintain flexibility and have a structured change-order process to accommodate your requests." }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500">Find answers to common questions about our services.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                <span className={`transform transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4 bg-gray-50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
