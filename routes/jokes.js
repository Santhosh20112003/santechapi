const router = require('express').Router();
const jokes = require('../models/jokes.model');


router.route('/').get((req, res) => {
  jokes.find()
	.then(jokes => res.json(jokes))
	.catch(err => res.status(400).json('Error retrieving the joke documents: ' + err));
 
});


module.exports = router;