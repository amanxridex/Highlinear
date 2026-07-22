import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    "Experienced Team",
    "Premium Materials",
    "Timely Delivery",
    "Transparent Pricing",
    "Modern Technology",
    "Sustainable Construction",
    "Quality Assurance",
    "Safety Standards"
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="space-y-4 pt-12">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop" className="rounded-[2rem] w-full h-64 object-cover" alt="Construction detail" />
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=600&auto=format&fit=crop" className="rounded-[2rem] w-full h-48 object-cover" alt="Workers" />
          </div>
          <div className="space-y-4">
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" className="rounded-[2rem] w-full h-48 object-cover" alt="Architecture" />
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" className="rounded-[2rem] w-full h-64 object-cover" alt="Office interior" />
          </div>
          {/* Orange Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF5722] w-32 h-32 rounded-full border-8 border-[#111827] flex items-center justify-center flex-col shadow-xl z-10">
            <span className="text-3xl font-bold">100%</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Quality</span>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-[#FF5722]"></div>
            <span className="font-bold text-gray-400 tracking-wider uppercase text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            The Highlinear <br />Advantage
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            We don't just build structures; we build trust. Our commitment to excellence ensures that every project we undertake is completed to the highest standards, on time, and within budget.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
            {reasons.map((reason, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#FF5722]" size={24} />
                <span className="font-semibold text-gray-200">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
