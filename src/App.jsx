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
    <div className="min-h-screen w-full bg-[#FAFAFA] text-gray-900 flex flex-col font-sans overflow-x-hidden">
      
      {/* Top Bar Marquee */}
      <div className="w-full bg-white border-b border-gray-100 overflow-hidden py-3 px-4 hidden md:block relative">
        <div className="flex whitespace-nowrap text-xs font-medium animate-marquee w-max">
          {/* First Set */}
          <span className="text-[#FF5722] mx-4">Strengthening Communities</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-gray-500 mx-4">Transforming Lives with Excellence in Construction</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-gray-500 mx-4">Your Trusted Partner for Construction Excellence</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-[#FF5722] mx-4">Building Landmarks and Strengthening Communities</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-gray-500 mx-4">Transforming Lives</span>
          <span className="text-gray-300 mx-4">|</span>
          
          {/* Duplicate Set for Seamless Loop */}
          <span className="text-[#FF5722] mx-4">Strengthening Communities</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-gray-500 mx-4">Transforming Lives with Excellence in Construction</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-gray-500 mx-4">Your Trusted Partner for Construction Excellence</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-[#FF5722] mx-4">Building Landmarks and Strengthening Communities</span>
          <span className="text-gray-300 mx-4">|</span>
          <span className="text-gray-500 mx-4">Transforming Lives</span>
          <span className="text-gray-300 mx-4">|</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-5 bg-white shadow-sm z-50 sticky top-0">
        {/* Logo */}
        <div className="w-[250px]">
          <a href="#" className="flex items-center">
            <img 
              src="/HIGHLLINEAROFFLOGO.png" 
              alt="Highlinear Logo" 
              className="h-14 md:h-16 object-contain"
            />
          </a>
        </div>
        
        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 font-semibold text-sm text-gray-800">
          <a href="#about" className="hover:text-[#FF5722] transition-colors">About</a>
          <a href="#news" className="hover:text-[#FF5722] transition-colors">News</a>
          <a href="#contact" className="hover:text-[#FF5722] transition-colors">Contact</a>
          <a href="#pages" className="hover:text-[#FF5722] transition-colors flex items-center gap-1">Pages <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg></a>
        </div>

        {/* Right Nav */}
        <div className="w-[200px] flex justify-end items-center">
          <button className="bg-[#FF5722] text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20">
            Get In Touch
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full px-6 md:px-12 py-12 md:py-20 lg:h-[85vh] flex flex-col lg:flex-row items-center bg-gradient-to-br from-orange-50 via-white to-white overflow-hidden">
        
        {/* Decorative Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-orange-50 rounded-full opacity-50 z-0 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[20px] border-orange-50 rounded-full opacity-50 z-0 pointer-events-none"></div>

        {/* Bottom Orange Slant */}
        <div className="absolute -bottom-20 -left-10 right-0 h-40 bg-[#FF5722] -skew-y-3 transform origin-bottom-left z-0"></div>

        {/* Left Content */}
        <div className="w-full lg:w-1/2 relative z-10 lg:pr-12">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 text-gray-900">
            Building Your<br />Dream Shape
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-lg mb-10 leading-relaxed">
            Construction is more than just bricks and mortar; it's about transforming ideas into reality. It's about creating spaces that inspire, connect, and uplift.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-[#FF5722] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-colors">
              Start Your Project
            </button>
            <button className="bg-white border-2 border-gray-200 text-gray-900 px-8 py-3.5 rounded-full font-bold hover:border-gray-900 transition-colors flex items-center gap-2 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Us Now
            </button>
          </div>
        </div>

        {/* Right Image/Worker */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative inline-block w-full max-w-3xl xl:max-w-4xl">
            <video 
              src="https://media.gettyimages.com/id/2149833172/video/architects-analyzing-blueprint-in-building-under-construction.mp4?s=mp4-640x640-gi&k=20&c=StHNJ-aitVv3uhlvZhJngZp85F9Zr-JSlcNpNbOSU4A=" 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[300px] md:h-[400px] object-cover drop-shadow-2xl rounded-[2.5rem]"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-8 -left-6 md:bottom-12 md:-left-12 bg-white/95 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-full shadow-2xl flex items-center gap-4 border border-white/20">
               <div className="w-10 h-10 rounded-full bg-[#FF5722] text-white flex items-center justify-center font-bold">
                 ★
               </div>
               <div>
                 <div className="font-bold text-gray-900 text-lg">9,738+</div>
                 <div className="text-xs text-gray-500 font-medium">Total Buildings</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Orange frame styling */}
            <div className="absolute -inset-4 border-2 border-[#FF5722] rounded-[2rem] z-0 rounded-tr-none rounded-bl-none"></div>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                alt="Construction Team" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-[#FF5722] text-white p-6 rounded-tr-3xl">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-sm font-medium">Years Of Experience</div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-[#FF5722]"></div>
              <span className="font-bold text-gray-800">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
              Our Reputation is as<br />Solid as Concrete
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              The project timeline will vary depending on the scope and complexity of the work. We will provide you with a realistic timeline during the initial consultation and keep you updated.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-[#FF5722]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Results For You</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit. Eget rutrum sit ut egestas ipsum.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-[#FF5722]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Real Estate Gets Real</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit. Eget rutrum sit ut egestas ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="uppercase tracking-widest text-sm font-bold text-[#FF5722]">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What We Offer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
               { title: "Tower Development", desc: "Process of tall building construction." },
               { title: "Urban Skyline Vision", desc: "Modern city infrastructure." },
               { title: "Concrete Structures", desc: "Solid and durable foundation." }
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow group border border-gray-100 overflow-hidden relative">
                <img src={`https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800&auto=format&fit=crop&sig=${i}`} className="w-full h-48 object-cover" alt={s.title}/>
                <div className="p-8 relative">
                  <div className="absolute -top-6 right-8 w-12 h-12 bg-[#FF5722] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto-scroll Gallery Section */}
      <section className="w-full py-16 bg-white overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900"><span className="text-[#FF5722]">CONSTRUCTION</span> DEVELOPMENT</h2>
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
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
          ].map((src, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[400px] h-[300px] rounded-[1rem] overflow-hidden snap-center shrink-0 shadow-md group cursor-pointer border border-gray-200">
              <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA]">
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

      {/* Footer */}
      <footer className="w-full bg-[#111827] text-white pt-20 pb-10 px-6 md:px-12 border-t-4 border-[#FF5722]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <img src="/HIGHLLINEAROFFLOGO.png" alt="Highlinear Logo" className="h-16 md:h-20 mb-8 object-contain" />
              <p className="text-gray-400 leading-relaxed text-sm">
                Combining Craftsmanship with Innovation for Exceptional Results. We build the foundation of tomorrow.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-[#FF5722] transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-[#FF5722] transition-colors">Our Services</a></li>
                <li><a href="#projects" className="hover:text-[#FF5722] transition-colors">Projects Portfolio</a></li>
                <li><a href="#contact" className="hover:text-[#FF5722] transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#FF5722] transition-colors">Tower Development</a></li>
                <li><a href="#" className="hover:text-[#FF5722] transition-colors">Urban Skyline Vision</a></li>
                <li><a href="#" className="hover:text-[#FF5722] transition-colors">Concrete Structures</a></li>
                <li><a href="#" className="hover:text-[#FF5722] transition-colors">Interior Design</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates on our latest projects.</p>
              <div className="flex bg-white/10 rounded-full p-1 border border-gray-700">
                <input type="email" placeholder="Email Address" className="bg-transparent text-white px-4 py-2 text-sm focus:outline-none w-full" />
                <button className="bg-[#FF5722] rounded-full w-10 h-10 flex items-center justify-center shrink-0 hover:bg-white hover:text-[#FF5722] transition-colors shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
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
