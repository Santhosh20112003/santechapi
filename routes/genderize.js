const router = require('express').Router();
const axios = require('axios');
const genderizecheck = require('../check/genderize');


router.route('/search/:q').get(genderizecheck,(req, res) => {
  const name = req.params.q;
  if(name){
	try{
		axios.get(`https://api.genderize.io/?name=${name}`)
		.then((result)=>{
			res.status(200).json(result.data);
		})
		.catch(err=>{
			res.status(400).json({message:"Keyword Not Found"});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
  }
  else{
		res.status(402).json("param required for fetching gender.");
  }
 
 
});


module.exports = router;