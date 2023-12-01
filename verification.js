const auth = require('./models/authentication.model');
function verify(req,res,next){
	const token = req.header("token");
  if(token){
	auth.find({
		"tokens" : token 
	   }).then(token =>{
		if(token.length > 0){
			console.log("User verified")
			next();
		}
		else{
			res.sendStatus(403);
		}
	   }).catch(err =>{
		res.sendStatus(400);
	   })
  }
  else{
	res.status(401).json("Api Key is Required");
  }
}

module.exports = verify;
