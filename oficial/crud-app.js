const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const crud = require('./crud');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log('Connected successfully to server');
  
  const db = client.db(dbName);
  
  // crud.insert(db, function() {
  //   client.close();
  // });

  // crud.findDocuments(db, function() {
  //   client.close();
  // });

  crud.findDocumentsByQuerie(db, function() {
    client.close();
  });

});


const close = function(client) {
  client.close();
};