var	express		= require('express');
var router		= express.Router();
var userModel	= require.main.require('./models/user-model');
//Login


router.get('/',function(req,res){
	console.log("Login Requested");
	res.render('login/login');
});
router.post('/',function(req,res){
	var user={
		username	: req.body.username,
		password	: req.body.password,		
	}
	userModel.validate(user,function(status){
		var type = JSON.stringify(result.type.toString());
		if(type=='"Admin"'){
			    req.session.username = req.body.username;
			    res.redirect('/adminprofile');		
		}
		else{			
			res.redirect('/login');
		}
	});
});

//Registration
router.get('/registration',function(req,res){
	console.log("Requested : Registration");
	res.render('login/registration');
});
router.post('/registration',function(req,res){
	var user={
		username	: req.body.username,
		password	: req.body.password,
		type		: req.body.type,
	}
	userModel.insert(user,function(status){
		if(status){
			res.redirect('/login');
		}
		else{
			res.redirect('/login/registration');
				
		}
	});
});



module.exports = router;