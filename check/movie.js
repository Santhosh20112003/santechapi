const auth = require('../models/authentication.model');
const jwt = require('jsonwebtoken');

function moviesseriescheck(req, res, next) {
  jwt.verify(req.headers.token, 'santhoshasjfaeyuea', function(err, decoded) {
    if (err) {
      res.status(401).json({ error: 'Invalid token' });
    } else {
      const email = decoded.email;
      auth.findOne({
        email: email
      }).then(token => {
        if (token && token.subscribed.includes('Movie & Series')) {
          next();
        } else {
          res.status(403).json({ error: 'User not subscribed to the Movie & Series API' });
        }
      }).catch(err => {
        res.status(400).send('Bad Request');
      });
    }
  });
}

module.exports = moviesseriescheck;