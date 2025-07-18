import React, { useContext } from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);

  const sections = [
    { title: 'Posts', path: '/dashboard/posts' },
    { title: 'Users', path: '/dashboard/users' },
    { title: 'Media', path: '/dashboard/media' },
    { title: 'Profile', path: '/dashboard/profile' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome, {currentUser?.name}
      </Typography>
      <Grid container spacing={2}>
        {sections.map((sec) => (
          <Grid item xs={12} sm={6} md={3} key={sec.title}>
            <Card>
              <CardActionArea component={Link} to={sec.path}>
                <CardContent>
                  <Typography variant="h6">{sec.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;