// pages/index.tsx
import React from 'react';
import { Typography, Container, Box, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';

const Background = styled('div')({
  backgroundImage: 'url(https://source.unsplash.com/random/1920x1080)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Overlay = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '15px',
  padding: '30px',
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const Home: React.FC = () => {
  return (
    <Background>
      <Container maxWidth="sm">
        <Overlay elevation={3}>
          <Typography variant="h2" gutterBottom>
            WyGeeks
          </Typography>
          <Typography variant="h5" gutterBottom>
            We're launching soon. Stay tuned!
          </Typography>
          <Box sx={{ mt: 3, mb: 2 }}>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              fullWidth
              InputProps={{
                style: {
                  backgroundColor: '#fff',
                  borderRadius: '5px',
                },
              }}
            />
          </Box>
          <Button variant="contained" color="primary">
            Notify Me
          </Button>
        </Overlay>
      </Container>
    </Background>
  );
};

export default Home;
