const   router = require('express').Router();
const ecommercecheck = require('../check/ecommerce');
const Ecommerce = require('../models/ecommerce.model');

router.route('/').get(ecommercecheck,(req, res) => {
  Ecommerce.find()
    .then(ecommerces => res.json(ecommerces))
    .catch(err => res.status(400).json('Error retrieving the Ecommerce documents: ' + err));
});

router.route('/title').get(ecommercecheck,(req, res) => {
  Ecommerce.find({}, { title: 1 })
    .then(ecommerces => res.json(ecommerces))
    .catch(err => res.status(400).json('Error retrieving the titles: ' + err));
});

router.route('/images').get(ecommercecheck,(req, res) => {
  Ecommerce.find({}, { image: 1 })
    .then(ecommerces => res.json(ecommerces))
    .catch(err => res.status(400).json('Error retrieving the images: ' + err));
});

router.route('/category').get(ecommercecheck,(req, res) => {
  Ecommerce.find({}, { category: 1 })
    .then(ecommerces => res.json(ecommerces))
    .catch(err => res.status(400).json('Error retrieving the categories: ' + err));
});


module.exports = router;