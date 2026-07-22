import React from 'react';
import { Link as LinkIcon } from 'lucide-react';

const LeadershipTeam = () => {
  const leaders = [
    {
      name: "Rajiv Sharma",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      desc: "With over 30 years in construction, Rajiv drives the strategic vision of Highlinear."
    },
    {
      name: "Anand Verma",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
      desc: "Anand oversees all national operations and ensures financial and operational excellence."
    },
    {
      name: "Priya Patel",
      role: "Chief Architect",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      desc: "Leading the design division, Priya ensures our projects are both sustainable and iconic."
    },
    {
      name: "Vikram Singh",
      role: "Head of Projects",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      desc: "Vikram ensures that all field operations run smoothly, safely, and on schedule."
    }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF5722]">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Meet Our Directors</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, i) => (
            <div key={i} className="group">
              <div className="rounded-[2rem] overflow-hidden mb-6 h-80 relative">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors">
                    <LinkIcon size={20} />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-[#FF5722] font-bold text-sm uppercase tracking-wider mb-3">{leader.role}</p>
                <p className="text-gray-500 text-sm">{leader.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
