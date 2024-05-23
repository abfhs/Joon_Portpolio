import React from 'react';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Kyson Dana</h1>
        <nav>
          <ul>
            <li><a href="#digital-design">Digital Design</a></li>
            <li><a href="#brand-design">Brand Design</a></li>
            <li><a href="#photo-video">Photo/Video</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
