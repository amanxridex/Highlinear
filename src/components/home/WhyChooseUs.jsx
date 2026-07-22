import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

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

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const imgScale = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#111827] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 relative"
        >
          <div className="space-y-4 pt-12">
            <motion.img variants={imgScale} src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop" className="rounded-[2rem] w-full h-64 object-cover shadow-2xl" alt="Construction detail" />
            <motion.img variants={imgScale} src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" className="rounded-[2rem] w-full h-48 object-cover shadow-2xl" alt="Workers" />
          </div>
          <div className="space-y-4">
            <motion.img variants={imgScale} src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" className="rounded-[2rem] w-full h-48 object-cover shadow-2xl" alt="Architecture" />
            <motion.img variants={imgScale} src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" className="rounded-[2rem] w-full h-64 object-cover shadow-2xl" alt="Office interior" />
          </div>
          {/* Orange Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%", rotate: -45 }}
            whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%", rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="absolute top-1/2 left-1/2 bg-[#FF5722] w-32 h-32 rounded-full border-8 border-[#111827] flex items-center justify-center flex-col shadow-xl z-10 origin-center"
          >
            <span className="text-3xl font-bold">100%</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Quality</span>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemFadeUp} className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-[#FF5722]"></div>
            <span className="font-bold text-gray-400 tracking-wider uppercase text-sm">Why Choose Us</span>
          </motion.div>
          <motion.h2 variants={itemFadeUp} className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            The Highlinear <br />Advantage
          </motion.h2>
          <motion.p variants={itemFadeUp} className="text-gray-400 text-lg leading-relaxed mb-10">
            We don't just build structures; we build trust. Our commitment to excellence ensures that every project we undertake is completed to the highest standards, on time, and within budget.
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
            {reasons.map((reason, i) => (
              <motion.div variants={itemFadeUp} key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#FF5722]" size={24} />
                <span className="font-semibold text-gray-200">{reason}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
