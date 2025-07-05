import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">solora.ai</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Service</a></li>
      </ul>
      <button className="demo-btn">Demo</button>
    </nav>
  );
};

export default Navbar;
