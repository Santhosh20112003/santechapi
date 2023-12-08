const router = require('express').Router();
const axios = require('axios');


router.route('/search/:q').get((req, res) => {
  const location = req.params.q;
  if(location){
	try{
		axios.get(`https://newsapi.org/v2/everything?q=${location}&apiKey=e68a7f5075ef4c758ebf72a969a1b671`)
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
		res.status(402).json("param required for keyword based news fetch.");
  }
 
 
});


module.exports = router;