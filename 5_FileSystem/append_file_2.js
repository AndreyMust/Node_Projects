const fs = require('fs');
const os = require('os');
const path = require('path');

//const file = path.join(__dirname, 'demo', 'new.txt');
const file = path.join(__dirname, 'new.txt');

const save_log = function (str) {
	fs.appendFile(file, str + os.EOL , err => {
		if (err) throw new Error(err);
		console.log('Append Ok');
	});
}

save_log('qqq1');
save_log('qqq2');
save_log('qqq3');