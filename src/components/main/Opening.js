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
        <Profile />
        <Experience />
      </div>
    </div>
  );
}

export default Opening;
