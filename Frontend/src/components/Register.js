import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Login.css";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password,
      });

      setMessage(response.data);
    } catch (error) {
      setMessage(error.response?.data || 'An error occurred');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label>
            Username:
            <input type="text" className="login-input" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </label>
          <br />
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
          <button type="submit" className="login-button">Register</button>
        </form>
        <p>{message}</p>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;