const os = require("os");

console.log("Hello world");

// получим имя текущего пользователя
let userName = os.userInfo().username; 
console.log(userName);
