const fs = require('fs');
let data = 'demo write data \n';

//with flaf A - append
const writerStream = fs.createWriteStream('output.txt', {'flags': 'a'});

writerStream.write(data, 'ascii');
writerStream.end();

writerStream.on('finish', () => {
	console.log("writerStream finish");
});

writerStream.on('close', () => {
	console.log("writerStream close");
});

writerStream.on('error', (err) => {
	console.log(err.stack);
});