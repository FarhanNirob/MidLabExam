
var express		= require('express');
var bodyParser 	= require('body-parser');
var ejs 		= require('ejs');
var exSession 	= require('express-session');
var login 		= require('./controllers/login');
var admin       = require('./controllers/admin');

var app 		= express();


app.set('view engine','ejs');


app.use(bodyParser.urlencoded({extended :false}));
app.use(exSession({secret: 'my top sectet value',saveUninitialized : true,resave : false}));


app.use('/login',login);
app.use('/admin',admin);

//Routes for this
app.get('/',function(req,res){
	res.send('Welcome');
});


app.listen(3000,function(){
	console.log(" Node server Started at : 3000");
});