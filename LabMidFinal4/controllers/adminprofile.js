var	express		= require('express');
var router		= express.Router();
var userModel	= require.main.require('./models/user-model');
var app         = express();

router.get('/',function(req,res){
	userModel.getByUname(req.session.username,function(result){
		res.render('admin/adminprofile',{user: result});
	});
});

module.exports = router;