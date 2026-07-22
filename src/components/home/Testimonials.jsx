import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Highlinear delivered our commercial project before the deadline with exceptional quality. Their attention to detail is unmatched.",
      name: "Rajesh Kumar",
      role: "CEO, Horizon Tech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      text: "The residential township they built for us exceeded all expectations. True professionals from planning to handover.",
      name: "Anjali Desai",
      role: "Director, Urban Spaces",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      text: "Safety, quality, and transparency. Highlinear brings a level of trust that is rare in the construction industry.",
      name: "Vikram Singh",
      role: "Head of Infrastructure, State Govt.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
        </div>

        <div className="relative bg-orange-50 rounded-[3rem] p-8 md:p-16">
          <Quote size={80} className="text-[#FF5722] opacity-10 absolute top-8 left-8" />
          
          <div className="relative h-64 flex items-center justify-center text-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-3xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex text-[#FF5722]">
                    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                  </div>
                </div>
                <p className="text-xl md:text-3xl text-gray-800 font-medium leading-relaxed mb-8">
                  "{testimonials[current].text}"
                </p>
                <div className="flex flex-col items-center">
                  <img src={testimonials[current].image} alt={testimonials[current].name} className="w-16 h-16 rounded-full object-cover mb-3" />
                  <h4 className="font-bold text-gray-900">{testimonials[current].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#FF5722] transition-colors z-10 hidden md:flex">
            <ChevronLeft />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#FF5722] transition-colors z-10 hidden md:flex">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
