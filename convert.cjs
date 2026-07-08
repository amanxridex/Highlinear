const fs = require('fs');
const path = require('path');

const contentPath = 'C:\\Users\\91836\\.gemini\\antigravity-ide\\brain\\cdbf472f-62d9-4381-b9e6-bfeed466122e\\.system_generated\\steps\\40\\content.md';
let markdown = fs.readFileSync(contentPath, 'utf-8');

// Extract HTML after the metadata
const htmlMatch = markdown.match(/<!DOCTYPE html>.*<html[^>]*>([\s\S]*?)<\/html>/i);
if (!htmlMatch) {
  console.error("Could not find HTML in content.md");
  process.exit(1);
}

let rawHtml = htmlMatch[1];
// Extract body content
const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : rawHtml;

// Bypass Next.js image optimization and point directly to the static images
bodyContent = bodyContent.replace(/\/_next\/image\?url=([^&"'\s]+)[^"'\s]*/g, (match, p1) => {
  return "https://horizon-grove.vercel.app" + decodeURIComponent(p1);
});

// Make any remaining relative URLs absolute
bodyContent = bodyContent.replace(/(href|src|srcset|imageSrcSet)="(\/[^"]+)"/g, '$1="https://horizon-grove.vercel.app$2"');

// Remove scripts, next.js specific containers
bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
bodyContent = bodyContent.replace(/<div hidden="">.*?<\/div>/gi, '');

// Apply text replacements for the marquee (and general rebranding where it matches exactly)
bodyContent = bodyContent.replace(/Live Above The Ordinary/g, 'LIVE ABOVE THE ORDINARY .');
bodyContent = bodyContent.replace(/>Horizon Grove</g, '>HIGHLINEAR GROUP.<');
bodyContent = bodyContent.replace(/>horizon grove</g, '>highlinear group<');
bodyContent = bodyContent.replace(/>Horizon Grove /g, '>Highlinear Group ');
bodyContent = bodyContent.replace(/welcome to <br\/>Horizon Grove/g, 'welcome to <br/>Highlinear Group');

// Specifically catch all remaining Horizon Grove references globally
bodyContent = bodyContent.replace(/Horizon Grove/g, 'Highlinear Group');
bodyContent = bodyContent.replace(/horizon grove/g, 'highlinear group');

// Update Founder name
bodyContent = bodyContent.replace(/Lucas Meyer/gi, 'Malvinder Singh Chauhan');

// Update email
bodyContent = bodyContent.replace(/Info@Horizongrove\.Com/gi, 'info@highlinear.com');

// Update copyright
bodyContent = bodyContent.replace(
  /<div class="flex flex-col md:flex-row gap-2"><span>.*?<\/span><span class="hidden md:block">\|<\/span><span class="text-gray-500">Demo site by.*?<\/span><\/div>/is,
  '<div class="flex flex-col md:flex-row gap-2 text-center md:text-left"><span>Copyright &copy; 2023 High-Linear Civil Private Limited. All Rights Reserved</span><span class="hidden md:block">|</span><span class="text-gray-500">Designed by <a href="https://amanmishra.work" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">amanmishra.work</a></span></div>'
);

// Update Header Navigation Menu
const oldNav = '<ul class="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium"><li><a href="#about" class="hover:opacity-100 opacity-70 cursor-pointer transition-opacity">About</a></li><li><a href="#features" class="hover:opacity-100 opacity-70 cursor-pointer transition-opacity">Features</a></li><li><a href="#ready-to-move" class="hover:opacity-100 opacity-70 cursor-pointer transition-opacity">Offers</a></li><li><a href="#apartments" class="hover:opacity-100 opacity-70 cursor-pointer transition-opacity">Apartments</a></li></ul>';

