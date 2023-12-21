const router = require('express').Router();
const axios = require('axios');
const mapscheck = require('../check/maps');


router.route('/city/:q').get(mapscheck,(req, res) => {
  const data = req.params.q;
  if(data){
	try{
		axios.get(`https://nominatim.openstreetmap.org/search.php?format=jsonv2&city=${data}`)
		.then((result)=>{
			res.status(200).json(result.data);
		})
		.catch(err=>{
			res.status(400).json({message:"City Not Found"});
		})
	  }
	  catch(e){
		res.status(500).json("Error Occured in Backend")
	  }
  }
  else{
		res.status(402).json("param required for keyword based Location fetch.");
  }
 
 
});

router.route('/country/:q').get(mapscheck,(req, res) => {
	const data = req.params.q;
	if(data){
	  try{
		  axios.get(`https://nominatim.openstreetmap.org/search.php?format=jsonv2&country=${data}`)
		  .then((result)=>{
			  res.status(200).json(result.data);
		  })
		  .catch(err=>{
			  res.status(400).json({message:"Country Not Found"});
		  })
		}
		catch(e){
		  res.status(500).json("Error Occured in Backend")
		}
	}
	else{
		  res.status(402).json("param required for keyword based Location fetch.");
	}
   
   
  });

router.route('/state/:q').get(mapscheck,(req, res) => {
	const data = req.params.q;
	if(data){
	  try{
		  axios.get(`https://nominatim.openstreetmap.org/search.php?format=jsonv2&state=${data}`)
		  .then((result)=>{
			  res.status(200).json(result.data);
		  })
		  .catch(err=>{
			  res.status(400).json({message:"State Not Found"});
		  })
		}
		catch(e){
		  res.status(500).json("Error Occured in Backend")
		}
	}
	else{
		  res.status(402).json("param required for keyword based Location fetch.");
	}
   
   
  });

  router.route('/city/:q/street/:s').get(mapscheck,(req, res) => {
	const data = req.params.q;
	const street = req.params.s;
	if(data && street){
	  try{
		  axios.get(`https://nominatim.openstreetmap.org/search.php?format=jsonv2&city=${data}&street=${street}`)
		  .then((result)=>{
			  res.status(200).json(result.data);
		  })
		  .catch(err=>{
			  res.status(400).json({message:"Street Not Found"});
		  })
		}
		catch(e){
		  res.status(500).json("Error Occured in Backend")
		}
	}
	else{
		  res.status(402).json("param required for keyword based Location fetch.");
	}
   
   
  }); 



module.exports = router;