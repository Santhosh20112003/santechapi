const router = require('express').Router();
const axios = require('axios');
const bookscheck = require('../check/books');


router.route('/search/:q').get(bookscheck,(req, res) => {
  const data = req.params.q;
  if(data){
	try{
		axios.get(`https://openlibrary.org/search.json?q=${data}`)
		.then((result)=>{
			res.status(200).json(result.data);
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
		res.status(402).json("param required for keyword based Books fetch.");
  }
 
 
});


module.exports = router;