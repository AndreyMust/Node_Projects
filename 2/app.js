const os = require("os");

console.log("Hello world");

// получим имя текущего пользователя
let userName = os.userInfo().username; 
console.log(userName);

let currentDate = new Date();
function getMessage(name) {
    let hour = currentDate.getHours();
    if(hour > 16)
        return "Добрый вечер, " + name;
    else if(hour > 10)
        return "Добрый день, " + name;
    else
        return "Доброе утро, " + name;
}
console.log(getMessage(userName));
console.log('Day = ' + (currentDate.getDay()));
console.log(currentDate.getFullYear());

function User(name, age){    
    this.name = name;
    this.age = age;
    this.displayInfo = function(){         
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
}

let user = new User('Ivan', 33);
user.displayInfo();
