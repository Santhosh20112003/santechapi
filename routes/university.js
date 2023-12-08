const router = require('express').Router();
const axios = require('axios');


router.route('/country/:q').get((req, res) => {
  const location = req.params.q;
  if(location){
	try{
		axios.get(`http://universities.hipolabs.com/search?country=${location}`)
		.then((result)=>{
			if(result.status === 200 && result.data.length > 1){
				res.status(200).json(result.data);
			}
			else{
				res.status(404).json({message:"Country Not Found"});
			}
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
		res.status(402).json("param required for keyword based university fetch.");
  }
 
 
});


module.exports = router;