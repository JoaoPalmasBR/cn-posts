// pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/register/`, form);
      navigate('/login');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
      <h2>Register</h2>
      <input className="form-control mb-2" name="name" placeholder="Name" onChange={handleChange} required />
      <input className="form-control mb-2" name="username" placeholder="Username" onChange={handleChange} required />
      <input className="form-control mb-2" name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button className="btn btn-success w-100" type="submit">Register</button>
    </form>
  );
};

export default Register;