import React, { useState, useEffect } from 'react';
import { fetchTweets, createTweet } from '../api';
import { auth } from '../firebase';
import '../styles.css';

function MainContent() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  const userId = auth.currentUser?.uid;

  useEffect(() => {
    const getTweets = async () => {
      if (userId) {
        const tweets = await fetchTweets(userId);
        setPosts(tweets);
      }
    };
    getTweets();
  }, [userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input.trim() !== '') {
      const newTweet = { username: auth.currentUser.email, content: input, userId: userId };
      const response = await createTweet(newTweet);
      setPosts([...posts, response.tweet]);
      setInput('');
    }
  };

  return (
    <div className="col-md-offset-2 col-md-8 col-sm-12" id="main-content" tabIndex="1">
      <span className="d-block border border-secondary">
        <form className="new-post" id="tweet-form" onSubmit={handleSubmit}>
          <img src="/imgs/profile-pic.png" alt="Profile Picture" className="profile-pic" />
          <textarea
            placeholder="What's not happening?"
            className="post-input form-control-plaintext"
            id="tweet-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <button type="submit" className="post-button">Post</button>
        </form>
      </span>
      <div>
        {posts.map((post, index) => (
          <span key={index} className="d-block border border-secondary">
            <div className="card border-0">
              <div className="card-body">
                <img src="/imgs/profile-pic.png" alt="Profile Picture" className="profile-pic" />
                <h2 className="card-title">{post.username}</h2>
                <p className="card-text">{post.content}</p>
                <div className="tweet-actions">
                  <button className="retweet-button"><i className="fas fa-retweet"></i></button>
                  <button className="like-button"><i className="fas fa-heart"></i></button>
                </div>
              </div>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
