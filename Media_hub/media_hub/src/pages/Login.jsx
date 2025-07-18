import React, { useState, useContext } from 'react';
import { TextField, Button, Typography, Box, Alert ,Link} from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { setIsAuthenticated, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored = JSON.parse(localStorage.getItem('user'));
    if (stored?.email === form.email && stored.password === form.password) {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      setCurrentUser(stored);
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <TextField fullWidth label="Email" name="email" value={form.email} onChange={handleChange} sx={{ mb: 2 }} />
      <TextField fullWidth type="password" label="Password" name="password" value={form.password} onChange={handleChange} sx={{ mb: 2 }} />
      <Button type="submit" variant="contained" fullWidth>Login</Button>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
  Don’t have an account?{' '}
   <Link component={RouterLink} to="/signup" underline="hover">
     Sign Up
   </Link>
 </Typography>
    </Box>
  );
};

export default Login;