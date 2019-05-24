var express = require("express");
var bodyParser = require('body-parser');

var connection = require('./config');
var app = express();


var loginController =  require('./controllers/login-controller');
var registerController = require('./controllers/register-controller');

app.use(bodyParser.urlencoded({extened :true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.get('/',function(req,res){
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/login.html',function(req,res){
    res.sendFile(__dirname + "/" + "login.html");
})

app.post('api/register', registerController.register);
app.post('/api/login', loginController.login);

console.log(loginController);

app.post('/controllers/register-controller',registerController.register);
app.post('/controllers/login-controller',loginController.login);
app.listen(8080);