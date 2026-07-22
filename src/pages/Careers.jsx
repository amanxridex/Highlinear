import React from 'react';
import { companyData } from '../data/companyData';
import ServiceHero from '../components/services/ServiceHero';
import TechStack from '../components/services/TechStack';
import ServiceProcess from '../components/services/ServiceProcess'; // Repurposed for recruitment process
import Testimonials from '../components/home/Testimonials';

const Careers = () => {
  const data = companyData.careers;

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />

      <TechStack items={data.whyJoinUs} title="Why Join Highlinear?" />
      
      <div className="pb-20">
        <TechStack items={data.benefits} title="Employee Benefits" />
      </div>

      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Find your next big opportunity with us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.openings.map((job, idx) => (
              <div key={idx} className="p-8 bg-[#F8F9FA] rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.position}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                    <span className="bg-white px-3 py-1 rounded-full border border-gray-200">{job.dept}</span>
                    <span className="bg-white px-3 py-1 rounded-full border border-gray-200">{job.location}</span>
                    <span className="bg-white px-3 py-1 rounded-full border border-gray-200">{job.exp}</span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-[#FF5722] text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gray-50 pt-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recruitment Process</h2>
        </div>
        <ServiceProcess process={data.process} />
      </div>

      <TechStack items={data.internships} title="Internship & Graduate Programs" />
      
      <Testimonials />

      {/* Upload Resume Form */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto bg-[#F8F9FA] p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't see a matching role?</h2>
            <p className="text-gray-600">Upload your resume, and we'll keep you in mind for future opportunities.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF5722] outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF5722] outline-none" placeholder="john@example.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF5722] outline-none" placeholder="+1 234 567 8900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Desired Position</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF5722] outline-none" placeholder="E.g., Site Engineer" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter / Message</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF5722] outline-none" placeholder="Tell us about yourself..."></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume (PDF, DOCX)</label>
              <input type="file" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white" />
            </div>
            <button type="button" className="w-full py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-[#FF5722] transition-colors">
              Submit Application
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Careers;