const newNav = `
<ul class="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium items-center">
  <li class="relative group">
    <div class="flex items-center gap-1 cursor-pointer text-[#d4af37] hover:text-[#fde08b] transition-colors py-4">
      ABOUT US
      <svg class="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
    </div>
    <div class="absolute left-0 top-[100%] hidden group-hover:block w-48 z-50 pt-1">
      <div class="bg-black border border-white/20 p-1 flex flex-col rounded-sm">
        <a href="#company-overview" class="px-4 py-3 text-[#d4af37] hover:bg-white/10 transition-colors normal-case tracking-normal text-sm">Company Overview</a>
        <a href="#mission" class="px-4 py-3 text-[#d4af37] hover:bg-white/10 transition-colors normal-case tracking-normal text-sm">Mission & Vision</a>
      </div>
    </div>
  </li>

  <li class="relative group">
    <div class="flex items-center gap-1 cursor-pointer text-[#d4af37] hover:text-[#fde08b] transition-colors py-4">
      OUR SERVICES
      <svg class="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
    </div>
    <div class="absolute left-0 top-[100%] hidden group-hover:block w-56 z-50 pt-1">
      <div class="bg-black border border-white/20 p-1 flex flex-col rounded-sm">
        <a href="#govt" class="px-4 py-3 text-[#d4af37] hover:bg-white/10 transition-colors normal-case tracking-normal text-sm">Govt. Contracts</a>
        <a href="#building" class="px-4 py-3 text-[#d4af37] hover:bg-white/10 transition-colors normal-case tracking-normal text-sm">Building Construction</a>
        <a href="#interior" class="px-4 py-3 text-[#d4af37] hover:bg-white/10 transition-colors normal-case tracking-normal text-sm">Interior Designing</a>
      </div>
    </div>
  </li>

  <li class="relative group">
    <div class="flex items-center gap-1 cursor-pointer text-[#d4af37] hover:text-[#fde08b] transition-colors py-4">
      PROJECTS
      <svg class="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
    </div>
    <div class="absolute left-0 top-[100%] hidden group-hover:block w-56 z-50 pt-1">
      <div class="bg-black border border-white/20 p-1 flex flex-col rounded-sm">
        <a href="#ongoing" class="px-4 py-3 text-[#d4af37] hover:bg-white/10 transition-colors normal-case tracking-normal text-sm">Our Ongoing Projects</a>
        <a href="#delivered" class="px-4 py-3 text-[#d4af37] hover:bg-white/10 transition-colors normal-case tracking-normal text-sm">Our Delivered Projects</a>
      </div>
    </div>
  </li>

  <li>
    <a href="#construction" class="hover:opacity-100 opacity-100 cursor-pointer transition-all border border-[#d4af37]/50 hover:border-[#d4af37] hover:bg-[#d4af37]/10 text-[#d4af37] px-4 py-2 rounded-full font-bold ml-2">CONSTRUCTION WORK</a>
  </li>
</ul>
`.replace(/\n\s*/g, '');

bodyContent = bodyContent.replace(oldNav, newNav);

// Update Stats Cards - EXACT STRING REPLACEMENT
bodyContent = bodyContent.replace(
  'Experience In Real Estate</div><div class="flex justify-between items-end"><span class="text-5xl font-light tracking-tight flex"><span>0</span>+</span>',
  'Experience In Real Estate</div><div class="flex justify-between items-end"><span class="text-5xl font-light tracking-tight flex"><span>9</span>+</span>'
);

bodyContent = bodyContent.replace(
  'Satisfied Homeowners</div><div class="flex justify-between items-end"><span class="text-5xl font-light tracking-tight flex"><span>0</span>%</span>',
  'Satisfied Homeowners</div><div class="flex justify-between items-end"><span class="text-5xl font-light tracking-tight flex"><span>97</span>%</span>'
);

bodyContent = bodyContent.replace(
  'Ready-To-Move-In Apartments</div><div class="flex justify-between items-end"><span class="text-5xl font-light tracking-tight flex"><span>0</span>+</span>',
  'Ready-To-Move-In Apartments</div><div class="flex justify-between items-end"><span class="text-5xl font-light tracking-tight flex"><span>150</span>+</span>'
);

// Update "A home designed..."
bodyContent = bodyContent.replace(/A Home Designed For <br\/> Those Who Seek <br\/> More\./gi, 'Homes Designed For <br/> Those Who Seek <br/> More.');
bodyContent = bodyContent.replace(/A home designed <br\/> for those who <br\/> seek more/gi, 'Homes designed <br/> for those who <br/> seek more');

// Update the About section (using exact strings from content.md to guarantee match)
bodyContent = bodyContent.replace('[ About the project ]', '[ About our company ]');

const oldTextP1 = 'A new era of residential living — <br/>immersed in nature, defined by clean architecture and quiet sophistication.';
const oldTextP2 = '<br/>Highlinear Group creates a seamless dialogue between architecture and environment.'; // Was updated by global replace above

const newTextP1 = 'Highlinear Group is a premier real estate development firm — <br/>dedicated to crafting visionary spaces, defined by innovative design and uncompromising quality.';
const newTextP2 = '<br/>We build the foundations for extraordinary living and sustainable futures.';

bodyContent = bodyContent.replace(oldTextP1, newTextP1);
bodyContent = bodyContent.replace(oldTextP2, newTextP2);

// Update tags
bodyContent = bodyContent.replace(/>Nature Inspired</gi, '>CONSTRUCTION<');

// Add scroll animation to the "SPACE THAT INSPIRES" brackets
bodyContent = bodyContent.replace(
  /<div class="absolute h-\[60vh\] border-l border-t border-b border-white w-12 opacity-80" style="right:20%"><\/div>/g,
  '<div class="absolute h-[60vh] border-l border-t border-b border-white w-12 opacity-80" style="right:20%; opacity:0; transform:translateX(20vw)"></div>'
);
bodyContent = bodyContent.replace(
  /<div class="absolute h-\[60vh\] border-r border-t border-b border-white w-12 opacity-80" style="left:20%"><\/div>/g,
  '<div class="absolute h-[60vh] border-r border-t border-b border-white w-12 opacity-80" style="left:20%; opacity:0; transform:translateX(-20vw)"></div>'
);

