const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const bookScheme = new Schema({
    id: "string",
    title: "string",
    description: "string",
    authors: "string",
    favorite: "string",
    fileCover: "string",
    fileName: "string"
});
  

mongoose.connect("mongodb://localhost:27017/booksdb", { useUnifiedTopology: true, useNewUrlParser: true });
  
const Book = mongoose.model("Book", bookScheme);
const book = new Book({
    id: "101",
    title: "Book1",
    description: "The book1",
    authors: "Ivanov",
    favorite: "favorite",
    fileCover: "fileCover.jpg",
    fileName: "fileName"    
});
  
book.save(function(err){
    mongoose.disconnect();  // отключение от базы данных
      
    if(err) return console.log(err);
    console.log("Сохранен объект", book);
});
