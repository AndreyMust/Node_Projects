const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
 
mongoClient.connect(function(err, client){
      
    const db = client.db("booksdb");
    db.collection("books").deleteMany({}, function(err, result){              
        console.log(result);
        client.close();
    });
});