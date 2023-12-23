const router = require('express').Router();
const axios = require('axios');
const giphycheck = require('../check/giphy');


router.route('/stickers/:q').get(giphycheck,(req, res) => {
  const name = req.params.q;
  if(name){
	try{
		axios.get(`https://api.giphy.com/v1/stickers/search?api_key=MLobe1GNb397dCWa1nT87zd74IticDR7&q=${name}`)
		.then((result)=>{
			res.status(200).json(result.data.data);
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
		res.status(402).json("param required for fetching Stickers.");
  }
 
 
});

router.route('/giphy/:q').get(giphycheck,(req, res) => {
	const name = req.params.q;
	if(name){
	  try{
		  axios.get(`api.giphy.com/v1/giphy/search?api_key=MLobe1GNb397dCWa1nT87zd74IticDR7&q=${name}${name}`)
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
		  res.status(402).json("param required for fetching Giphy.");
	}
   
   
  });


module.exports = router;