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

// Specifically update the welcome subtext
bodyContent = bodyContent.replace(/A unique space where modern design meets unparalleled convenience, offering a lifestyle beyond expectations./g, 'We create unique spaces where modern design meets unparalleled convenience, offering a lifestyle beyond expectations.');

// Directly inject CSS class and width into the marquee wrapper in HTML
bodyContent = bodyContent.replace(
  /<div class="flex w-full whitespace-nowrap overflow-hidden">/g, 
  '<div class="flex w-max whitespace-nowrap overflow-hidden animate-marquee">'
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
  `<div class="flex justify-center md:justify-start md:pl-[35vw] -mt-[6vw] leading-none" style="opacity:0;transform:translateX(-60vw)">${groupSpans}</div>`
);

// Replace the HORIZON letters in the footer with HIGHLINEAR.png
bodyContent = bodyContent.replace(
  /<div class="relative overflow-hidden h-\[13vw\]"><h1 class="text-\[14vw\][\s\S]*?<\/h1><\/div>/,
  '<div class="relative overflow-hidden flex justify-center py-12"><img src="/HIGHLINEAR.png" class="w-full max-w-4xl object-contain drop-shadow-2xl" /></div>'
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
console.log("App.jsx has been updated to change GROVE to GROUP in the hero!");
