const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
 
mongoClient.connect(function(err, client){
      
    const db = client.db("booksdb");
    const books = db.collection("books");
 
    if(err) return console.log(err);
      
    books.find({title: "Mongo for kids"}).toArray(function(err, results){                         
        console.log(results);
        client.close();
    });
});