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
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
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
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<ProtectedRoute component={MainContent} />} />
              <Route path="/foryou" element={<ProtectedRoute component={ForYou} />} />
              <Route path="/following" element={<ProtectedRoute component={Following} />} />
              <Route path="/notifications" element={<ProtectedRoute component={Notifications} />} />
              <Route path="/messages" element={<ProtectedRoute component={Messages} />} />
              <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
            </Routes>
            <NewsSidebar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
