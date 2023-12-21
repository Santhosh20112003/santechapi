const router = require('express').Router();
const axios = require('axios');
const recipecheck = require('../check/recipe');


router.route('/search/:q').get(recipecheck,(req, res) => {
  const data = req.params.q;
  if(data){
	try{
		axios.get(`https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${data}`)
		.then((result)=>{
			if(result.status === 200 && result.data.hits.length > 1){
				res.status(200).json(result.data.hits);
			}
			else{
				res.status(400).json({message:"Recipe Not Found"});
			}
		})
		.catch(err=>{
			res.status(400).json({message:"Recipe Not Found"});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
  }
  else{
		res.status(402).json("param required for keyword based recipe fetch.");
  }
 
 
});


//appid=5d1f1d69
//apykey=afb240f49fcaaa3793bee185a90b0f7a

module.exports = router;