const os = require('os');

console.log(os.EOL === '\n');
console.log(os.EOL === '\r\n');

console.log('Total Memory = ' + os.totalmem());
console.log('Free Memory = ' + os.freemem());
console.log('OS Type = ' + os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log('HOME DIR = ' + os.homedir());
console.log('HOST NAME = ' + os.hostname());
