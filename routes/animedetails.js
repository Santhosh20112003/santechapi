const router = require('express').Router();
const axios = require('axios');
const animecheck = require('../check/animedetails');


router.route('/search/:q').get(animecheck,(req, res) => {
  const data = req.params.q;
  if(data){
	try{
		axios.get(`https://api.jikan.moe/v4/anime?q=${data}`)
		.then((result)=>{
			res.status(200).json(result.data);
		})
		.catch(err=>{
			res.status(400).json({message:"Anime Not Found"});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
  }
  else{
		res.status(402).json("param required for keyword based anime fetch.");
  }
 
 
});


module.exports = router;