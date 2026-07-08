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

// Directly inject CSS class and width into the marquee wrapper in HTML
bodyContent = bodyContent.replace(
  /<div class="flex w-full whitespace-nowrap overflow-hidden">/g, 
  '<div class="flex w-max whitespace-nowrap overflow-hidden animate-marquee">'
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
console.log("App.jsx has been updated with footer logo!");
