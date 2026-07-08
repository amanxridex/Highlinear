const fs = require('fs');

const contentPath = 'C:\\Users\\91836\\.gemini\\antigravity-ide\\brain\\cdbf472f-62d9-4381-b9e6-bfeed466122e\\.system_generated\\steps\\40\\content.md';
let markdown = fs.readFileSync(contentPath, 'utf-8');

const m = markdown.match(/<div class="flex flex-col md:flex-row gap-2"><span>.*?<\/span><span class="hidden md:block">\|<\/span><span class="text-gray-500">Demo site by.*?<\/span><\/div>/is);
if (m) console.log("MATCHED COPYRIGHT");
else console.log("FAILED COPYRIGHT MATCH");
