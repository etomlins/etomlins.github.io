import React from 'react';
import Sidebar from './Sidebar';
import NewsSidebar from './NewsSidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; 

function ForYou() {
  const showTweet = (element) => {
  };

  return (
    <div className="container-fluid p-0 m-0">
      <span className="d-block border border-secondary bg-light">
        <ul className="nav justify-content-center">
          <img src="/imgs/logo.png" alt="Logo" className="logo" />
          <li className="nav-item">
            <a href="/foryou" className="nav-link active">for you</a>
          </li>
          <li className="nav-item">
            <a href="/following" className="nav-link">following</a>
          </li>
          <input type="text" placeholder="Search..." className="search-bar d-none d-md-block" />
        </ul>
      </span>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-offset-2 col-md-8 col-sm-12" id="main-content">
            <span className="d-block border border-secondary" data-bs-toggle="modal" data-bs-target="#tweet-modal" onClick={showTweet}>
              <div className="card border-0">
                <div className="card-body">
                  <img src="/imgs/profile-pic.png" alt="Profile Picture" className="profile-pic" />
                  <h2 className="card-title">Ellen @ellen</h2>
                  <p className="card-text">This is the for you page, filled with bleats we think you'll like.</p>
                </div>
              </div>
            </span>
            <span className="d-block border border-secondary" data-bs-toggle="modal" data-bs-target="#tweet-modal" onClick={showTweet}>
              <div className="card border-0">
                <div className="card-body">
                  <img src="/imgs/profile-pic.png" alt="Profile Picture" className="profile-pic" />
                  <h2 className="card-title">Ellen @ellen</h2>
                  <p className="card-text">What's up! Welcome to bitter.</p>
                </div>
              </div>
            </span>
          </div>
          <NewsSidebar />
        </div>
      </div>
      <div className="modal fade modal-lg" id="tweet-modal" tabIndex="-1" aria-labelledby="tweetModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src="" alt="Profile Picture" className="profile-pic" id="modal-prof" />
              <h2 className="card-title" id="modal-card-title"></h2>
              <p className="card-text" id="modal-card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForYou;