// Specifically update the welcome subtext
bodyContent = bodyContent.replace(/A unique space where modern design meets unparalleled convenience, offering a lifestyle beyond expectations./g, 'We create unique spaces where modern design meets unparalleled convenience, offering a lifestyle beyond expectations.');

// FIX MARQUEE ONCE AND FOR ALL
bodyContent = bodyContent.replace(
  /<div class="flex w-full whitespace-nowrap overflow-hidden">/g, 
  '<div class="custom-marquee" style="display:flex; width:max-content; flex-shrink:0; animation:marquee 30s linear infinite; -webkit-transform:translate3d(0,0,0);">'
);

// Remove the small overlapping text: "Residence San Cassiano / 2025"
bodyContent = bodyContent.replace(
  /<div class="hidden md:flex gap-12 text-\[10px\] md:text-xs text-white\/70 uppercase tracking-widest pl-1" style="opacity:0"><span>Residence<\/span><span>San Cassiano<\/span><span>\/ 2025<\/span><\/div>/g,
  ''
);

// Replace HORIZON letters in hero with HIGHLINEAR (global replace for duplicate layers)
// FIXED regex to match until the final N</span></div> to avoid leaving "RIZON" behind
const highlinearSpans = "HIGHLINEAR".split('').map(letter => `<span class="text-[15vw] md:text-[11vw] font-normal tracking-tighter uppercase font-sans">${letter}</span>`).join('');
const horizonRegex = /<div class="flex items-end justify-start -ml-\[1%\] leading-none" style="opacity:0;transform:translateX\(60vw\)"><span class="text-\[19vw\].*?N<\/span><\/div>/g;
bodyContent = bodyContent.replace(
  horizonRegex, 
  `<div class="flex items-end justify-start -ml-[1%] leading-none" style="opacity:0;transform:translateX(60vw)">${highlinearSpans}</div>`
);

// Replace GROVE letters in hero with GROUP (using the custom O)
// AND fix the spacing by changing -mt-[6vw] to -mt-[1vw]
const customO = `<div class="relative w-[13vw] h-[7.5vw] md:w-[9vw] md:h-[5vw] mx-[0.5vw] mb-[9px] md:mb-[1.5vw]"><div class="absolute inset-0 rounded-t-full border-[1.2vw] border-white border-b-0"></div><div class="absolute bottom-0 left-[1.5vw] right-[1.5vw] h-[2px] bg-transparent"></div></div>`;
const groupSpans = 
  `<span class="text-[15vw] md:text-[11vw] font-normal tracking-tighter uppercase font-sans">G</span>` +
  `<span class="text-[15vw] md:text-[11vw] font-normal tracking-tighter uppercase font-sans">R</span>` +
  customO + 
  `<span class="text-[15vw] md:text-[11vw] font-normal tracking-tighter uppercase font-sans">U</span>` +
  `<span class="text-[15vw] md:text-[11vw] font-normal tracking-tighter uppercase font-sans">P</span>`;

const groveRegex = /<div class="flex justify-center md:justify-start md:pl-\[35vw\] -mt-\[6vw\] leading-none" style="opacity:0;transform:translateX\(-60vw\)"><span class="text-\[19vw\].*?E<\/span><\/div>/g;
bodyContent = bodyContent.replace(
  groveRegex,
  `<div class="flex justify-center md:justify-start md:pl-[35vw] -mt-[1vw] leading-none" style="opacity:0;transform:translateX(-60vw)">${groupSpans}</div>`
);

// Replace the HORIZON letters in the footer with HIGHLINEAR.png
bodyContent = bodyContent.replace(
  /<div class="relative overflow-hidden h-\[13vw\]"><h1 class="text-\[14vw\][\s\S]*?<\/h1><\/div>/,
  '<div class="relative overflow-hidden flex justify-center py-12"><img src="/HIGHLINEAR.png" class="w-full max-w-[95%] md:max-w-[70%] object-contain drop-shadow-2xl" /></div>'
);

