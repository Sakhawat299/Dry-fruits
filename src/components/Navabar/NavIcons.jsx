import React from 'react'
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    styled,
  } from "@mui/material";
  import { IconButton } from '@mui/material';
import { CustomButton } from '../style';
const NavIcons = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      gap: '5px',
 
      alignItems: 'center',
      justifyContent: { xs: 'center', sm: 'flex-start' }
    }}>
      <CustomButton sx={{ display: { xs: 'none', sm: 'block' } }}>
        Free CONSULTATION
      </CustomButton>
      
      <IconButton 
        component="a" 
        href="https://facebook.com" 
        sx={{
          backgroundColor: "#3b5998",
          borderRadius: "50%",
          padding: { xs: '3px', sm: '4px' },
          width: { xs: 34, sm: 30 },
          height: { xs: 34, sm: 30 }
        }}
      >
        <Facebook sx={{ 
          color: "white", 
          fontSize: { xs: '18px', sm: '20px' } 
        }} /> 
      </IconButton>
    
      <IconButton 
        component="a" 
        href="https://instagram.com" 
        sx={{
          backgroundColor: "#C13584",
          borderRadius: "50%",
          padding: { xs: '3px', sm: '4px' },
          width: { xs: 34, sm: 30 },
          height: { xs: 34, sm: 30 }
        }}
      >
        <Instagram sx={{ 
          color: "white", 
          fontSize: { xs: '18px', sm: '20px' } 
        }} /> 
      </IconButton>
    
      <IconButton 
        component="a" 
        href="https://linkedin.com" 
        sx={{
          backgroundColor: "#0e76a8",
          borderRadius: "50%",
          padding: { xs: '3px', sm: '4px' },
          width: { xs: 34, sm: 30 },
          height: { xs: 34, sm: 30 }
        }}
      >
        <LinkedIn sx={{ 
          color: "white", 
          fontSize: { xs: '18px', sm: '20px' } 
        }} /> 
      </IconButton>
    </Box>
  )
}

export default NavIcons
