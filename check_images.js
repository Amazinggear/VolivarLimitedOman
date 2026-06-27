/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

async function checkUrl(url) {
  return new Promise((resolve) => {
    if (url.startsWith('/')) {
      const localPath = path.join(__dirname, 'public', url.split('?')[0]);
      resolve(fs.existsSync(localPath));
      return;
    }
    const reqLib = url.startsWith('https') ? https : http;
    const req = reqLib.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
      resolve(res.statusCode >= 200 && res.statusCode < 400);
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => { req.destroy(); resolve(false); });
    req.end();
  });
}

async function findBrokenImages() {
  const tsxFiles = [];
  function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file === 'node_modules' || file === '.next') continue;
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) walk(fullPath);
      else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) tsxFiles.push(fullPath);
    }
  }
  walk(path.join(__dirname, 'app'));

  const urlSet = new Set();
  const urlRegex = /(?:src|image)="([^"]+)"/g;
  for (const file of tsxFiles) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = urlRegex.exec(content)) !== null) {
      if (match[1].match(/\.(jpg|jpeg|png|webp|svg|avif|gif)(\?.*)?$/i) || match[1].includes('unsplash.com')) {
        urlSet.add(match[1]);
      }
    }
  }

  const urls = Array.from(urlSet);
  console.log('Checking ' + urls.length + ' unique image URLs...');
  
  const broken = [];
  for (const url of urls) {
    const isValid = await checkUrl(url);
    if (!isValid) broken.push(url);
  }
  
  if (broken.length === 0) console.log('No broken images found.');
  else console.log('Broken images:\n' + broken.join('\n'));
}

findBrokenImages();
