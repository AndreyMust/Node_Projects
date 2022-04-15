const os = require("os");
const myModul = require('./myfirstmodule');
//var hw = require('./hello-world.js');

console.log("Hello world");

// получим имя текущего пользователя
let userName = os.userInfo().username; 
console.log(userName);

//импорт из внешнего модуля
console.log(myModul.myDateTime());
//hw('ANDREW');