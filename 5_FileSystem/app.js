var fs = require('fs');
var os = require('os');
var path = require('path');

console.log("Работа с файлами");

console.log('Имя файла: ',path.basename(__filename));
console.log('Имя директории: ', path.dirname(__dirname));
console.log('Расширение файла: ', path.extname(__filename));
console.log('Parse: ', path.parse(__filename));

console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('CPU count: ', os.cpus().length);
console.log('Total Mem: ', Math.round(os.totalmem() / 1_000_000), ' MB');
console.log('Free Mem: ', Math.round(os.freemem() / 1_000_000), ' MB');
console.log('Uptime: ', (os.uptime() / 3600).toFixed(2), 'Hours');
