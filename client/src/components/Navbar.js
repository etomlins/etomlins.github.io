import React from 'react';

function Navbar() {
  return (
    <div className="container-fluid p-0 m-0">
      <span className="d-block border border-secondary bg-light">
        <ul className="nav justify-content-center">
          <img src="/imgs/logo.png" alt="Logo" className="logo" />
          <li className="nav-item">
            <a href="foryou.html" className="nav-link active">for you</a>
          </li>
          <li className="nav-item">
            <a href="following.html" className="nav-link">following</a>
          </li>
          <input type="text" placeholder="Search..." className="search-bar d-none d-md-block" />
        </ul>
      </span>
    </div>
  );
}

export default Navbar;
