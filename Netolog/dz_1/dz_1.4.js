const readline = require('readline')
const fs = require('fs');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


const input = readline.createInterface(process.stdin)

//console.log(argv);
//console.log(argv.logfile);
const logfile = argv.logfile;

console.log('Загадано число в диапазоне от 1 до 2');

var rnd = Math.floor(Math.random() * 2) + 1;
console.log(rnd);

// fs.EOL
const save_file = function(string) {
	fs.appendFile(argv.logfile, string, function (err) {
	if (err) throw err;
//	console.log('Save ok!');
});

}



//save_file('start' + '\r\n');

input.on('line', (data) => {

	if(data == rnd) {
		console.log('You are Win!');
		save_file('You are Win!' + '\r\n');
		input.close();
	} else {
		console.log('You are Lose');
		save_file('You are Lose' + '\r\n');
		input.close();
	}	
});

input.on('close', () =>console.log('This is the end'));
