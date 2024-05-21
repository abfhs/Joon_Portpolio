import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <h1>Hello this is ...</h1>
      <a href="mailto:example@example.com" className="email-icon">
        <FaEnvelope size={30} />
      </a>
    </header>
  );
};

export default Header;
