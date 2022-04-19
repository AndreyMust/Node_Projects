const readline = require('readline')

const input = readline.createInterface(process.stdin)

console.log('Загадано число в диапазоне от 1 до 100');

const rnd = Math.floor(Math.random() * 100);
console.log(rnd);

input.on('line', (data) => {
	//console.log('echo:', data)
	//input.close();
	if(data > rnd) console.log('Ваше число Больше');
	if(data < rnd) console.log('Ваше число Меньше');
	if(data == rnd) {
		console.log('Win Win !!!');
		input.close();
	}
	

	});

input.on('close', () =>console.log('This is the end'));