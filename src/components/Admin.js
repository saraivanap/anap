// src/components/Admin.js
import React, { useState } from 'react';

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
    <div>
      <h2>Página de Administração</h2>
      {loggedIn ? (
        <p>Bem-vindo, {username}!</p>
      ) : (
        <div>
          <label>
            Usuário:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Admin;
