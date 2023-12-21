const router = require('express').Router();
const axios = require('axios');
const imagescheck = require('../check/images');


router.route('/search/:q').get(imagescheck,(req, res) => {
  const location = req.params.q;
  if(location){
	try{
		axios.get(`http://source.unsplash.com/random/1000x900/?${location}`)
		.then((result)=>{
				res.send(result.data);			
		})
		.catch(err=>{
			res.status(400).json({message:"Error Occured during Fetching."});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
  }
  else{
		res.status(402).json("param required for keyword based image fetch.");
  }
 
 
});


module.exports = router;