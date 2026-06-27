const { spawn } = require('child_process');
const path = require('path');
const cwd = path.resolve(__dirname);
const p = spawn('npx.cmd', ['next', 'dev', '--port', '3000'], {
  cwd: cwd,
  detached: true,
  stdio: 'ignore'
});
p.unref();
console.log('WebBay dev server started, PID:', p.pid);
console.log('Visit: http://localhost:3000');
process.exit(0);