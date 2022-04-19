const fs = require('fs');
const zlib = require('zlib');

// архивация input.txt в input.txt.gz
fs.createReadStream('input.txt')    
	.pipe(zlib.createGzip())    
	.pipe(fs.createWriteStream('input.txt.gz'));

// распаковка input.txt.gz в input.txtt
//fs.createReadStream('input.txt.gz')    
//	.pipe(zlib.createGunzip())    
//	.pipe(fs.createWriteStream('input.txt'));