const router = require('express').Router();
const jokescheck = require('../check/jokes');
const jokes = require('../models/jokes.model');


router.route('/').get(jokescheck,(req, res) => {
  jokes.find()
	.then(jokes => res.json(jokes))
	.catch(err => res.status(400).json('Error retrieving the jokes' + err));
 
});


module.exports = router;