//Declaration
var express		= require('express');
var bodyParser 	= require('body-parser');
var ejs 		= require('ejs');
var exSession 	= require('express-session');
var login 		= require('./controllers/login');

var app 		= express();

//Configuration
app.set('view engine','ejs');

//Middleware
app.use(bodyParser.urlencoded({extended :false}));
app.use(exSession({secret: 'my top sectet value',saveUninitialized : true,resave : false}));

//URL
app.use('/login',login);


//Routes for this
app.get('/',function(req,res){
	res.send('Welcome');
});

//Server startup
app.listen(3000,function(){
	console.log("Started : 3000");
});