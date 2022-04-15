const modulTimer = require('./timers.js');

console.log("Работа с таймером");


console.log('sayHello');
var sayHello = function(){
    console.log('Hello!!!');
}
setTimeout(sayHello, 3000);

//arrow function
console.log('sayHello_2');
var sayHello = () =>  console.log('Hello 2!!!');
setTimeout(sayHello, 3000);

modulTimer.myTimer();


