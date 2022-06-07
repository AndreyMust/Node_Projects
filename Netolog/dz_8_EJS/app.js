// подключение express
const express = require("express");
const bodyParser = require('body-parser')

// создаем объект приложения
const app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

const book33 = {
    id: 33,
    title: "Book33",
    description: "string"
}    
const book34 = {
    id: 34,
    title: "Book34",
    description: "string"
}    
const book35 = {
    id: 35,
    title: "Book35",
    description: "string"
}    

let books = [book33, book34, book35];

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){     
    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});

app.get("/hello", function(request, response){
    // отправляем ответ
    response.sendFile(__dirname + "/html/hello.html");
});


////////////////////////////////////////////////////////////////

//Получить массив книг
app.get('/books', (req, res) => {
    res.render("index", {books: books});
})

//получить книгу по id
app.get('/books/:id', (req, res) => {
    let book = books.find(el=> el.id == req.params.id );
    res.render("view", {book: book});
})

// изменить книгу
app.post('/edit_book', urlencodedParser, function (req, res) {
    console.log(req.body);
    let book = books.find(el=> el.id == req.body.id );
    book.title = req.body.title;
    book.description = req.body.description;
    res.render("index", {books: books});
})


//добавление новой книги 
app.get("/add_book", (req, res) => {    
    res.render("add_book");
})

//добавление новой книги 
app.post("/add_book", urlencodedParser, function (req, res) {    
    var newbook = Object();
    newbook.id = req.body.id;
    newbook['title'] = req.body.title;
    newbook['description'] = req.body.description;
    console.log(newbook);
    books.push(newbook);
    res.render("index", {books: books});
})

//удаление книги
app.post('/delete_book', urlencodedParser, function (req, res) {
    const curID = req.body.id;
    books = books.filter( el => el.id == curID ? false: true);
    //res.send(`Deleted book id =  ${req.params.id}`);
    console.log(`Deleted book id =  ${req.params.id}`);
    res.render("index", {books: books});
})

//выдача CSS файлов
app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "/css/style.css");
});

//Имитация логина
app.post("/api/user/login", function (req, res) {
    res.send('{ id: 1, mail: "test@mail.ru" }')
});

// начинаем прослушивать подключения на 3000 порту  
console.log('Start server..');
console.log(books);
app.listen(3000);