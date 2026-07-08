const fs = require('fs');

const contentPath = 'C:\\Users\\91836\\.gemini\\antigravity-ide\\brain\\cdbf472f-62d9-4381-b9e6-bfeed466122e\\.system_generated\\steps\\40\\content.md';
let markdown = fs.readFileSync(contentPath, 'utf-8');

const match = markdown.indexOf("Live Above The Ordinary");
if (match > -1) {
    console.log(markdown.substring(match - 500, match + 1000));
}
