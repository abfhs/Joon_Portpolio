import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="connect">
          <h3>Let's Connect</h3>
          <p>I'm creating a guide on how to design a portfolio site to land your dream job. Sign up to get it first.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="links">
          <a href="#instagram">Instagram</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
