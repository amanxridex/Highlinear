const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\91836\\PERSONAL\\Highlinear\\src\\App.jsx', 'utf8');

const expMatch = html.match(/uppercase tracking-wider\">Experience In Real Estate[\s\S]{0,500}0\+/i);
if(expMatch) console.log("EXP:\n" + expMatch[0]);

const satMatch = html.match(/uppercase tracking-wider\">Satisfied Homeowners[\s\S]{0,500}0%/i);
if(satMatch) console.log("SAT:\n" + satMatch[0]);

const readyMatch = html.match(/uppercase tracking-wider\">Ready-To-Move-In Apartments[\s\S]{0,500}0\+/i);
if(readyMatch) console.log("READY:\n" + readyMatch[0]);
