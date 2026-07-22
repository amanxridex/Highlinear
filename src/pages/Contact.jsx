import React from 'react';

const Contact = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA] min-h-[70vh]">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        <div className="w-full md:w-1/2 p-12 md:p-16 bg-[#FF5722] text-white relative">
          <h2 className="text-4xl font-bold mb-6">Few General Questions</h2>
          <p className="text-white/80 mb-12">Get in touch with our team to discuss your next big project.</p>
          <div className="space-y-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white/10 rounded-xl p-4 cursor-pointer hover:bg-white/20 transition-colors">
                <h4 className="font-bold flex justify-between items-center">
                  What is included in an estimate?
                  <span>+</span>
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center bg-white">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Send a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF5722] transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF5722] transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF5722] transition-all" />
            </div>
            <button type="button" className="w-full bg-[#111827] text-white rounded-xl px-4 py-4 font-bold hover:bg-[#FF5722] transition-colors shadow-lg">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
