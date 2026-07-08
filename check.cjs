const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\91836\\.gemini\\antigravity-ide\\brain\\cdbf472f-62d9-4381-b9e6-bfeed466122e\\.system_generated\\steps\\40\\content.md', 'utf8');

let matches = html.match(/<div class="flex items-end justify-start[^>]*>.*?<\/div>/g);
if(matches) matches.forEach(m => console.log(m));
