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

const appJsx = `
import React, { useEffect } from 'react';
import './App.css';

const exactHtml = ${JSON.stringify(bodyContent)};

function App() {
  useEffect(() => {
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
  }, []);

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
console.log("App.jsx has been updated with submenu dropdowns!");
