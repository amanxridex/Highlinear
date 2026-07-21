import React from 'react';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] text-[#1C1C1C] flex flex-col font-sans">
      {/* Navigation Bar */}
      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-6 bg-white shadow-sm z-50">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/HIGHLLINEAROFFLOGO.png" 
              alt="Highlinear Logo" 
              className="h-8 object-contain"
            />
          </a>
          
          {/* Links */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
            <a href="#" className="hover:text-[#d4af37] transition-colors">Demos</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Pages</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Services</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Projects</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">News</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Contact</a>
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block text-sm font-medium">
            <span className="text-gray-500">Call Us: </span>
            <span>+(084) 123 - 456 88</span>
          </div>
          <button className="bg-[#d4af37] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors">
            Get In Touch
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col lg:flex-row w-full p-4 lg:p-6 gap-6 h-[calc(100vh-88px)]">
        
        {/* Left Image Panel */}
        <div className="w-full lg:w-[45%] h-[50vh] lg:h-full rounded-[2rem] overflow-hidden relative shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Construction Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Right Content Panel */}
        <div className="w-full lg:w-[55%] h-full flex flex-col justify-center px-4 lg:px-16 py-12 relative">
          
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-8 text-black">
              A new<br />standard of<br />excellence
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl font-medium max-w-md mb-12 leading-relaxed">
              The largest privately held real estate investors and managers in the world.
            </p>
            
            <button className="flex items-center gap-4 group">
              <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 font-medium text-sm group-hover:shadow-md transition-all">
                View All Services
              </div>
              <div className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center text-white group-hover:bg-black transition-colors shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </div>
            </button>
          </div>

          {/* Bottom Stats & Watch Video (Absolute positioned or margin-auto) */}
          <div className="mt-auto pt-16 flex flex-col sm:flex-row items-center justify-between w-full">
            {/* 40 Years Experience */}
            <div className="flex items-center gap-4 mb-6 sm:mb-0">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#d4af37] rounded-full opacity-30 -translate-x-2"></div>
                <span className="text-5xl font-bold relative z-10">40</span>
              </div>
              <div className="font-semibold text-sm leading-tight text-gray-800">
                years of<br />experiences
              </div>
            </div>

            {/* Watch Video Button */}
            <button className="relative w-40 h-16 rounded-full overflow-hidden group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
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

      </main>
    </div>
  );
}

export default App;
