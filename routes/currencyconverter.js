const router = require('express').Router();
const axios = require('axios');


router.route('/:from/:to/:amount').get((req, res) => {
  const from = req.params.from;
  const to = req.params.to;
  const amount = req.params.amount;
  if(from && to && amount){
	try{
		axios.get(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
		.then((result)=>{
			res.status(200).json(result.data);
		})
		.catch(err=>{
			res.status(400).json({message:"player Not Found"});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
  }
  else{
		res.status(402).json("All params are Required in order to fetch the currency conversion result");
  }
 
 
});


module.exports = router;