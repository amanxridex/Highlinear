import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    { q: "How long does construction take?", a: "Timelines vary by scope. A residential villa might take 12-18 months, while large commercial projects take 2-4 years. We provide detailed Gantt charts before breaking ground." },
    { q: "Do you provide turnkey solutions?", a: "Yes, we handle everything from architectural design and permitting to civil construction and interior fit-outs." },
    { q: "Which cities do you operate in?", a: "We primarily operate across major Indian metros including Delhi-NCR, Mumbai, Pune, Bangalore, and Hyderabad, but are open to large-scale projects nationwide." },
    { q: "How can I request a quotation?", a: "You can click 'Book Consultation' in our menu, fill out the contact form, or call our toll-free number. We usually respond within 24 hours to schedule a site visit." }
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-gray-900 text-lg">{faq.q}</span>
                {open === i ? <ChevronUp className="text-[#FF5722]" /> : <ChevronDown className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-gray-600 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
