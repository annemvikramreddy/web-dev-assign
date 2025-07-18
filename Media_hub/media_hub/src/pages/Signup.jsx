// File: src/pages/Signup.jsx
import React, { useState, useContext } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import axios from 'axios'; // for future API calls
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const { setIsAuthenticated, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirm } = form;
    if (!name || !email || !password) return setError('All fields are required');
    if (password !== confirm) return setError('Passwords do not match');
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    setCurrentUser(user);
    navigate('/dashboard');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h4" gutterBottom>Sign Up</Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <TextField fullWidth label="Full Name" name="name" value={form.name} onChange={handleChange} sx={{ mb: 2 }} />
      <TextField fullWidth label="Email" name="email" value={form.email} onChange={handleChange} sx={{ mb: 2 }} />
      <TextField fullWidth type="password" label="Password" name="password" value={form.password} onChange={handleChange} sx={{ mb: 2 }} />
      <TextField fullWidth type="password" label="Confirm Password" name="confirm" value={form.confirm} onChange={handleChange} sx={{ mb: 2 }} />
      <Button type="submit" variant="contained" fullWidth>Sign Up</Button>
    </Box>
  );
};

export default Signup;