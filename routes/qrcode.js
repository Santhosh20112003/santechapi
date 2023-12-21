const router = require('express').Router();
const axios = require('axios');
const newscheck = require('../check/qrcode');


router.route('/:size/:q').get(newscheck,(req, res) => {
  const location = req.params.q;
  const size = req.params.size;
  if(location && size){
	try{
		axios.get(`https://api.qrserver.com/v1/create-qr-code/?data=${location}&size=${size}`)
		.then((result)=>{
			res.status(200).json(result.data);
		})
		.catch(err=>{
			res.status(400).json({message:"Unable to Convert."});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
  }
  else{
		res.status(402).json("param required for generate qr code.");
  }
 
 
});


module.exports = router;