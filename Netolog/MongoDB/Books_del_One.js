const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
 
mongoClient.connect(function(err, client){
      
    const db = client.db("booksdb");
    db.collection("books").deleteOne({title: "Mongo for kids"}, function(err, result){              
        console.log(result);
        client.close();
    });
});