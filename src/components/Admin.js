// src/components/Admin.js
import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Lógica de autenticação (substitua com sua própria lógica)
    if (username === 'seu-usuario' && password === 'sua-senha') {
      setLoggedIn(true);
    } else {
      alert('Login inválido. Tente novamente.');
    }
  };

  return (
    <div className="admin-container">
      <h2>login</h2>
      {loggedIn ? (
        <p>Bem-vindo, {username}!</p>
      ) : (
        <div className="admin-form">
          <label className="form-label">
            usuário:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
          </label>
          <label className="form-label">
            senha:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </label>
          <button onClick={handleLogin} className="form-button">
            entrar
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin;
