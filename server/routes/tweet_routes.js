const express = require('express');
const { getAllTweets, createTweet } = require('../controllers/tweet_controller');

const router = express.Router();

router.get('/tweets', getAllTweets);
router.post('/tweets', createTweet);

module.exports = router;
