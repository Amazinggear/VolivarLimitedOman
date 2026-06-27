const fs = require('fs');
const html = fs.readFileSync('code.html', 'utf8');

// 1. Extract and update tailwind.config.ts
const tailwindConfigMatch = html.match(/tailwind\.config\s*=\s*(\{[\s\S]*?\})\s*<\/script>/);
if (tailwindConfigMatch) {
  const configObj = tailwindConfigMatch[1];
  const newConfig = `import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,html}',
    './components/**/*.{js,ts,jsx,tsx,mdx,html}',
    './app/**/*.{js,ts,jsx,tsx,mdx,html}',
    './*.html'
  ],
  darkMode: 'class',
  ${configObj.slice(1, -1)}
};
export default config;`;
  fs.writeFileSync('tailwind.config.ts', newConfig);
  console.log('Tailwind config updated.');
}

// 2. Extract and append <style> to globals.css
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
  const styles = styleMatch[1];
  let globalsCss = fs.readFileSync('app/globals.css', 'utf8');
  if (!globalsCss.includes('glass-card')) {
    globalsCss += '\n' + styles;
    fs.writeFileSync('app/globals.css', globalsCss);
    console.log('globals.css updated.');
  }
}

// 3. Update app/page.tsx to render code.html directly
const pageTsx = `import fs from 'fs';
import path from 'path';

export default function HomePage() {
  const htmlPath = path.join(process.cwd(), 'code.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  const bodyMatch = htmlContent.match(/<body[^>]*>([\\s\\S]*?)<\\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : '';

  return (
    <div dangerouslySetInnerHTML={{ __html: bodyHtml }} suppressHydrationWarning />
  );
}
`;
fs.writeFileSync('app/page.tsx', pageTsx);
console.log('app/page.tsx updated.');
