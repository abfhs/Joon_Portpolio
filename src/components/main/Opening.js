import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Experience from './Experience';
import '../../styles/Opening.css';

function Opening() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <div className="profile-container">
          <Profile />
        </div>
        <div className="intro">
          <h2>About Me</h2>
          <p>Short self-introduction goes here.</p>
        </div>
      </div>
      <Experience />
    </div>
  );
}

export default Opening;
