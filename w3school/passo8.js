var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("xxx");
  dbo.collection("yyy").drop(function(err, delOK) {
    // console.info(delOK);
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});