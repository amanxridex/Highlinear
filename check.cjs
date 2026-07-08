const fs = require('fs');

const contentPath = 'C:\\Users\\91836\\.gemini\\antigravity-ide\\brain\\cdbf472f-62d9-4381-b9e6-bfeed466122e\\.system_generated\\steps\\40\\content.md';
let markdown = fs.readFileSync(contentPath, 'utf-8');

const htmlMatch = markdown.match(/<!DOCTYPE html>.*<html[^>]*>([\s\S]*?)<\/html>/i);
let rawHtml = htmlMatch[1];
const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : rawHtml;

// Extract mobile nav and desktop nav and combine them into a reusable header string
const mobileNavMatch = bodyContent.match(/<div class="md:hidden[^>]*>([\s\S]*?)<div class="absolute/i);
const desktopNavMatch = bodyContent.match(/<nav class="relative z-\[40\][^>]*>[\s\S]*?<\/nav>/i);

if (desktopNavMatch) {
  console.log("Desktop Nav Found length:", desktopNavMatch[0].length);
}

const footerMatch = bodyContent.match(/<footer[^>]*>[\s\S]*?<\/footer>/i);
if (footerMatch) {
  console.log("Footer Found length:", footerMatch[0].length);
}
