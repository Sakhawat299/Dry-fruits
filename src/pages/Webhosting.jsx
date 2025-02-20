import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Cloud, Security, Speed, SupportAgent } from '@mui/icons-material';

const Webhosting = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5, backgroundColor: '#e3f2fd', color: '#0d47a1' }}>
      <Box textAlign="center" py={5}>
        <Cloud sx={{ fontSize: 60, color: "#1976d2" }} />
        <Typography variant="h3" gutterBottom>
          Askari Web Hosting
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Reliable and secure web hosting services.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ backgroundColor: '#fff', color: '#0d47a1' }}>
            <CardContent>
              <Speed color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" gutterBottom>
                High-Speed Hosting
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Lightning-fast servers for seamless performance.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ backgroundColor: '#fff', color: '#0d47a1' }}>
            <CardContent>
              <Security color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" gutterBottom>
                Secure & Reliable
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Your data is safe with our top-notch security measures.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ backgroundColor: '#fff', color: '#0d47a1' }}>
            <CardContent>
              <SupportAgent color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" gutterBottom>
                24/7 Support
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Our expert team is available anytime to assist you.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box textAlign="center" py={5}>
        <Typography variant="h4" gutterBottom>
          Get the Best Web Hosting for Your Business
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default Webhosting;