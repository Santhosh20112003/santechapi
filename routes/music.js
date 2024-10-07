const router = require('express').Router();
const musiccheck = require('../check/music');
const music = require('../models/music.model');

router.route('/').get(musiccheck,(req, res) => {
  music.find()
    .then(musics => res.json(musics))
    .catch(err => res.status(400).json('Error retrieving the music documents' + err));
});

router.route('/name').get(musiccheck,(req, res) => {
  music.find({}, { name: 1 })
    .then(musics => res.json(musics))
    .catch(err => res.status(400).json('Error retrieving the titles' + err));
});

router.route('/images').get(musiccheck,(req, res) => {
  music.find({}, { img: 1 })
    .then(musics => res.json(musics))
    .catch(err => res.status(400).json('Error retrieving the images' + err));
});

router.route('/audio').get(musiccheck,(req, res) => {
  music.find({}, { audio: 1 })
    .then(musics => res.json(musics))
    .catch(err => res.status(400).json('Error retrieving the categories' + err));
});


module.exports = router;