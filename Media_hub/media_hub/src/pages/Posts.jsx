import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, TextField, CircularProgress, Box } from '@mui/material';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data.slice(0, 10));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <Box textAlign="center"><CircularProgress /></Box>;

  return (
    <Box>
      <TextField
        label="Search Posts"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      {filtered.map(post => (
        <Card key={post.id} sx={{ mb: 2 }}> 
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>
            <Typography>{post.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Posts;