import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: 3, pb: 1, position: 'fixed', bottom: 0, width: '100%' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Left Section */}
          <Grid item xs={12} md={3} >
            <Typography variant="h6">About AutiSense</Typography>
            <Typography variant="body2">
              AutiSense is a tool designed to assist in the detection and understanding of autism. Our goal is to provide accurate insights and resources for families and individuals affected by autism.
            </Typography>
            <Box mt={2}>
              <Button component={Link} to="/about" sx={{ color: 'white' }}>Learn More</Button>
            </Box>
          </Grid>

          {/* Middle Section - Additional Links */}
          <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
            <Typography variant="h6">Quick Links</Typography>
            <Typography variant="body2">
              <Link to="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</Link>
            </Typography>
            <Typography variant="body2">
              <Link to="/terms" style={{ color: 'white', textDecoration: 'none' }}>Terms of Service</Link>
            </Typography>
          </Grid>

          {/* Right Section - Contact/Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2">support@autisense.com</Typography>
            <Typography variant="body2">Call us: (123) 456-7890</Typography>
            <Box mt={2}>
              <Button component={Link} to="/contact" sx={{ color: 'white' }}>Get in Touch</Button>
            </Box>
          </Grid>

          {/* Social Media Icons - Right side */}
          <Grid item xs={12} md={3} display="flex" justifyContent="flex-end" alignItems="center">
            <FacebookIcon sx={{ mx: 2, fontSize: 30 }} />
            <TwitterIcon sx={{ mx: 2, fontSize: 30 }} />
            <InstagramIcon sx={{ mx: 2, fontSize: 30 }} />
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            © 2025 AutiSense. All rights reserved. Designed with love.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
