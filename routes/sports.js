const router = require('express').Router();
const axios = require('axios');
const sportscheck = require('../check/sports');


router.route('/player/:q').get(sportscheck,(req, res) => {
  const location = req.params.q;
  if(location){
	try{
		axios.get(`https://thesportsdb.com/api/v1/json/3/searchplayers.php?p=${location}`)
		.then((result)=>{
			res.status(200).json(result.data);
		})
		.catch(err=>{
			res.status(400).json({message:"player Not Found"});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
  }
  else{
		res.status(402).json("param required for keyword based player details fetch.");
  }
 
 
});


module.exports = router;