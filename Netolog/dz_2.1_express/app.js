// подключение express
const express = require("express");
// создаем объект приложения
const app = express();

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

let books = [ book33, book34,book35];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
     
    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});


//Получить массив книг
app.get('/api/books', (req, res) => {
    res.status(200).type('text/plain')
    res.send(books);
  })

//получить книгу по id
app.get('/api/books/:id', (req, res) => {
    res.status(200).type('text/plain');
    let book = books.find(el=> el.id == req.params.id );
    res.send(book);
})

//Имитация логина
app.post("/api/user/login", function (req, res) {
    res.send('{ id: 1, mail: "test@mail.ru" }')
});

//удаление книги
app.delete('/api/books/:id', (req, res) => {
    res.status(200).type('text/plain');
    const curID = req.params.id;
    books = books.filter( el => el.id == curID ? false: true);
    res.send(`Deleted book id =  ${req.params.id}`);
    console.log(`Deleted book id =  ${req.params.id}`);
})

//добавление новой книги
app.put('/api/books', (req, res) => {
    const book = req.body;
    books.push(book);
    console.log(book);
    console.log('------');    
    console.log(books);
    res.status(200).type('text/plain');
    res.send('Metod PUT book ok');
})



// начинаем прослушивать подключения на 3000 порту  
console.log('Start server..');
console.log(books);
app.listen(3000);