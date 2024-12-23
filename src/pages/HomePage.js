import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  Divider,
} from '@mui/material';

const HomePage = () => {
  return (
    <>
      {/* Header */}
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Census of India
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Welcome Section */}
      <Container>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to the Census of India
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Discover insights and data about the diverse population of India. Explore key statistics, historical data, and demographic trends.
          </Typography>
        </Box>

        {/* Introduction Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            What is the Census of India?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            The Census of India is a decennial exercise that captures demographic data on the population of India. It includes information on various factors such as population, education, housing, health, and employment. The Census provides essential insights for policymaking, resource allocation, and social development.
          </Typography>
        </Box>

        {/* Recent Data Insights */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Recent Data Insights
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: 'Total Households', value: '300 Million' },
              { title: 'Literacy Rate', value: '77.7%' },
              { title: 'Urban Population', value: '35%' },
            ].map((stat, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Paper elevation={3}>
                  <Box p={3} textAlign="center">
                    <Typography variant="h6" gutterBottom>
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" color="primary">
                      {stat.value}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Graphical Insights (Placeholder) */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Graphical Insights
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Below are graphical representations of some of the key findings from the Census data:
          </Typography>
          <Box sx={{ height: 300, backgroundColor: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Placeholder for a graph/chart */}
            <Typography variant="h6" color="textSecondary">
              Graphs/Charts would go here
            </Typography>
          </Box>
        </Box>

        {/* Key Statistics Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Key Statistics
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: 'Total Population', value: '1.4 Billion' },
              { title: 'Languages Spoken', value: '22 Official Languages' },
              { title: 'States and UTs', value: '28 States, 8 UTs' },
            ].map((stat, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Paper elevation={3}>
                  <Box p={3} textAlign="center">
                    <Typography variant="h6" gutterBottom>
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" color="primary">
                      {stat.value}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Navigation Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Explore More
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: 'Demographics', description: 'Explore population data and trends.', link: '/demographics' },
              { title: 'Census History', description: 'Learn about the history of the Indian Census.', link: '/history' },
              { title: 'Contact Us', description: 'Get in touch for more information.', link: '/contact' },
            ].map((navItem, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {navItem.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {navItem.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={navItem.link}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Footer Section */}
        <Box sx={{ mt: 4, textAlign: 'center', backgroundColor: '#f4f4f4', padding: 2 }}>
          <Typography variant="body1" color="textSecondary">
            &copy; 2024 Census of India. All rights reserved.
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="textSecondary">
            Contact: info@censusofindia.gov.in | Phone: +91 123 456 7890
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
