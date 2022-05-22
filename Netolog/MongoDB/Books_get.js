const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);
 
mongoClient.connect(function(err, client){
      
    const db = client.db("booksdb");
    const collection = db.collection("books");
 
    if(err) return console.log(err);
      
    collection.find().toArray(function(err, results){
                 
        for(let i=0;i<results.length; i++) {
            console.log(results[i]);
        }
        
//        for (el of results) {
//            console.log('Name=', el.name, ' Age=', el.age)
//        }
        
        client.close();
    });
});