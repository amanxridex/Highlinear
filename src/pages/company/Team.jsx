import React from 'react';
import { companyData } from '../../data/companyData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceCategories from '../../components/services/ServiceCategories'; // We can use this for Departments
import Testimonials from '../../components/home/Testimonials';

const Team = () => {
  const data = companyData.team;

  // Format departments to match ServiceCategories expected prop structure
  const formattedDepts = data.departments.map(dept => ({
    title: dept.name,
    items: dept.roles
  }));

  return (
    <div className="w-full">
      <ServiceHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageUrl={data.hero.imageUrl}
      />

      <section className="py-20 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Company Culture</h2>
          <p className="text-xl text-gray-600 leading-relaxed">{data.culture}</p>
        </div>
      </section>

      <ServiceCategories categories={formattedDepts} />

      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The brilliant minds turning blueprints into reality.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.members.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <img src={member.img} alt={member.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#FF5722] font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm">Exp: {member.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Life at Highlinear</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop" className="w-full h-48 object-cover rounded-xl shadow-sm" alt="Office" />
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop" className="w-full h-48 object-cover rounded-xl shadow-sm" alt="Team meeting" />
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop" className="w-full h-48 object-cover rounded-xl shadow-sm" alt="Site visit" />
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400&auto=format&fit=crop" className="w-full h-48 object-cover rounded-xl shadow-sm" alt="Celebration" />
          </div>
        </div>
      </section>

      <Testimonials />

      <div className="py-24 px-6 md:px-12 bg-[#FF5722] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-10 opacity-90">We are always looking for passionate people to join our growing family.</p>
          <button className="px-8 py-4 bg-white text-[#FF5722] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            View Career Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
