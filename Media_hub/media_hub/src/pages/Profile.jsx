import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { currentUser, setCurrentUser, setIsAuthenticated } = useContext(AuthContext);
  const [name, setName] = useState(currentUser?.name || '');
  const navigate = useNavigate();

  const handleSave = () => {
    const updated = { ...currentUser, name };
    localStorage.setItem('user', JSON.stringify(updated));
    setCurrentUser(updated);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>Profile</Typography>
      <Typography>Name:</Typography>
      <TextField fullWidth value={name} onChange={e => setName(e.target.value)} sx={{ mb: 2 }} />
      <Typography>Email: {currentUser?.email}</Typography>
      <Button variant="contained" onClick={handleSave} sx={{ mt: 2, mr: 2 }}>Save</Button>
      <Button color="error" onClick={handleLogout} sx={{ mt: 2 }}>Logout</Button>
    </Box>
  );
};

export default Profile;