// Extract Header and Footer for use in CompanyOverview
const desktopNavMatch = bodyContent.match(/<nav class="relative z-\[40\][^>]*>[\s\S]*?<\/nav>/i);
let headerHtml = desktopNavMatch ? desktopNavMatch[0].replace(/style="[^"]*"/g, 'style="opacity:1;transform:translateY(0)"') : '';

const footerMatch = bodyContent.match(/<footer[^>]*>[\s\S]*?<\/footer>/i);
let footerHtml = footerMatch ? footerMatch[0] : '';

const appJsx = `
import React, { useEffect, useState } from 'react';
import './App.css';

const exactHtml = ${JSON.stringify(bodyContent)};
const headerHtml = ${JSON.stringify(headerHtml)};
const footerHtml = ${JSON.stringify(footerHtml)};

function CompanyOverview() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen font-sans flex flex-col relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-bl from-[#d4af37]/5 to-transparent pointer-events-none z-0"></div>

      {/* Header */}
      <div 
        className="w-full bg-[#0d0d0d] border-b border-white/10 sticky top-0 z-[100]" 
        dangerouslySetInnerHTML={{ __html: headerHtml }} 
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">
        <div className="mb-12">
          <a href="#" className="inline-flex items-center gap-2 text-sm text-[#d4af37] hover:text-white transition-colors uppercase tracking-widest font-medium border border-[#d4af37]/30 hover:border-white/50 px-4 py-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Home
          </a>
        </div>

        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-8">Company Overview</h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full blur-[1px]"></div>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-32">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors shadow-xl">
            <div className="text-4xl md:text-6xl font-light text-[#d4af37] mb-4">9+</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 leading-relaxed">Years of<br/>Excellence</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors shadow-xl">
            <div className="text-4xl md:text-6xl font-light text-[#d4af37] mb-4">2</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 leading-relaxed">Strategic<br/>Offices</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors shadow-xl">
            <div className="text-4xl md:text-6xl font-light text-[#d4af37] mb-4">100%</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 leading-relaxed">Sustainable<br/>Practices</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors shadow-xl">
            <div className="text-4xl md:text-6xl font-light text-[#d4af37] mb-4">∞</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 leading-relaxed">Commitment to<br/>Quality</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-10 uppercase flex items-center gap-4">
              <span className="text-[#d4af37] font-serif italic text-4xl">01.</span> Who We Are
            </h2>
            <div className="space-y-8 text-gray-400 font-light leading-relaxed text-lg">
              <p>High-Linear Civil Private Limited is a construction company that specializes in government contracts and building construction. The company was founded in 2015 and is headquartered in Dehradun, India. They also have a branch office located in Noida in the National Capital Region (NCR).</p>
              <p>In addition to their construction services, High-Linear Civil Private Limited offers interior design services. Their team of experienced professionals works closely with clients to create unique and innovative design solutions that meet their specific needs and preferences.</p>
              <p>The company has established a strong reputation for delivering high-quality projects on time and within budget. They have a team of skilled workers who are dedicated to delivering exceptional results for each and every project they undertake.</p>
              <p>High-Linear Civil Private Limited is committed to using sustainable building practices and materials whenever possible. They believe in minimizing their environmental impact and contributing to a more sustainable future.</p>
              <p>Overall, High-Linear Civil Private Limited is a reliable and experienced construction company that provides a range of services to clients in Dehradun and Delhi NCR. They are committed to delivering high-quality work and providing exceptional customer service.</p>
            </div>
          </div>
          
          <div className="sticky top-32">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-10 uppercase flex items-center gap-4">
              <span className="text-[#d4af37] font-serif italic text-4xl">02.</span> What We Do
            </h2>
            <div className="bg-[#111] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="relative z-10 space-y-8 text-gray-300 font-light leading-relaxed text-lg">
                <p>The company provides additional services in the form of interior design to complement its construction offerings. With a focus on delivering high-quality projects that meet client needs and expectations, High-Linear Civil Private Limited has established a reputation as a reliable and professional partner in the construction industry.</p>
                <p>Its expertise and experience enable the company to handle a wide range of projects, from residential and commercial buildings to infrastructure and public works.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div 
        className="w-full mt-auto bg-[#0d0d0d]"
        dangerouslySetInnerHTML={{ __html: footerHtml }} 
      />
    </div>
  );
}

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (currentHash === '#company-overview') return;

    const container = document.querySelector('.exact-copy-container');
    if (!container) return;

    // --- 1. SCROLL ANIMATIONS ---
    const allElements = container.querySelectorAll('*');
    const hiddenElements = [];
    
    allElements.forEach(el => {
      if (el.style.opacity === '0' || el.style.opacity === 0 || el.getAttribute('style')?.includes('opacity:0') || el.getAttribute('style')?.includes('opacity: 0')) {
        hiddenElements.push(el);
        el.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.opacity = '1';
          el.style.transform = 'translate(0px, 0px) scale(1)';
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '50px' });

    hiddenElements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, [currentHash]);

  if (currentHash === '#company-overview') {
    return <CompanyOverview />;
  }

  return (
    <div 
      className="exact-copy-container" 
      dangerouslySetInnerHTML={{ __html: exactHtml }} 
    />
  );
}

export default App;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appJsx);
console.log("App.jsx has been updated with Company Overview routing!");

