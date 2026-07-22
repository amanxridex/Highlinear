import React from 'react';

function App() {
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0F0F11] text-white flex flex-col font-sans overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-6 bg-[#0F0F11]/80 backdrop-blur-md shadow-sm z-50 sticky top-0 border-b border-white/5">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/HIGHLLINEAROFFLOGO.png" 
              alt="Highlinear Logo" 
              className="h-12 md:h-14 object-contain"
            />
          </a>
          
          {/* Links */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
            <a href="#" className="hover:text-[#d4af37] transition-colors">Demos</a>
            <a href="#about" className="hover:text-[#d4af37] transition-colors">About Us</a>
            <a href="#services" className="hover:text-[#d4af37] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#d4af37] transition-colors">Projects</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">News</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block text-sm font-medium">
            <span className="text-gray-400">Call Us: </span>
            <span className="text-white">+(084) 123 - 456 88</span>
          </div>
          <button className="bg-[#d4af37] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-md">
            Get In Touch
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row w-full p-4 lg:p-6 gap-6 h-[calc(100vh-88px)]">
        {/* Left Image Panel */}
        <div className="w-full lg:w-[45%] h-[50vh] lg:h-full rounded-[2rem] overflow-hidden relative shadow-lg">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfrgZ7NW2Sih2K44L-UYH4twP0P_LjVw0RiMnUVClABduUtMZeSOkWxg&s=10" 
            alt="Modern Construction Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Right Content Panel */}
        <div className="w-full lg:w-[55%] h-full flex flex-col justify-center px-4 lg:px-16 py-12 relative">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-8 text-white">
              A new<br />standard of<br />excellence
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-md mb-12 leading-relaxed">
              The premier civil construction firm specializing in government contracts and infrastructure worldwide.
            </p>
            
            <a href="#services" className="inline-flex items-center gap-4 group cursor-pointer">
              <div className="bg-[#1A1A1D] px-6 py-3 rounded-full border border-white/10 font-medium text-sm group-hover:border-[#d4af37]/50 group-hover:shadow-md transition-all">
                View All Services
              </div>
              <div className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center text-white group-hover:bg-black transition-colors shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </div>
            </a>
          </div>

          {/* Bottom Stats & Watch Video */}
          <div className="mt-auto pt-16 flex flex-col sm:flex-row items-center justify-between w-full">
            {/* 40 Years Experience */}
            <div className="flex items-center gap-4 mb-6 sm:mb-0">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#d4af37] rounded-full opacity-30 -translate-x-2"></div>
                <span className="text-5xl font-bold relative z-10">40</span>
              </div>
              <div className="font-semibold text-sm leading-tight text-gray-300">
                years of<br />experiences
              </div>
            </div>

            {/* Watch Video Button */}
            <button className="relative w-40 h-16 rounded-full overflow-hidden group shadow-lg">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORftPi0TkcDnBacwDg4wOkIRFFW75zOAuprhuXF5iTojRju17ZKInibqv&s=10" 
                alt="Cityscape" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center gap-2 text-white">
                <span className="text-sm font-medium z-10">Watch</span>
                <div className="w-5 h-5 flex items-center justify-center z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-24 px-6 md:px-12 bg-[#0F0F11]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://media.istockphoto.com/id/1911777007/photo/team-of-construction-engineers-wearing-vest-and-helmet-safety-discussing-project-at.jpg?s=612x612&w=0&k=20&c=vTTKve1PfollEhw6K6ncM1eQYevHFeX1wRqiGv9uG18=" 
                alt="Construction Team" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#d4af37] text-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
              <h3 className="text-2xl font-bold mb-2">Quality & Trust</h3>
              <p className="text-sm opacity-90 leading-relaxed">Delivering world-class infrastructure projects with uncompromising quality standards.</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#d4af37]"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-[#d4af37]">About Highlinear</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">We build the foundation of tomorrow</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              High-Linear Civil Private Limited is a trusted provider of construction services for government contracts, commercial infrastructure, and premium interior design. 
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Our team has extensive experience working with government entities, and we understand the unique challenges that these projects can present. We are well-versed in regulatory and compliance requirements, ensuring that each project is executed efficiently and effectively.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#d4af37] hover:text-white transition-colors inline-flex items-center gap-3">
              Learn More About Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-24 px-6 md:px-12 bg-[#1A1A1D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#d4af37]"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-[#d4af37]">Our Expertise</span>
              <div className="w-12 h-[2px] bg-[#d4af37]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Services We Offer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[#0F0F11] p-10 rounded-[2rem] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-shadow group border border-white/5 hover:border-[#d4af37]/30">
              <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-8 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Government Contracts</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Specialized in executing complex public sector projects, ensuring strict adherence to regulations, budgets, and timelines for local and federal agencies.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-[#d4af37] transition-colors">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[#0F0F11] p-10 rounded-[2rem] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-shadow group border border-white/5 hover:border-[#d4af37]/30">
              <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-8 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"/><path d="M17 2v20"/><path d="M7 2v20"/><path d="M17 6H7"/><path d="M17 10H7"/><path d="M17 14H7"/><path d="M17 18H7"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Building Construction</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                End-to-end commercial and residential construction services, utilizing cutting-edge technology and robust quality management systems.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-[#d4af37] transition-colors">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[#0F0F11] p-10 rounded-[2rem] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-shadow group border border-white/5 hover:border-[#d4af37]/30">
              <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-8 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Interior Designing</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Premium interior design solutions that blend aesthetics with functionality, creating spaces that inspire and elevate the human experience.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-[#d4af37] transition-colors">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-scroll Gallery Section */}
      <section className="w-full py-16 bg-[#1A1A1D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#d4af37]"></div>
            <span className="uppercase tracking-widest text-sm font-bold text-[#d4af37]">Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Project Spotlights</h2>
        </div>
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {[
            "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
          ].map((src, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[450px] h-[300px] md:h-[350px] rounded-[2rem] overflow-hidden snap-center shrink-0 shadow-lg border border-white/10 group cursor-pointer">
              <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="w-full py-24 px-6 md:px-12 bg-[#0F0F11]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-[#d4af37]"></div>
                <span className="uppercase tracking-widest text-sm font-bold text-[#d4af37]">Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            </div>
            <button className="bg-transparent border-2 border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors">
              View All Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="group relative rounded-3xl overflow-hidden h-[400px] md:h-[600px] md:col-span-2 shadow-lg">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" alt="Govt Bridge Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <div className="bg-[#d4af37] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Govt Contract</div>
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">Metropolitan Suspension Bridge</h3>
                <p className="text-gray-300">Infrastructure development for the Department of Transportation.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative rounded-3xl overflow-hidden h-[400px] shadow-lg">
              <img src="https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=2080&auto=format&fit=crop" alt="Commercial Complex" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-white/20 backdrop-blur-sm text-white border border-white/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Building Construction</div>
                <h3 className="text-white text-2xl font-bold mb-2">Nexus Corporate Tower</h3>
                <p className="text-gray-300 text-sm">45-story commercial complex in downtown.</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative rounded-3xl overflow-hidden h-[400px] shadow-lg">
              <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2027&auto=format&fit=crop" alt="Interior Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-white/20 backdrop-blur-sm text-white border border-white/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Interior Design</div>
                <h3 className="text-white text-2xl font-bold mb-2">Lumina Executive Suites</h3>
                <p className="text-gray-300 text-sm">Premium interior fit-out for luxury hospitality client.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 bg-black text-white px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-800 relative z-10">
          <div className="text-center px-4">
            <h3 className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-2">40+</h3>
            <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">Years Experience</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-2">350</h3>
            <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">Projects Completed</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-2">120</h3>
            <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">Govt Contracts</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-2">15</h3>
            <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">Awards Won</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-24 px-6 md:px-12 bg-[#1A1A1D]">
        <div className="max-w-7xl mx-auto bg-[#0F0F11] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/5">
          <div className="w-full md:w-1/2 p-12 md:p-20 bg-black text-white relative overflow-hidden">
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#d4af37] rounded-full opacity-20 blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Let's build something great together.</h2>
            <p className="text-gray-400 mb-12 relative z-10">Get in touch with our team to discuss your next big project.</p>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <p className="text-gray-400">+(084) 123 - 456 88</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37]"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <p className="text-gray-400">contact@highlinear.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4af37]"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Office Location</h4>
                  <p className="text-gray-400">Via Alessandro Volta 25,<br/>Como, Lombardy, Italy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-8 text-white">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-[#1A1A1D] border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all placeholder:text-gray-600" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-[#1A1A1D] border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all placeholder:text-gray-600" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#1A1A1D] border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all placeholder:text-gray-600" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows="4" className="w-full bg-[#1A1A1D] border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all placeholder:text-gray-600" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full bg-[#d4af37] text-white rounded-xl px-4 py-4 font-bold text-lg hover:bg-black transition-colors shadow-lg shadow-[#d4af37]/30">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-white pt-20 pb-10 px-6 md:px-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <img src="/HIGHLLINEAROFFLOGO.png" alt="Highlinear Logo" className="h-16 md:h-20 mb-8 object-contain" />
              <p className="text-gray-400 leading-relaxed text-sm">
                The premier civil construction firm specializing in government contracts, building construction, and interior design globally.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-[#d4af37]">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-[#d4af37]">Services</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Government Contracts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial Building</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Residential Construction</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Interior Design</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-[#d4af37]">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates on our latest projects and industry news.</p>
              <div className="flex bg-white/5 rounded-full p-1 border border-gray-800">
                <input type="email" placeholder="Your Email Address" className="bg-transparent text-white px-4 py-2 text-sm focus:outline-none w-full" />
                <button className="bg-[#d4af37] rounded-full w-10 h-10 flex items-center justify-center shrink-0 hover:bg-white hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} High-Linear Civil Private Limited. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
