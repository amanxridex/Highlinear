import React from 'react';
import { companyData } from '../data/companyData';
import ServiceHero from '../components/services/ServiceHero';
import TechStack from '../components/services/TechStack';
import ServiceFAQ from '../components/services/ServiceFAQ';

const Contact = () => {
  const data = companyData.contact;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />

      {/* Contact Cards */}
      <section className="py-20 px-6 md:px-12 bg-[#F8F9FA] -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.cards.map((card, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#FF5722]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {card.icon === 'mail' && <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>}
                    {card.icon === 'help' && <><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></>}
                    {card.icon === 'users' && <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>}
                    {card.icon === 'camera' && <><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></>}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <a href={`mailto:${card.text}`} className="text-[#FF5722] hover:underline">{card.text}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form & Map */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#FF5722] outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#FF5722] outline-none" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#FF5722] outline-none" placeholder="Phone Number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#FF5722] outline-none" placeholder="Company Name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                <select className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#FF5722] outline-none text-gray-600">
                  <option>Select a service...</option>
                  <option>Construction</option>
                  <option>Architecture</option>
                  <option>Interior Design</option>
                  <option>Project Management</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#FF5722] outline-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-[#FF5722] text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* Locations & Map Placeholder */}
          <div className="lg:w-1/2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Offices</h2>
              <div className="space-y-8">
                {data.locations.map((loc, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-100 text-[#FF5722] rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{loc.name}</h4>
                      <p className="text-gray-600 mb-1">{loc.address}</p>
                      <p className="text-gray-600 font-medium">{loc.phone}</p>
                      <p className="text-gray-500 text-sm mt-2">{loc.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden relative border border-gray-200">
              {/* Interactive map placeholder */}
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Map" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-6 py-3 rounded-full shadow-lg font-bold text-gray-800">Interactive Map View</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechStack items={data.departments} title="Department Contacts" />

      {/* Schedule Meeting & Emergency */}
      <section className="py-20 px-6 md:px-12 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 text-white p-10 rounded-3xl text-center flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold mb-4">Emergency Support</h3>
            <p className="text-gray-400 mb-6">Available 24x7 for urgent site or structural issues.</p>
            <div className="text-3xl font-bold text-[#FF5722] bg-white px-8 py-4 rounded-xl shadow-lg">1-800-URGENT</div>
          </div>
          <div className="bg-white p-10 rounded-3xl text-center border border-gray-100 shadow-sm flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Schedule a Meeting</h3>
            <p className="text-gray-600 mb-6">Book an online consultation or an on-site visit with our experts.</p>
            <button className="px-8 py-4 bg-[#FF5722] text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg w-full max-w-xs">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      <ServiceFAQ />
    </div>
  );
};

export default Contact;
