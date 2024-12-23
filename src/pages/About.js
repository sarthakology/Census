import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  // Census Commissioners Data
  const censusCommissioners = [
    { year: '1881', name: 'Mr. W. W. Plauden' },
    { year: '1891', name: 'Mr. J. A. Bains' },
    { year: '1901', name: 'Mr. H. H. Risley & E. A. Gait' },
    { year: '1911', name: 'Mr. E. A. Gait' },
    { year: '1921', name: 'Mr. J. T. Marten' },
    { year: '1931', name: 'Mr. J. H. Hutton' },
  ];

  // Registrar Generals Data
  const registrarGenerals = [
    { period: '1949', name: 'Mr. M. W. M. Yeatts' },
    { period: '1949 - 1953', name: 'Mr. R. A. Gopalaswami' },
    { period: '1958 - 1968', name: 'Mr. Asok Mitra' },
    { period: '1968 - 1973', name: 'Mr. A. Chandra Sekhar' },
    { period: '1973 - 1977', name: 'Mr. R. B. Chari' },
    { period: '1977 - 1983', name: 'Mr. P. Padmanabha' },
  ];

  // Animation Variants
  const tableVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, type: 'spring' } },
  };

  // Hover effect for button and table rows
  const hoverEffect = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  // Styled Components for consistent design
  const paragraphStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#333",
    textAlign: "left",
    padding: "20px 30px",
    margin: "20px auto",
    width: "90%",
    maxWidth: "950px",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    border: "none",
    background: "#f9f9f9",
  };

  const hoverStyle = {
    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15)",
    transform: "scale(1.03)",
  };

  // Color scheme for the design
  const primaryColor = "#3498db";
  const secondaryColor = "#2c3e50";
  const backgroundGradient = "linear-gradient(to right, #f1f2f6, #dfe6e9)";
  const cardBackgroundColor = "#ecf0f1";

  return (
    <Box sx={{ padding: 4, background: backgroundGradient, minHeight: "100vh" }}>
      {/* Header Section with smooth animation */}
      <motion.div variants={headerVariants} initial="hidden" animate="visible">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: secondaryColor,
            mb: 4,
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          About the Census
        </Typography>
      </motion.div>

      {/* Main Content Section: Paragraph with Card for better presentation */}
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} md={8}>
          <CardContent>
            <Box sx={paragraphStyle}>
              <Typography variant="body1">
              The Indian Census is the largest single source of various statistical information
               on various characteristics of the people of India. With a history of more than 130 years,
                this reliable, time-tested exercise is bringing in a real insight into the data every 
                10 years, beginning in the year 1872 when the first census was conducted
                 non-synchronously in different parts of India.The Indian Census has been an attractive 
                 source of data for scholars and researchers in demography, economics, anthropology, 
                 sociology, statistics and many other disciplines. The rich diversity of India's people
                  is indeed revealed by the decadal census, which has become a tool for understanding 
                  and studying India.
              </Typography>
            </Box>
          </CardContent>
        </Grid>
      </Grid>

      {/* Learn More Button Section with hover effect */}
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <motion.div {...hoverEffect}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: primaryColor,
              color: "white",
              fontWeight: "bold",
              padding: "12px 24px",
              borderRadius: "25px",
              "&:hover": {
                backgroundColor: "#2980b9", // Darker shade of blue for hover
              },
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            Learn More
          </Button>
        </motion.div>
      </Box>

      {/* Census Organization Tables Section */}
      <motion.div variants={headerVariants} initial="hidden" animate="visible">
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: secondaryColor,
            mb: 4,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Census Organization of India
        </Typography>
      </motion.div>

      {/* Census Commissioners Table */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div variants={tableVariants} initial="hidden" animate="visible">
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                mb: 2,
                color: secondaryColor,
              }}
            >
              Census Commissioners (1881 - 1941)
            </Typography>
            <TableContainer
              component={motion.div}
              {...hoverEffect}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
                backgroundColor: cardBackgroundColor,
              }}
            >
              <Table>
                <TableHead sx={{ backgroundColor: primaryColor }}>
                  <TableRow>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Year</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {censusCommissioners.map((commissioner, index) => (
                    <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#ecf0f1', cursor: 'pointer' } }}>
                      <TableCell>{commissioner.year}</TableCell>
                      <TableCell>{commissioner.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </motion.div>
        </Grid>

        {/* Registrar Generals Table */}
        <Grid item xs={12} md={6}>
          <motion.div variants={tableVariants} initial="hidden" animate="visible">
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                mb: 2,
                color: secondaryColor,
              }}
            >
              Registrar Generals & Census Commissioners (1949 - Present)
            </Typography>
            <TableContainer
              component={motion.div}
              {...hoverEffect}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
                backgroundColor: cardBackgroundColor,
              }}
            >
              <Table>
                <TableHead sx={{ backgroundColor: primaryColor }}>
                  <TableRow>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Period</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {registrarGenerals.map((general, index) => (
                    <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#ecf0f1', cursor: 'pointer' } }}>
                      <TableCell>{general.period}</TableCell>
                      <TableCell>{general.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
