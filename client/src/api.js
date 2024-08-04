import axios from 'axios';

export const fetchTweets = async (userId) => {
  try {
    const response = await axios.get(`/api/tweets?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tweets:", error);
    throw error;
  }
};

export const createTweet = async (tweet) => {
  try {
    const response = await axios.post('/api/tweets', tweet);
    return response.data;
  } catch (error) {
    console.error("Error creating tweet:", error);
    throw error;
  }
};
