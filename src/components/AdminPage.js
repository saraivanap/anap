// AdminPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    //  autenticação 
    if (password === 'azul') {
      navigate('/view');
    } else {
      setError('Senha incorreta. Tente novamente.');
    }
  };

  return (
    <div className="admin-page"> {/* aplicar o estilo */}
      <h2>área restrita</h2>
      <form>
        <label>
          senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleLogin}>Entrar</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AdminPage;
