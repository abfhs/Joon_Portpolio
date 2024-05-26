import React from 'react';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>이렇게 살았습니다</h1>
        <nav>
          <ul>
            <li><a href="#profile">프로필</a></li>
            <li><a href="#education">교육</a></li>
            <li><a href="#projects">프로젝트</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;