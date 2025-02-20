import React, { useLayoutEffect, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import aboutImage from "../asset/homeImage/d.webp"; // Ensure correct path
import bag from '../asset/homeImage/dr.jpg';
import  gsap  from "gsap";
const About = () => {
  let animateBounce = useRef();
    let animateLeft = useRef();
    let animateRight = useRef();
    let animateUp = useRef();



    useLayoutEffect(() => {
      gsap.fromTo(
          animateBounce.current,
          { y: 40 },
          { y: 0, duration: 1, repeat: -1, yoyo: true }
      );
      gsap.fromTo(
          animateUp.current,
          { y: -100, opacity: 0 },
          {
              y: 0,
              duration: 4,
              opacity: 1,
          }
      );
      gsap.fromTo(
          animateLeft.current,
          { x: -200, opacity: 0 },
          {
              x: 0,
              duration: 4,
              opacity: 1,
          }
      ); gsap.fromTo(
        animateRight.current,
        { x: 200, opacity: 0 },
        {
            x: 0,
            duration: 4,
            opacity: 1,
        }
    );
}, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "40px 20px",
        textAlign: "center",
        backgroundImage: `url(${bag})`,
      }}
    >
      <Typography
  variant="h3"
  ref={animateLeft}
  sx={{
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    marginBottom: "16px",
    color: "white",
  }}
>
  About Askari Dry Fruits
</Typography>

      <Grid container spacing={4} sx={{ maxWidth: "1000px", marginTop: "20px" }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={aboutImage}
           
            sx={{
              width: "100%",
              borderRadius: "12px",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
          <Typography
             ref={animateBounce}
            sx={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
          
              textAlign: "left",
                 color:'white'
            }}
          >
            At Askari Dry Fruits, we take pride in offering **premium quality dry fruits** sourced from the best farms. 
            Our mission is to provide **healthy, nutritious, and delicious** dry fruits to our customers with guaranteed freshness. 
            <br /><br />
            We believe in quality and customer satisfaction, ensuring every product meets the highest standards. Whether you're looking for **almonds, cashews, pistachios, walnuts, or other exotic nuts**, we have it all! 
            <br /><br />
            Join us in embracing a healthier lifestyle with **Askari Dry Fruits** – where taste meets nutrition.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;