/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('c:/Google Antigravity Projects/WebBay/webbay_business_solutions/app');
let modifiedFilesCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // 1. Remove fontFamily at the start with trailing comma
    content = content.replace(/fontFamily:\s*(['"`]).*?\1\s*,\s*/g, '');
    
    // 2. Remove fontFamily at the end with leading comma
    content = content.replace(/,\s*fontFamily:\s*(['"`]).*?\1\s*/g, '');

    // 3. Remove style={{ fontFamily: "..." }} completely
    content = content.replace(/\s*style=\{\{\s*fontFamily:\s*(['"`]).*?\1\s*\}\}/g, '');

    // Sometimes they forget quotes? No, the output shows it's quoted.
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedFilesCount++;
        console.log(`Modified: ${file}`);
    }
});

console.log(`Total files modified: ${modifiedFilesCount}`);
