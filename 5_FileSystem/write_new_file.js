const fs = require('fs');
const path = require('path');
//const file = path.join(__dirname, 'demo', 'new.txt');
const file = path.join(__dirname, 'new.txt');

const content = 'Hello! Write to file';
fs.writeFile(file,content, (err) => {
	if (err) throw new Error(err);
	console.log('Save to File - Ok');
})