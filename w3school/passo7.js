var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 212222' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    console.log(obj.result.n); 

    if (err) {
        throw err;
    }else{
        console.log("1 document deleted");
    }
    db.close();
  });
});