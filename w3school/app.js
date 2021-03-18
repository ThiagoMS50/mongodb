var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/dbexemplo');

mongoose.connection.on('connected', function(){
    console.log("=== connected ===");
});

mongoose.connection.on('error', function(){
    console.log("=== error ===");
});

mongoose.connection.on('disconnected', function(){
    console.log("=== disconnected ===");
});

var schema = mongoose.Schema;

var usuario = schema({
    nome: {type: String, required: true},
    email: {type: String, required: true}
});