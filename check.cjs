const fs = require('fs');
const contentPath = 'C:\\Users\\91836\\.gemini\\antigravity-ide\\brain\\cdbf472f-62d9-4381-b9e6-bfeed466122e\\.system_generated\\steps\\40\\content.md';
let markdown = fs.readFileSync(contentPath, 'utf-8');

const m = markdown.match(/<ul class="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium">.*?<\/ul>/is);
if (m) console.log("NAV:\n" + m[0]);
