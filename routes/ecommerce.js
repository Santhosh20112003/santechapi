const router = require('express').Router();
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

// router.route("/add").post((req,res)=>{
// 	const id = req.body.id;
// 	const title = req.body.title;
// 	const price = Number(req.body.price);
// 	const description = Date.parse(req.body.description);
// 	const category = Date.parse(req.body.category);
// 	const image = Date.parse(req.body.image);
// 	const newEcommerce = new Ecommerce({id,title,price,description,category,image});
// 	newEcommerce.save().then(()=>{
// 	  res.json(' Item Added');
// 	}).catch((err)=>{
// 	  res.status(400).json('Error'+err)
// 	});
//   })

module.exports = router;