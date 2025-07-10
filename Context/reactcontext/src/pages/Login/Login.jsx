import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';;
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <h2>Login </h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Name 
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}