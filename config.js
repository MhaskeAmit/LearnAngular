var mysql = require('mysql');
var connection = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : 'root',
    database :'shop'

});

connection.connect(function(err){

    if(!err){
        console.log("Database is connected");
    }
    else{
        console.log("Error occurred while connecting database");
    }

});

module.exports = connection;