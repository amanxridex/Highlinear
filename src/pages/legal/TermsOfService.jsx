import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last Updated: July 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and High-Linear Civil Private Limited ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Representations</h2>
              <p>
                By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prohibited Activities</h2>
              <p>
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
