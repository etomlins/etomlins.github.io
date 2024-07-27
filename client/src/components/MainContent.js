import React, { useState } from 'react';
import '../styles.css';

function MainContent() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() !== '') {
      setPosts([...posts, { username: 'Ellen @ellen', content: input }]);
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
