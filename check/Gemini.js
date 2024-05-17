const auth = require('../models/authentication.model');
const jwt = require('jsonwebtoken');

const geminicheck = (req, res, next) => {
  jwt.verify(req.headers.token, 'santhoshasjfaeyuea', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const email = decoded.email;
    auth.findOne({ email: email })
      .then(token => {
        if (token && token.subscribed.includes('Jarvis Ai')) {
          next();
        } else {
          return res.status(403).json({ error: 'User not subscribed to the Jarvis Ai API' });
        }
      })
      .catch(err => {
        return res.status(400).send('Bad Request');
      });
  });
};

module.exports = geminicheck;