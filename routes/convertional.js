const router = require('express').Router();
const axios = require('axios');
const bookscheck = require('../check/convertionalal');


router.route('/:q').get(bookscheck,(req, res) => {
  const data = req.params.q;
  if(data){
	try{
		axios.get(`http://api.brainshop.ai/get?bid=179920&key=C5WNBek8lQxDa1eC&uid=[uid]&msg=${data}`)
		.then((result)=>{
			res.status(200).json(result.data.cnt);
		})
		.catch(err=>{
			res.status(400).json({message:"Book Not Found"});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
  }
  else{
		res.status(402).json("param required for Convertional conversation.");
  }
 
 
});


module.exports = router;