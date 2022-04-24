const MongoClient = require("mongodb").MongoClient;
 
// ������� ������ MongoClient � �������� ��� ������ �����������
const mongoClient = new MongoClient("mongodb://localhost:27017/");
mongoClient.connect(function(err, client){
 
    if(err){
        return console.log(err);
    }
    // �������������� � ����� ������

	console.log('Connect-OK');
    client.close();
});