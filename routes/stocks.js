const router = require('express').Router();
const axios = require('axios');


router.route('/company/symbol/:q').get((req, res) => {
  const location = req.params.q;
  if(location){
	try{
		axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${location}.BSE&outputsize=full&apikey=8OQH0Z52QP92MMYI`)
		.then((result)=>{
			if(result.status === 200 ){
				res.status(200).json(result.data);
			}
			else{
				res.sendStatus(404);
			}
		})
		.catch(err=>{
			res.status(400).json({message:`Inavlid company symbol check the official BSE Symbol for ${location}`});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
  }
  else{
		res.status(402).json("param required for keyword based player details fetch.");
  }
 
 
});


module.exports = router;