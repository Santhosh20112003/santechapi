const router = require('express').Router();
const axios = require('axios');
const onlinegamescheck = require('../check/onlinegames');


router.route('/').get(onlinegamescheck,(req, res) => {

	try{
		axios.get(`https://www.freetogame.com/api/games?platform=browser`)
		.then((result)=>{
			res.status(200).json(result.data);
		})
		.catch(err=>{
			res.status(400).json({message:"Unable to fetch"});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  } 
});


module.exports = router;