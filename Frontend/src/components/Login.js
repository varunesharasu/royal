import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token); // Save token in localStorage
      setMessage('Login successful');
    } catch (error) {
      setMessage(error.response?.data || 'An error occurred');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input type="email" className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <br />
          <label>
            Password:
            <input type="password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <br />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p>{message}</p>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;