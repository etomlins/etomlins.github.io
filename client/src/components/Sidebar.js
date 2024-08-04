import React from 'react';

function Sidebar() {
  return (
    <div className="d-none d-md-block col-md-2 sidebar border border-secondary">
      <ul>
        <li><a href="src.html" tabindex="0">Home</a></li>
        <li><a href="https://google.com" tabindex="0">Search</a></li>
        <li><a href="notifications.html" tabindex="0">Notifications</a></li>
        <li><a href="messages.html" tabindex="0">Messages</a></li>
        <li><a href="newprofile.html" tabindex="0">Profile</a></li>
        <li><a href="mailto:ellentomlins2026@u.northwestern.edu" tabindex="0">Contact me</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;

