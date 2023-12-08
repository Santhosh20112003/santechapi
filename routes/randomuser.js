const router = require('express').Router();
const axios = require('axios');


router.route('/').get((req, res) => {
  
	try{
		axios.get(`https://randomuser.me/api/`)
		.then((result)=>{
			res.status(200).json(result.data);
		})
		.catch(err=>{
			res.status(400).json({message:"Unable to fetch Random user details"});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
 
});


module.exports = router;