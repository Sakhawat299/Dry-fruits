import { styled, Typography } from "@mui/material";
import {  Button } from "@mui/material";

export const HeadingTypography = styled(Typography)(() => ({
  fontFamily: "Great Vibes",
 

  
  color:"blue",
  fontSize:" clamp(2.5rem, 11.7vw + 4.1rem, 3rem)"
}));

export const NavbarTextTypography = styled(Typography)(({ theme }) => ({


  
  display: "flex",


  
  flexDirection: "row",
  alignItems: "center",
  color: "black",

  "& a": {
    color: "black",
    textDecoration: "none",
    transition: "color 0.3s ease, text-decoration 0.3s ease",
  },

  "& a:hover": {
    color: "blue",
    textDecoration: "underline", 
  },

  fontSize: "clamp(1.0rem, 1.3vw + 1.1rem, 0.5rem)",

  [theme.breakpoints.down("md")]: {
    color: "red",
    flexDirection: "column", 
    gap: "9px", 
    textAlign: "center",

    "& a": {
      color: "yellow",
    },
  },
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#3644AF", 
  color: "white", 
  padding: "3rm 4rm", 
  borderRadius: "8px", 
  fontSize: "12px", 

  transition: "all 0.3s ease", 



 
  [theme.breakpoints.down("md")]: {
    padding: "10px 20px", 
  },
}));

