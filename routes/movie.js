const router = require('express').Router();
const axios = require('axios');
const moviecheck = require('../check/movie');


router.route('/movie/:q').get(moviecheck, async (req, res) => {
	const name = req.params.q;
	try {
	  if (!name) {
		return res.status(402).json("param required for fetching Movie.");
	  }
  
	  const response = await axios.get(`https://www.omdbapi.com/`, {
		params: {
			apikey: "fc7acf34",
		    t: name,
			type:'movie'
		}
	  });
  
	  if (response.data.length > 0) {
		res.status(200).json(response.data);
	  } else {
		res.status(400).json({ message: "Movie Not Found" });
	  }
	} catch (err) {
	  res.status(500).json("Error Occurred in Backend");
	}
  });

  router.route('/series/:q').get(moviecheck, async (req, res) => {
	const name = req.params.q;
	try {
	  if (!name) {
		return res.status(402).json("param required for fetching Series.");
	  }
  
	  const response = await axios.get(`https://www.omdbapi.com/`, {
		params: {
			apikey: "fc7acf34",
		    t: name,
			type:'series'
		}
	  });
  
	  if (response.data.length > 0) {
		res.status(200).json(response.data);
	  } else {
		res.status(400).json({ message: "Series Not Found" });
	  }
	} catch (err) {
	  res.status(500).json("Error Occurred in Backend");
	}
  });


module.exports = router;