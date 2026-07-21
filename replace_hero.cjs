const fs = require('fs');
const path = require('path');

const appJsxPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appJsxPath, 'utf8');

const sectionRegex = /<section class=\\"relative h-screen w-full overflow-hidden\\">.*?<\/section>/s;

const newHeroHtml = `
<section class=\\"relative min-h-screen w-full bg-[#FDFBF7] text-[#1C1C1C] flex flex-col md:flex-row\\">
  <!-- Left Side: Image -->
  <div class=\\"w-full md:w-[45%] p-4 md:p-6 flex flex-col h-[50vh] md:h-screen\\">
    <!-- Header Logo -->
    <div class=\\"absolute top-8 left-8 z-50 flex items-center gap-2\\">
      <img src=\\"/HIGHLLINEAROFFLOGO.png\\" class=\\"h-8 object-contain\\" alt=\\"Highlinear Logo\\" />
    </div>
    
    <!-- Hero Image -->
    <div class=\\"relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl\\">
      <img src=\\"https://horizon-grove.vercel.app/_next/static/media/hillside-complex.0fe20f82.png\\" class=\\"object-cover w-full h-full\\" alt=\\"Hero Building\\" />
    </div>
  </div>

  <!-- Right Side: Content -->
  <div class=\\"w-full md:w-[55%] flex flex-col relative px-8 md:px-16 pt-8 pb-12\\">
    <!-- Navigation -->
    <nav class=\\"flex justify-between items-center w-full mb-24\\">
      <ul class=\\"hidden md:flex gap-8 text-sm font-medium\\">
        <li><a href=\\"#\\" class=\\"hover:text-[#d4af37] transition-colors\\">Demos</a></li>
        <li><a href=\\"#\\" class=\\"hover:text-[#d4af37] transition-colors\\">Pages</a></li>
        <li><a href=\\"#\\" class=\\"hover:text-[#d4af37] transition-colors\\">Services</a></li>
        <li><a href=\\"#\\" class=\\"hover:text-[#d4af37] transition-colors\\">Projects</a></li>
        <li><a href=\\"#\\" class=\\"hover:text-[#d4af37] transition-colors\\">News</a></li>
        <li><a href=\\"#\\" class=\\"hover:text-[#d4af37] transition-colors\\">Contact</a></li>
      </ul>
      <div class=\\"flex items-center gap-6 ml-auto\\">
        <span class=\\"text-sm font-medium\\">Call Us: <span class=\\"text-gray-500\\">+38 (097) 123-4567</span></span>
        <button class=\\"bg-[#d4af37] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#c29c2a] transition-colors\\">Get In Touch</button>
      </div>
    </nav>

    <!-- Main Content -->
    <div class=\\"flex flex-col justify-center flex-1 max-w-2xl\\">
      <h1 class=\\"text-6xl md:text-[5.5rem] font-bold leading-[0.95] tracking-tight mb-8\\">
        A new <br/> standard of <br/> excellence
      </h1>
      <p class=\\"text-lg text-gray-500 max-w-md leading-relaxed mb-12\\">
        The largest privately held real estate investors and managers in the world.
      </p>
      <button class=\\"flex items-center gap-4 bg-white border border-gray-200 px-6 py-3 rounded-full w-fit hover:border-[#d4af37] transition-colors shadow-sm group\\">
        <span class=\\"text-sm font-medium\\">View All Services</span>
        <div class=\\"w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center text-white group-hover:scale-110 transition-transform\\">
          <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"w-4 h-4\\"><path d=\\"M7 7h10v10\\"></path><path d=\\"M7 17 17 7\\"></path></svg>
        </div>
      </button>
    </div>

    <!-- Stats Footer -->
    <div class=\\"mt-auto flex items-end justify-between border-t border-gray-200 pt-8\\">
      <div class=\\"flex items-center gap-6\\">
        <div class=\\"relative\\">
          <div class=\\"absolute -left-4 -top-4 w-16 h-16 rounded-full bg-[#d4af37]/20 -z-10\\"></div>
          <span class=\\"text-6xl font-bold tracking-tighter\\">40</span>
        </div>
        <span class=\\"text-sm font-medium max-w-[80px] leading-tight\\">years of experiences</span>
      </div>
      
      <button class=\\"relative w-40 h-16 rounded-full overflow-hidden group\\">
        <img src=\\"https://horizon-grove.vercel.app/_next/static/media/hallway-thumb.fadc9be6.png\\" class=\\"absolute inset-0 w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all\\" />
        <div class=\\"absolute inset-0 flex items-center justify-center gap-2 text-white\\">
          <span class=\\"text-sm font-medium\\">Watch</span>
          <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"white\\" stroke=\\"none\\" class=\\"w-4 h-4\\"><polygon points=\\"5 3 19 12 5 21 5 3\\"></polygon></svg>
        </div>
      </button>
    </div>
  </div>
</section>
`.replace(/\n/g, '').replace(/"/g, '\\"');

if (sectionRegex.test(content)) {
  content = content.replace(sectionRegex, newHeroHtml);
  fs.writeFileSync(appJsxPath, content, 'utf8');
  console.log('Hero section replaced successfully.');
} else {
  console.log('Hero section not found.');
}
