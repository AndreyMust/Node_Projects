console.log("Hello world - функция с конструктором");

function User(name, age){    
    this.name = name;
    this.age = age;
    this.displayInfo = function(){         
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
}

let user = new User("Ivanov", 25);
user.displayInfo();
