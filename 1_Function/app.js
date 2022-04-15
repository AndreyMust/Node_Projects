console.log("Работа с Функциями");

const fun1 = function(a) {
    return a + 2;
}

function fun2(a, b) {
    return a + b;
}

// Стрелочная функция
let fun3 = (a, b) => a + b;

console.log(fun1(3));    // function 
console.log(fun2(3, 4)); // function 
console.log(fun3(3, 4)); //Array function 

var cur_idx = 2;
var pet = cur_idx == 1 ? 'one' : 'two';
console.log(pet);