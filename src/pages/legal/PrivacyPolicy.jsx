import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last Updated: July 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p>
                At High-Linear Civil Private Limited, we are committed to protecting your privacy. We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.
              </p>
              <p className="mt-4">
                The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p>
                We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To facilitate account creation and logon process.</li>
                <li>To send you marketing and promotional communications.</li>
                <li>To fulfill and manage your orders and project requests.</li>
                <li>To respond to legal requests and prevent harm.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contact Us</h2>
              <p>
                If you have questions or comments about this notice, you may email us at privacy@highlinear.com or by post to our corporate headquarters.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
