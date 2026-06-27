const net = require('net');
const s = net.createServer();
s.on('error', () => { console.log('PORT 3000 IN USE'); process.exit(0); });
s.listen(3000, () => { console.log('PORT 3000 FREE'); s.close(); process.exit(0); });