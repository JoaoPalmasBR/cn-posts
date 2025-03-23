// pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/login/`, { username, password });
      localStorage.setItem('token', res.data.access_token);
      navigate('/');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <h2>Login</h2>
      <input className="form-control mb-2" placeholder="Username" onChange={e => setUsername(e.target.value)} required />
      <input className="form-control mb-2" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} required />
      <button className="btn btn-primary w-100" type="submit">Login</button>
    </form>
  );
};

export default Login;