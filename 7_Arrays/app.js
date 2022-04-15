console.log("Работа с Массивом");

var arr1 = new Array();
var arr2 = [];

console.log(typeof arr1);

console.log(Array.isArray(arr1)); //true
console.log('Это массив ? - ', Array.isArray(arr2)); //true

var arrPets = ['cat','doc', 'bat'];
console.log('Размер массива: ', arrPets.length);

arrPets.push('horse');

for( var i = 0; i < arrPets.length; i++) {
    console.log('Элемент ', i, ' = ', arrPets[i]);
}

//new for
for (let pet of arrPets) {
    console.log(pet)
}


var arr_number = [3,6,2,8,5,9,1];
arr_number.sort();

console.log(arr_number);


// use arguments
console.log('Using iteration of arguments')
function sum_iterable() {
    var sum = 0;
    for (x of arguments) {
        sum += x;
    }
    return sum;
}

console.log(sum_iterable(1, 2, 3, 4, 5));

console.log ('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
console.log ('Functions call test')
console.log ('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

const fun1 = function(a) {
    return a + 2;
}

function fun2(a, b) {
    return a + b;
}

let fun3 = (a, b) => a + b

console.log(fun1(3)); // function 
console.log(fun2(3, 4)); // function 
console.log(fun3(3, 4)); //Arraw function 
