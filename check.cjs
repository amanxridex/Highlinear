const fs = require('fs');

const contentPath = 'C:\\Users\\91836\\.gemini\\antigravity-ide\\brain\\cdbf472f-62d9-4381-b9e6-bfeed466122e\\.system_generated\\steps\\40\\content.md';
let markdown = fs.readFileSync(contentPath, 'utf-8');

const regex = /.{0,30}About the project.{0,30}/gi;
let match;
while ((match = regex.exec(markdown)) !== null) {
  console.log(`\nAbout the project match at ${match.index}:`);
  console.log(match[0]);
}

const regex2 = /.{0,50}A new era of residential living.{0,150}/gi;
while ((match = regex2.exec(markdown)) !== null) {
  console.log(`\nText match at ${match.index}:`);
  console.log(match[0]);
}
