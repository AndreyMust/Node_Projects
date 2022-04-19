const fs = require('fs');
const os = require('os');
const path = require('path');

//const file = path.join(__dirname, 'demo', 'new.txt');
const file = path.join(__dirname, 'new.txt');
const content = os.EOL + 'Append content';

fs.appendFile(file,content,err => {
	if (err) throw new Error(err);
	console.log('Append Ok');
});