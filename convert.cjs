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

// Extract Header and Footer for use in CompanyOverview
const desktopNavMatch = bodyContent.match(/<nav class="relative z-\[40\][^>]*>[\s\S]*?<\/nav>/i);
let headerHtml = desktopNavMatch ? desktopNavMatch[0].replace(/style="[^"]*"/g, 'style="opacity:1;transform:translateY(0)"') : '';

const footerMatch = bodyContent.match(/<footer[^>]*>[\s\S]*?<\/footer>/i);
let footerHtml = footerMatch ? footerMatch[0] : '';

// Extract Header and Footer for use in CompanyOverview
const desktopNavMatch = bodyContent.match(/<nav class="relative z-\[40\][^>]*>[\s\S]*?<\/nav>/i);
const appJsx = `
import React, { useEffect, useState } from 'react';
import './App.css';

const exactHtml = ${JSON.stringify(bodyContent)};
const headerHtml = ${JSON.stringify(headerHtml)};
const footerHtml = ${JSON.stringify(footerHtml)};

function ServiceCard({ title, shortDesc, longDesc, imageSrc }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 transition-all duration-500 shadow-2xl flex flex-col h-full">
      <div className="w-full h-48 md:h-64 relative overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
      </div>
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <h3 className="text-2xl font-light tracking-tight text-white mb-4 uppercase flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[#d4af37]"></span> {title}
        </h3>
        <p className="text-gray-400 font-light leading-relaxed mb-6">
          {shortDesc}
        </p>
        
        <div className={\`overflow-hidden transition-all duration-500 \${expanded ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}\`}>
          <div className="pt-4 border-t border-white/10 text-gray-300 font-light leading-relaxed">
            {longDesc}
          </div>
        </div>
        
        <div className="mt-auto">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-xs text-[#d4af37] hover:text-white transition-colors uppercase tracking-widest font-medium group/btn"
          >
            {expanded ? 'Show Less' : 'Read More'} 
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={\`transition-transform duration-300 \${expanded ? 'rotate-180' : 'group-hover/btn:translate-x-1'}\`}><path d={expanded ? "m18 15-6-6-6 6" : "m9 18 6-6-6-6"}/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function GovtContracts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen font-sans flex flex-col relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent pointer-events-none z-0"></div>

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
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-8">Govt. Contracts</h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full blur-[1px]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-7 space-y-8 text-gray-300 font-light leading-relaxed text-lg">
            <p className="text-2xl text-white font-medium mb-6">
              High-Linear Civil Private Limited is a trusted provider of construction services for government contracts. 
            </p>
            <p>
              We specialize in delivering high-quality projects that meet the specific requirements of government agencies, from local municipalities to federal departments. Our team has extensive experience working with government entities, and we understand the unique challenges that these projects can present. We are well-versed in the regulatory and compliance requirements of government contracts, and we have a track record of delivering projects on time and within budget.
            </p>
            <p>
              Our government contracts services are designed to meet the unique needs of each project. We have a team of experienced professionals who are skilled in managing complex projects, from planning and design to construction and closeout. Our team has worked on a wide range of government contracts, including projects for infrastructure, transportation, education, healthcare, and public works.
            </p>
            <p>
              We understand the importance of compliance and regulations in government contracts, and we have a robust quality management system in place to ensure that each project meets the required standards. Our team is also experienced in working with multiple stakeholders, including government agencies, contractors, and subcontractors, to ensure that each project is executed efficiently and effectively.
            </p>
            <p>
              At High-Linear Civil Private Limited, we believe in using the latest technology and tools to enhance our government contracts services. We leverage cutting-edge software and equipment to ensure that each project is delivered on time, within budget, and to the highest quality standards.
            </p>
            <p className="border-l-2 border-[#d4af37] pl-6 italic text-gray-400 my-10">
              If you are looking for a reliable partner for your government contracts projects, look no further than High-Linear Civil Private Limited. Contact us today to learn more about our services and how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
              <h3 className="text-2xl font-light tracking-tight text-white mb-8 uppercase flex items-center gap-4 relative z-10">
                <span className="text-[#d4af37]">Why Choose Us</span>
              </h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-1">Unmatched Compliance</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">Deep understanding of strict federal and municipal regulations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-1">Cutting-Edge Tech</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">Leveraging the latest software and equipment for precision and speed.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-1">End-to-End Solutions</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">From design and engineering to post-construction support.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tenders Services Grid */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase mb-6">Our Government Tenders Services</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full blur-[1px]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Bid Preparation"
              shortDesc="We offer comprehensive bid preparation and submission services for government tenders."
              longDesc="Our team of experts has extensive experience in preparing winning bids for a variety of government contracts, from small-scale projects to multi-million dollar initiatives. We handle all the intricate paperwork and compliance checks."
              imageSrc="https://horizon-grove.vercel.app/_next/static/media/features_center.8d4e08ae.png"
            />
            
            <ServiceCard 
              title="Compliance Consulting"
              shortDesc="Navigating the complex landscape of government regulations smoothly and effectively."
              longDesc="We offer comprehensive bid preparation and submission services for government tenders. Our team of experts has extensive experience in preparing winning bids for a variety of government contracts, ensuring every detail aligns with local and federal laws."
              imageSrc="https://horizon-grove.vercel.app/_next/static/media/hillside-complex.0fe20f82.png"
            />
            
            <ServiceCard 
              title="Project Management"
              shortDesc="Comprehensive project management services tailored exclusively for government tenders."
              longDesc="We understand that successful project management is critical to the success of any government contract, and our team is committed to ensuring that each project is executed with the highest standards of quality, safety, and efficiency."
              imageSrc="https://horizon-grove.vercel.app/_next/static/media/detail-misty.da69f4f9.png"
            />
            
            <ServiceCard 
              title="Safety Management"
              shortDesc="Ensuring that every project we undertake is executed with the highest standards of safety."
              longDesc="At High-Linear, we understand the importance of safety in any construction project, especially those for government agencies. That's why we offer comprehensive safety management services to ensure 100% compliance with OSHA and local safety standards."
              imageSrc="https://horizon-grove.vercel.app/_next/static/media/amenity_store_thumb.a26ee414.png"
            />
            
            <ServiceCard 
              title="Quality Assurance"
              shortDesc="A robust quality management system in place to ensure that each project meets required standards."
              longDesc="At High-Linear Civil Private Limited, we understand the importance of quality assurance and control in government contracts. We implement rigorous testing, regular site audits, and strict material inspections to guarantee a world-class final product."
              imageSrc="https://horizon-grove.vercel.app/_next/static/media/hallway-thumb.fadc9be6.png"
            />
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

function BuildingConstruction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen font-sans flex flex-col relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent pointer-events-none z-0"></div>

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
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-8">Building Construction</h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full blur-[1px]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-7 space-y-8 text-gray-300 font-light leading-relaxed text-lg">
            <p className="text-2xl text-white font-medium mb-6">
              High-Linear Civil Private Limited is a leading provider of building construction services.
            </p>
            <p>
              We specialize in delivering high-quality projects that meet the specific needs of our clients, from design and engineering to construction and post-construction support. Our team of professionals is dedicated to ensuring that each project is executed with the highest standards of quality, safety, and efficiency. We have the expertise and experience to handle a wide range of building construction projects, from residential and commercial buildings to industrial and institutional facilities.
            </p>
            <p>
              We understand that each project is unique, and we work closely with our clients to understand their needs and objectives. We provide customized solutions that are tailored to the specific requirements of each project, ensuring that we deliver the best possible outcomes.
            </p>
            <p>
              At High-Linear Civil Private Limited, we believe in using the latest technology and tools to enhance our building construction services. We leverage cutting-edge software and equipment to ensure that each project is delivered on time, within budget, and to the highest quality standards.
            </p>
            <p>
              We also offer a range of additional services to complement our building construction offerings, including interior design and project management. Our team of experts can help you with every aspect of your project, from initial planning and design to construction and final delivery.
            </p>
            <p>
              Our building construction services are designed to deliver the highest quality projects that meet the specific needs of our clients. We have a team of skilled professionals who are experienced in managing complex building construction projects. Our team has the expertise to handle a wide range of building construction projects, including new construction, renovations, and expansions.
            </p>
            <p>
              We are committed to using sustainable building practices and materials in our construction projects. Our team is well-versed in green building certifications and can help our clients achieve LEED certification for their projects. We believe in open communication and collaboration with our clients, keeping them informed throughout every stage of the project.
            </p>
            <p>
              We also understand the importance of safety in building construction projects. We have a robust safety program in place that ensures that each project is executed with the highest safety standards. We have a team of safety professionals who work closely with our project managers to ensure that safety is a top priority in every aspect of the project.
            </p>
            <p className="border-l-2 border-[#d4af37] pl-6 italic text-gray-400 my-10">
              We are committed to providing exceptional service and value to our clients, and we strive to build long-term partnerships based on trust, reliability, and transparency. If you are looking for a reliable partner for your building construction project, look no further than High-Linear Civil Private Limited. Contact us today to learn more about our services and how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
              <h3 className="text-2xl font-light tracking-tight text-white mb-8 uppercase flex items-center gap-4 relative z-10">
                <span className="text-[#d4af37]">Our Capabilities</span>
              </h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-1">Residential & Commercial</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">Expertise spanning from luxury residential complexes to large-scale commercial facilities.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-1">Sustainable & LEED</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">Dedicated to green building practices and achieving LEED certifications.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-1">New Build & Renovations</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">Handling new construction, massive expansions, and detailed renovations.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Building Construction Services Grid */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase mb-6">Our Building Construction Services</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full blur-[1px]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Design-Build Services"
              shortDesc="Seamlessly integrate the design and construction phases of building construction projects."
              longDesc="At High-Linear Civil Private Limited, we offer comprehensive design-build services that seamlessly integrate the design and construction phases of building construction projects. Our team of experts works closely with our clients to understand their unique needs and objectives, ensuring that each project is tailored to meet their specific requirements."
              imageSrc="https://horizon-grove.vercel.app/_next/static/media/features_center.8d4e08ae.png"
            />
            
            <ServiceCard 
              title="Pre-Construction"
              shortDesc="Ensuring that each project is properly planned and executed from start to finish."
              longDesc="Pre-construction services are an integral part of our building construction process at High-Linear Civil Private Limited. Our team of experienced professionals works closely with our clients to ensure that each project is properly planned and executed from start to finish."
              imageSrc="https://horizon-grove.vercel.app/_next/static/media/hillside-complex.0fe20f82.png"
            />
            
            <ServiceCard 
              title="Construction Management"
              shortDesc="Ensuring that each project is completed on time, within budget, and to quality standards."
              longDesc="At High-Linear Civil Private Limited, we provide comprehensive construction management services to ensure that each project is completed on time, within budget, and to the highest quality standards."
              imageSrc="https://horizon-grove.vercel.app/_next/static/media/detail-misty.da69f4f9.png"
            />
            
            <ServiceCard 
              title="Permitting & Approvals"
              shortDesc="Extensive experience navigating the complex regulatory landscape."
              longDesc="At High-Linear Civil Private Limited, we understand the importance of obtaining the necessary permits and approvals for building construction projects. Our team of experts has extensive experience navigating the complex regulatory landscape and can help our clients obtain the required permits and approvals efficiently and effectively."
              imageSrc="https://horizon-grove.vercel.app/_next/static/media/amenity_store_thumb.a26ee414.png"
            />
            
            <ServiceCard 
              title="Safety Management"
              shortDesc="Our safety management program ensures execution with the highest safety standards."
              longDesc="Safety is a top priority at High-Linear Civil Private Limited. Our safety management program ensures that every project is executed with the highest safety standards. We have a team of safety professionals who work closely with our project managers to ensure that safety is integrated into every aspect of the project."
              imageSrc="https://horizon-grove.vercel.app/_next/static/media/hallway-thumb.fadc9be6.png"
            />
            
            <ServiceCard 
              title="Quality Assurance"
              shortDesc="A robust quality management system in place to ensure required standards."
              longDesc="At High-Linear Civil Private Limited, we understand the importance of quality assurance and control in our projects. That's why we have a robust quality management system in place to ensure that each project meets the required standards of quality."
              imageSrc="https://horizon-grove.vercel.app/_next/static/media/avatar_lucas.12924ac3.png"
            />
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

function MissionVision() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen font-sans flex flex-col relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d4af37]/5 via-transparent to-transparent pointer-events-none z-0"></div>

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
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-8">Mission & Vision</h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full blur-[1px]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-stretch mb-32">
          {/* Mission Card */}
          <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-3xl relative overflow-hidden group hover:bg-white/10 transition-colors duration-500 shadow-2xl">
            <div className="absolute -top-10 -right-10 text-[12rem] font-serif italic text-white/5 group-hover:text-white/10 transition-colors pointer-events-none leading-none">M</div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-8 uppercase flex items-center gap-4 relative z-10">
              <span className="w-12 h-[1px] bg-[#d4af37]"></span> Our Mission
            </h2>
            <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg relative z-10">
              <p>
                High-Linear Civil Private Limited’s mission is to deliver high-quality construction services that meet the needs and expectations of its clients. The company strives to provide innovative and cost-effective solutions while maintaining the highest standards of safety and quality.
              </p>
              <p>
                We are dedicated to forging lasting relationships with our stakeholders by adhering to transparent practices, respecting strict timelines, and fostering a culture where precision meets passion in every brick we lay.
              </p>
            </div>
          </div>
          
          {/* Vision Card */}
          <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-3xl relative overflow-hidden group hover:bg-white/10 transition-colors duration-500 shadow-2xl">
            <div className="absolute -bottom-10 -right-10 text-[12rem] font-serif italic text-white/5 group-hover:text-white/10 transition-colors pointer-events-none leading-none">V</div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-8 uppercase flex items-center gap-4 relative z-10">
              <span className="w-12 h-[1px] bg-[#d4af37]"></span> Our Vision
            </h2>
            <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg relative z-10">
              <p>
                High-Linear Civil Private Limited’s vision is to become a leading construction company in India, known for its excellence in delivering world-class projects that transform communities and enhance the quality of life. 
              </p>
              <p>
                The company aims to achieve this by leveraging its expertise, experience, and resources to provide exceptional service and value to its clients. High-Linear Civil Private Limited also aims to be a socially responsible and environmentally conscious organization, contributing to the sustainable development of the communities it serves.
              </p>
            </div>
          </div>
        </div>

        {/* Added Section: Core Values */}
        <div className="mt-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase mb-6">Our Core Values</h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg">The foundational principles that guide every project, team member, and decision at High-Linear Group.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-white/10 p-8 rounded-2xl hover:border-[#d4af37]/50 transition-colors">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-[#d4af37]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-xl font-medium tracking-tight uppercase mb-4">Safety First</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">We maintain an uncompromised commitment to the health and safety of our workforce and the public in every phase of construction.</p>
            </div>
            
            <div className="border border-white/10 p-8 rounded-2xl hover:border-[#d4af37]/50 transition-colors">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-[#d4af37]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <h3 className="text-xl font-medium tracking-tight uppercase mb-4">Integrity</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Operating with transparency and honesty, we build not just structures, but lasting trust with our clients and partners.</p>
            </div>
            
            <div className="border border-white/10 p-8 rounded-2xl hover:border-[#d4af37]/50 transition-colors">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-[#d4af37]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-xl font-medium tracking-tight uppercase mb-4">Excellence</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">We constantly innovate and apply the highest engineering standards to ensure our final product stands the test of time.</p>
            </div>
            
            <div className="border border-white/10 p-8 rounded-2xl hover:border-[#d4af37]/50 transition-colors">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-[#d4af37]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/></svg>
              </div>
              <h3 className="text-xl font-medium tracking-tight uppercase mb-4">Sustainability</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Dedicated to green building practices, we aim to minimize our ecological footprint and promote environmental longevity.</p>
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
    if (
      currentHash === '#company-overview' || 
      currentHash === '#mission-vision' || 
      currentHash === '#govt-contracts' || 
      currentHash === '#building-construction'
    ) return;

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

  if (currentHash === '#company-overview') return <CompanyOverview />;
  if (currentHash === '#mission-vision') return <MissionVision />;
  if (currentHash === '#govt-contracts') return <GovtContracts />;
  if (currentHash === '#building-construction') return <BuildingConstruction />;

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
