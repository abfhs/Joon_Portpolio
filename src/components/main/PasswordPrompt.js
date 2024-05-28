import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/PasswordPromt.css';

const PasswordPrompt = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = 'helloworld';
    if (password.toLowerCase().replace(/\s+/g, '') === correctPassword) {
      navigate('/building-scraping');
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  return (
    <div className="password-prompt">
      <form onSubmit={handleSubmit} className="password-form">
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">입력</button>
      </form>
    </div>
  );
};

export default PasswordPrompt;