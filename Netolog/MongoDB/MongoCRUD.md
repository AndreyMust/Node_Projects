C:\Node_Projects\11_MongoDB>node Books_App.js
{
  acknowledged: true,
  insertedId: new ObjectId("628a21e1b771258fcd903e3f")
}

C:\Node_Projects\11_MongoDB>node Books_App.js
{
  acknowledged: true,
  insertedId: new ObjectId("628a22a3fac0d1d46fe430ef")
}

let book1 = {title: "Mongo for kids", description: "как установить БД", authors: "Иванов и Ко"};
const books = db.collection("books");
books.insertOne(book1);

books.findOneAndUpdate( {title: "Mongo for kids"},     // критерий выборки
                        {$set: {authors: "Иванов и Петров", listCount: 122}});

books.find({title: "Mongo for kids"}).limit(5);

books.deleteOne({title: "Mongo for kids"});


