import React from 'react';
import { Container, Grid, TextField, Button, Typography, Paper, Box, Fade, Card } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationOn, Email, Phone, Subject, Business } from '@mui/icons-material'; // Importing icons
import Header2 from "../components/Header2"
const ContactUs = () => {
  // Coordinates for the map
  const position = [30.735062, 76.693488];

  return (<>
  <Header2/>
    <Fade in={true} timeout={1000}>
      <div>
        <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
          {/* Header Section */}
          <Typography variant="h2" align="center" sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '36px', marginBottom: '1rem', fontWeight: 'bold' }}>
            Contact Us
          </Typography>
          <Typography variant="h6" align="center" sx={{ fontFamily: 'Roboto, sans-serif', marginBottom: '2rem', color: 'text.secondary' }}>
           Drop us a message, and we'll get back to you as soon as possible!
          </Typography>

          {/* Contact Info Section */}
          <Grid container spacing={4} sx={{ marginBottom: '4rem' }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ padding: '2rem', boxShadow: 3, borderRadius: '10px', textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', marginBottom: '1rem', fontWeight: 'bold' }}>Address</Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: 'text.secondary' }}>
                  <LocationOn sx={{ verticalAlign: 'middle', marginRight: '8px', color: '#1976d2' }} />
                  1215 Lorem Ipsum, Ch 176080 <br />
                  Chandigarh, INDIA
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ padding: '2rem', boxShadow: 3, borderRadius: '10px', textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', marginBottom: '1rem', fontWeight: 'bold' }}>E-mail</Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: 'text.secondary' }}>
                  <Email sx={{ verticalAlign: 'middle', marginRight: '8px', color: '#f44336' }} />
                  info@LoremIpsum.com <br />
                  yourmail@gmail.com
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ padding: '2rem', boxShadow: 3, borderRadius: '10px', textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', marginBottom: '1rem', fontWeight: 'bold' }}>Office</Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', color: 'text.secondary' }}>
                  <Business sx={{ verticalAlign: 'middle', marginRight: '8px', color: '#4caf50' }} />
                  1215 Lorem Ipsum, Suite 100 <br />
                  Chandigarh, INDIA
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Contact Form Section */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Card sx={{ padding: '2rem', boxShadow: 3, borderRadius: '10px' }}>
                <Typography variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', marginBottom: '1rem', fontWeight: 'bold' }}>
                  Get in Touch
                </Typography>
                <form>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': { borderRadius: '8px' },
                          '& .MuiInputAdornment-root': { marginLeft: '8px' }
                        }}
                       
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': { borderRadius: '8px' },
                          '& .MuiInputAdornment-root': { marginLeft: '8px' }
                        }}
                       
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': { borderRadius: '8px' },
                          '& .MuiInputAdornment-root': { marginLeft: '8px' }
                        }}
                       
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': { borderRadius: '8px' },
                          '& .MuiInputAdornment-root': { marginLeft: '8px' }
                        }}
                      
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        sx={{
                          '& .MuiOutlinedInput-root': { borderRadius: '8px' },
                          '& .MuiInputAdornment-root': { marginLeft: '8px' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                          padding: '1rem',
                          fontSize: '1.1rem',
                          borderRadius: '8px',
                          textTransform: 'none',
                          '&:hover': { backgroundColor: 'primary.dark' }
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </Grid>

            {/* Map Section */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '400px', boxShadow: 3, borderRadius: '10px', overflow: 'hidden' }}>
                <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      Our office is located here!
                    </Popup>
                  </Marker>
                </MapContainer>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fade>
    </>
  );
};

export default ContactUs;
