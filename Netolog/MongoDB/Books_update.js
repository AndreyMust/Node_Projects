const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
 
mongoClient.connect(function(err, client){
      
    const db = client.db("booksdb");
    const collection = db.collection("books");
    collection.findOneAndUpdate( {title: "Mongo for kids"},     // критерий выборки    
                                // значения для обновления                                     
                                 {$set: {authors: "Иванов и Петров", listCount: 122}}, 
                                 function(err, result) {              
        console.log(result);
        client.close();
    });
});