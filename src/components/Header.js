// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bingo" className="nav-link">
              Bingo
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/adm" className="nav-link">
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
