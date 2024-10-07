const router = require('express').Router();
const axios = require('axios');
const weathercheck = require('../check/weather');


router.route('/location/:q').get(weathercheck,(req, res) => {
  const location = req.params.q;
  if(location){
	try{
		axios.get(`http://api.weatherapi.com/v1/current.json?key=4eb4ab0d897a459b9d962812230812&q=${location}`)
		.then((result)=>{
			res.status(200).json(result.data);
		})
		.catch(err=>{
			res.status(400).json({message:"Location Not Found"});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
  }
  else{
		res.status(402).json("param required for location based weather report.");
  }
 
 
});


module.exports = router;