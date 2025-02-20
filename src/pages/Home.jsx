import React, { useState } from "react";
import { Box, Typography, Container, Grid, Card, CardContent, Button, TextField } from "@mui/material";
import imge from '../asset/homeImage/prfo.jpeg';
import bag from '../asset/homeImage/bck.jpg';

const HomePage = () => {
  const [products, setProducts] = useState([
    { name: "Almonds", price: "$10" },
    { name: "Cashews", price: "$12" },
    { name: "Walnuts", price: "$15" },
    { name: "Pistachios", price: "$14" },
    { name: "Pistach", price: "$19" },
    { name: "Almonds", price: "$108" },

  ]);

  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([...products, newProduct]);
      setNewProduct({ name: "", price: "" }); 
    }
  };

  return (
    <Box  >
      <Box sx={{ backgroundColor: "primary.main", color: "white", padding: "10px", textAlign: "center" }}>
        <Typography variant="h6">Askari Dry Fruits</Typography>
      </Box>

      <Container style={{ marginTop: "20px", textAlign: "center" }}>
        <img
          src={imge}
          alt="Owner"
          style={{ width: "100px", borderRadius: "50%", marginBottom: "10px" }}
        />
        <Typography variant="h5">Meet Our Founder</Typography>
        <Typography variant="body1" color="textSecondary">
          Passionate about providing premium dry fruits with the best quality.
        </Typography>
      </Container>

      <Container style={{ marginTop: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Askari Dry Fruits
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary">
          Premium Quality Dry Fruits at Your Doorstep
        </Typography>

        <Box display="flex" justifyContent="center" gap={2} marginBottom={3}>
          <TextField
            label="Product Name"
            size="small"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <TextField
            label="Price"
            variant="outlined"
            size="small"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <Button variant="contained" color="primary" onClick={handleAddProduct}>
            Add Product
          </Button>
        </Box>

        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body1" color="textSecondary">
                    {product.price}
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth style={{ marginTop: "10px" }}>
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
