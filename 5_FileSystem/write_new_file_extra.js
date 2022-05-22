const os = require('os');
const fs = require('fs-extra');

const file = 'logfile.txt';
const options = {flag: 'a'};

async function writeToFile(text) {
  await fs.outputFile(file, `${text}${os.EOL}`, options);
}

writeToFile('First line');
writeToFile('Second line');
writeToFile('Third line');
writeToFile('Fourth line');
writeToFile('Fifth line');