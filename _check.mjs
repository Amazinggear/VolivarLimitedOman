import { existsSync } from 'fs';
const p = existsSync('node_modules');
console.log(p ? 'OK modules exist' : 'NO node_modules found');