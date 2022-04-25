const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const http = require('http');
const settings = require('./node_modules/settings.js');
const myApiKey = settings.myApiKey;
const city = argv.city;

const url = 'http://api.weatherstack.com/current?access_key=' + myApiKey + '&query=' + city;
//console.log(myApiKey);
//console.log(url);

http.get(url, (resp) => {

  let data = '';
  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
   console.log('Result:');
    //console.log(data);
    console.log(`Current temperature in ${JSON.parse(data).location.name} is ${JSON.parse(data).current.temperature}`);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});