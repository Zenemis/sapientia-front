// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </header>
  );
}

export default Header;
