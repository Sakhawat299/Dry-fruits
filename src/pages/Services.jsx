import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import { LightMode, Business, Support, Verified } from "@mui/icons-material";

const Services = () => {
  return (
    <Container >
    
      <Box textAlign="center" py={5}>
        <LightMode sx={{ fontSize: 60, color: "#fbc02d" }} />
        <Typography variant="h3" gutterBottom>
          Our Askari Services
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Providing high-quality solutions  your business needs.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Box>

    
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Business color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" gutterBottom>
                Business Dry fruites
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Expert guidance to help you scale and optimize operations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Support color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" gutterBottom>
                24/7 Support
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Dedicated support team available round the clock.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Verified color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" gutterBottom>
                Quality Assurance
              </Typography>
              <Typography variant="body2" color="">
                Ensuring top-notch quality in every project we handle.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      
      <Box textAlign="center" py={5}>
        <Typography variant="h4" gutterBottom>
          Ready to Elevate Your Business?
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Contact Us Now
        </Button>
      </Box>
    </Container>
  );
};

export default Services;