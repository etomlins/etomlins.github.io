import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import NewsSidebar from './components/NewsSidebar';
import ForYou from './components/ForYou';
import Following from './components/Following';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/foryou" element={<ForYou />} />
              <Route path="/following" element={<Following />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <NewsSidebar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
