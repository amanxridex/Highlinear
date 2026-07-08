const fs = require('fs');
const contentPath = 'C:\\Users\\91836\\.gemini\\antigravity-ide\\brain\\cdbf472f-62d9-4381-b9e6-bfeed466122e\\.system_generated\\steps\\40\\content.md';
let markdown = fs.readFileSync(contentPath, 'utf-8');

const m2 = markdown.match(/Satisfied Homeowners.{0,200}/is);
console.log("M2:\n" + m2[0]);

const m3 = markdown.match(/Ready-To-Move-In Apartments.{0,200}/is);
console.log("M3:\n" + m3[0]);
