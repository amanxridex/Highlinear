const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\91836\\.gemini\\antigravity-ide\\brain\\cdbf472f-62d9-4381-b9e6-bfeed466122e\\.system_generated\\steps\\40\\content.md', 'utf8');

let pos = html.indexOf('>G<');
let count = 1;
while (pos !== -1) {
  console.log(`\nOccurrence ${count}:`);
  console.log(html.substring(Math.max(0, pos - 200), pos + 200));
  pos = html.indexOf('>G<', pos + 1);
  count++;
}
