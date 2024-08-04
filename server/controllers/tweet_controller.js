const { db } = require('../config/firebase_config');

const getAllTweets = async (req, res) => {
  const { userId } = req.query;
  try {
    const tweetsSnapshot = await db.collection('tweets').where('userId', '==', userId).get();
    const tweets = tweetsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(tweets);
  } catch (error) {
    console.error("Error getting tweets:", error);
    res.status(500).json({ message: 'Error getting tweets', error });
  }
};

const createTweet = async (req, res) => {
  const { userId, content } = req.body;
  try {
    const newTweet = {
      userId,
      content,
      createdAt: new Date().toISOString(),
    };
    const tweetRef = await db.collection('tweets').add(newTweet);
    res.status(201).json({ id: tweetRef.id, ...newTweet });
  } catch (error) {
    console.error("Error creating tweet:", error);
    res.status(500).json({ message: 'Error creating tweet', error });
  }
};

module.exports = { getAllTweets, createTweet };
