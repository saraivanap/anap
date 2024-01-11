// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Bingo from './components/Bingo';
import ViewPage from './components/ViewPage';
import AdminPage from './components/AdminPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bingo" element={<Bingo />} />
          <Route path="/adm" element={<AdminPage />} />
          <Route path="/view" element={<ViewPage />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
