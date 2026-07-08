const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\91836\\PERSONAL\\Highlinear\\src\\App.jsx', 'utf8');

const regex = /.{0,20}About the project.{0,20}/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log(`\nMatch at ${match.index}:`);
  console.log(match[0]);
}
