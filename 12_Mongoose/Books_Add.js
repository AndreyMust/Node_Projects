const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
 
//let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
let book1 = {title: "Mongo for kids", description: "как установить БД", authors: "Иванов и Ко"};
let book2 = {title: "Old big Tree", description: "Когда деревья были большими", authors: "Петров и Ко"};
 
mongoClient.connect(function(err, client){
      
    const db = client.db("booksdb");
    const books = db.collection("books");
     
    books.insertOne(book1, function(err, results){              
        console.log(results);
        client.close();
    });


});