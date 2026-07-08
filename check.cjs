const fs = require('fs');
const contentPath = 'C:\\Users\\91836\\.gemini\\antigravity-ide\\brain\\cdbf472f-62d9-4381-b9e6-bfeed466122e\\.system_generated\\steps\\40\\content.md';
let markdown = fs.readFileSync(contentPath, 'utf-8');

const htmlMatch = markdown.match(/<!DOCTYPE html>.*<html[^>]*>([\s\S]*?)<\/html>/i);
let rawHtml = htmlMatch[1];
const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : rawHtml;

const oldNav = '<ul class="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium"><li><a href="#about" class="hover:opacity-100 opacity-70 cursor-pointer transition-opacity">About</a></li><li><a href="#features" class="hover:opacity-100 opacity-70 cursor-pointer transition-opacity">Features</a></li><li><a href="#ready-to-move" class="hover:opacity-100 opacity-70 cursor-pointer transition-opacity">Offers</a></li><li><a href="#apartments" class="hover:opacity-100 opacity-70 cursor-pointer transition-opacity">Apartments</a></li></ul>';

console.log("Includes oldNav:", bodyContent.includes(oldNav));

// Check if overflow-hidden is preventing the dropdowns from being visible!
const headerMatch = bodyContent.match(/<header[^>]*>/i);
if (headerMatch) console.log("HEADER:", headerMatch[0]);

const navContainerMatch = bodyContent.match(/<nav[^>]*>/i);
if (navContainerMatch) console.log("NAV CONTAINER:", navContainerMatch[0]);

const navWrapperMatch = bodyContent.match(/<div class="[^"]*fixed[^"]*">/i);
if (navWrapperMatch) console.log("NAV WRAPPER:", navWrapperMatch[0]);

