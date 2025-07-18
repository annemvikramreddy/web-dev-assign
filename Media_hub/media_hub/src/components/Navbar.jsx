import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Switch } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated, setCurrentUser, currentUser } = useContext(AuthContext);
  const { mode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setCurrentUser(null);
    navigate('/login');
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MediaHub
        </Typography>
        <Switch checked={mode === 'dark'} onChange={toggleTheme} />
        {isAuthenticated && (
          <>
            <Button color="inherit" component={Link} to="/dashboard/posts">Posts</Button>
            <Button color="inherit" component={Link} to="/dashboard/users">Users</Button>
            <Button color="inherit" component={Link} to="/dashboard/media">Media</Button>
            <Button color="inherit" component={Link} to="/dashboard/profile">Profile</Button>
            <Typography variant="body1" sx={{ mx: 2 }}>
              Welcome, {currentUser?.name}
            </Typography>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;