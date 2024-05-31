import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/PasswordPromt.css';
import { useAuth } from '../main/AuthContext';

const PasswordPrompt = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://3.38.213.215:6600/verify-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });
      const result = await response.json();
      if (result.success) {
        login();
        navigate('/building-scraping');
      } else {
        alert('비밀번호가 틀렸습니다.');
      }
    } catch (error) {
      console.error('Error verifying password:', error);
      alert('서버 오류가 발생했습니다.');
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