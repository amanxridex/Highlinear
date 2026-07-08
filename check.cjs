const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\91836\\.gemini\\antigravity-ide\\brain\\cdbf472f-62d9-4381-b9e6-bfeed466122e\\.system_generated\\steps\\40\\content.md', 'utf8');

const horizonRegex = /<div class="flex items-end justify-start -ml-\[1%\] leading-none" style="opacity:0;transform:translateX\(60vw\)"><span class="text-\[19vw\].*?N<\/span><\/div>/g;

const replaced = html.replace(horizonRegex, 'REPLACED');
let pos = replaced.indexOf('REPLACED');
console.log(replaced.substring(pos, pos + 200));
