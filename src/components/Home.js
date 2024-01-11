// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1>anap</h1>
      <p>just an archive | BSI - UFRA | SAL - PGM.</p>
      <div>
        <a href="https://twitter.com/outroana" target="_blank" rel="noopener noreferrer">
          twitter
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/saraivanap/" target="_blank" rel="noopener noreferrer">
          instagram
        </a>
      </div>
      {/* Adicione um link para a página Bingo */}
      <div>
        <Link to="/bingo">bingo</Link>
      </div>
    </div>
  );
};

export default Home;
