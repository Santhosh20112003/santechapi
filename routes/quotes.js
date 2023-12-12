const router = require('express').Router();
const axios = require('axios');
const quotescheck = require('../check/quotes');


router.route('/').get(quotescheck,(req, res) => {
  
	try{
		axios.get(`https://zenquotes.io/api/quotes`)
		.then((result)=>{
			res.status(200).json(result.data);
		})
		.catch(err=>{
			res.status(400).json({message:"Unable to fetch Quotes"});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
 
});


module.exports = router;