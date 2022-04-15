//file:///D:/Downloads/Node_JS/JavaScript/Выразительный%20JavaScript%20(Хавербеке).pdf
const fs = require ('fs')
const readline = require('readline'); 

console.log("Работа с Stream");

function byte2string(array){
	var result = "";
	for(var i = 0; i < array.length; ++i){
		result+= (String.fromCharCode(array[i]));
	}
	return result;
}

/*
;(async () => {
    //const fileStream = fs.createReadStream('file1')
    const fileStream = fs.createReadStream('10_Stream\\file2')
    for await (const arr of fileStream) {
        console.log(arr);
        console.log(byte2string(arr));
    }
}
)()
*/



/*
//fs.stat('/Users/flavio/test.txt', (err, stats) => {
fs.stat('10_Stream\\file2', (err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('filesize = ', stats.size);
  })
*/

const f_log = function(err, stats) {
    console.log(typeof(stats))
    console.log('filesize=', stats.size)
}

f_log('as','as')
fs.stat('10_Stream\\file2', f_log)