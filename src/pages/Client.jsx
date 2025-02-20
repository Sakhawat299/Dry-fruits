import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { ShoppingBasket, LocalShipping, Verified, SupportAgent } from '@mui/icons-material';

const Client = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5, backgroundColor: '#f8f1e4', color: '#4e342e' }}>
      <Box textAlign="center" py={5}>
        <ShoppingBasket sx={{ fontSize: 60, color: "#d84315" }} />
        <Typography variant="h3" gutterBottom>
          Askari Dry Fruits
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Premium quality dry fruits, delivered fresh.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Shop Now
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ backgroundColor: '#fff', color: '#4e342e' }}>
            <CardContent>
              <Verified color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" gutterBottom>
                100% Organic
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Our dry fruits are naturally grown and handpicked for the best quality.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ backgroundColor: '#fff', color: '#4e342e' }}>
            <CardContent>
              <LocalShipping color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" gutterBottom>
                Fast Delivery
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We ensure quick and safe delivery to your doorstep.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ backgroundColor: '#fff', color: '#4e342e' }}>
            <CardContent>
              <SupportAgent color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" gutterBottom>
                24/7 Support
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Our team is available round the clock to assist you.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box textAlign="center" py={5}>
        <Typography variant="h4" gutterBottom>
          Ready to Enjoy Premium Dry Fruits?
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default Client;
