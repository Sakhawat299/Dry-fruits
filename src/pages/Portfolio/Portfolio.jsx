import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Work, Code, Build } from '@mui/icons-material';

const Portfolio = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5, color: 'white' }}>
      <Box textAlign="center" py={5}>
        <Work sx={{ fontSize: 60, color: "#fbc02d" }} />
        <Typography variant="h3" gutterBottom>
          My Portfolio
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Showcasing my work and projects.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get in Touch
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ backgroundColor: '#1e1e1e', color: 'white' }}>
            <CardContent>
              <Code color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" gutterBottom>
                Web Development
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Creating modern and responsive web applications.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ backgroundColor: '#1e1e1e', color: 'white' }}>
            <CardContent>
              <Build color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" gutterBottom>
                Software Solutions
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Developing custom software solutions for businesses.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box textAlign="center" py={5}>
        <Typography variant="h4" gutterBottom>
          Ready to Work Together?
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Contact Me
        </Button>
      </Box>
    </Container>
  );
};

export default Portfolio;
