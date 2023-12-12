const router = require('express').Router();
const axios = require('axios');
const dictionarycheck = require('../check/words');


router.route('/search/:q').get(dictionarycheck,(req, res) => {
  const location = req.params.q;
  if(location){
	try{
		axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${location}`)
		.then((result)=>{
			res.status(200).json(result.data);
		})
		.catch(err=>{
			res.status(400).json({message:"Word Not Found"});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
  }
  else{
		res.status(402).json("param required for keyword based word fetch.");
  }
 
 
});


module.exports = router;