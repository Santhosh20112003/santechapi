const router = require('express').Router();
const axios = require('axios');
const giphycheck = require('../check/giphy');


router.route('/stickers/:q').get(giphycheck, async (req, res) => {
	const name = req.params.q;
	try {
	  if (!name) {
		return res.status(402).json("param required for fetching stickers.");
	  }
  
	  const response = await axios.get(`https://api.giphy.com/v1/stickers/search`, {
		params: {
		  api_key: "MLobe1GNb397dCWa1nT87zd74IticDR7",
		  q: name
		}
	  });
  
	  if (response.data.data.length > 0) {
		res.status(200).json(response.data);
	  } else {
		res.status(400).json({ message: "Keyword Not Found" });
	  }
	} catch (err) {
	  res.status(500).json("Error Occurred in Backend");
	}
  });

router.route('/giphy/:q').get(giphycheck, async (req, res) => {
	const name = req.params.q;
	try {
	  if (!name) {
		return res.status(402).json("param required for fetching Giphy.");
	  }
  
	  const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
		params: {
		  api_key: "MLobe1GNb397dCWa1nT87zd74IticDR7",
		  q: name
		}
	  });
  
	  if (response.data.data.length > 0) {
		res.status(200).json(response.data);
	  } else {
		res.status(400).json({ message: "Keyword Not Found" });
	  }
	} catch (err) {
	  res.status(500).json("Error Occurred in Backend");
	}
  });


module.exports = router;