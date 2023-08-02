import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import "../App.css"
const Footer = () => (
 
  <Box mt="80px" bgcolor="#FFF3F4"  className="box">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      {/* <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} /> */}
   
      <h1>Fitflex</h1>
    </Stack>
    <Typography  id="text"variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Group 17</Typography>
    
  </Box>
);

export default Footer;
