import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const videos = [
  { id: 1, title: "React Intro", url: "https://www.videoLink.com/embed/react" },
  { id: 2, title: "JS Basics", url: "https://www.videLink.com/embed/js" },
];

const Media = () => {
  const [images, setImages] = useState([]);

  const fetchImages = useCallback(() => {
    axios.get('https://picsum.photos/v2/list')
      .then(res => setImages(res.data.slice(0, 12)))
      .catch(() => {});
  }, []);

  useEffect(() => { fetchImages(); }, [fetchImages]);

  return (
    <Box>
      <Button variant="contained" onClick={fetchImages} sx={{ mb: 2 }}>Refresh Gallery</Button>
      <Grid container spacing={2}>
        {images.map(img => (
          <Grid item xs={12} sm={6} md={3} key={img.id}>
            <Card>
              <CardMedia component="img" height="140" image={img.download_url} alt={img.author} />
              <CardContent>
                <Typography variant="body2">Author: {img.author}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>Videos</Typography>
        <Grid container spacing={2}>
          {videos.map(vid => (
            <Grid item xs={12} sm={6} key={vid.id}>
              <Card>
                <CardMedia component="iframe" height="200" image={vid.url} title={vid.title} />
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>{vid.title}</Typography>
                  <Button onClick={() => console.log('Liked', vid.id)}>Like</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Media;