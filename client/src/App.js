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
            <Switch>
              <Route path="/" exact component={MainContent} />
              <Route path="/foryou" component={ForYou} />
              <Route path="/following" component={Following} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/messages" component={Messages} />
              <Route path="/profile" component={Profile} />
            </Switch>
            <NewsSidebar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
