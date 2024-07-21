import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';

const Footer = () => {
  return (
    <Box className="bg-black text-white py-12">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <div className="flex items-center">
              <AdbIcon className="hidden md:flex text-blue-500 mr-1 mb-2" />
              <Typography variant="h6" gutterBottom className="font-bold text-blue-500">
                DocuVerse
              </Typography>
            </div>
            <Typography variant="body2" color="inherit" className="mt-3">
              DocuVerse offers a user-friendly interface that makes it simple and intuitive to write documents, organize your thoughts, and stay productive.
            </Typography>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <a href="#" className="block text-white hover:text-blue-500 mt-1">Blog</a>
            <a href="#" className="block text-white hover:text-blue-500 mt-1">FAQs</a>
            <a href="#" className="block text-white hover:text-blue-500 mt-1">Support</a>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <a href="#" className="block text-white hover:text-blue-500 mt-1">About Us</a>
            <a href="#" className="block text-white hover:text-blue-500 mt-1">Careers</a>
            <a href="#" className="block text-white hover:text-blue-500 mt-1">Contact</a>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div className="ml-16 md:ml-0">
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <div className="flex mt-2">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mr-3 hover:text-blue-500">
                  <Facebook />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mr-3 hover:text-blue-500">
                  <Twitter />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mr-3 hover:text-blue-500">
                  <LinkedIn />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                  <Instagram />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={5}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} DocuVerse. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
