import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { CustomButton, HeadingTypography, NavbarTextTypography } from "../../components/style";
import NavIcons from "./NavIcons";

const Navbar = () => {
  const navigate = useNavigate(); 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    {
      name: "Portfolio",
      path: "/portfolio",
      subItems: [
        { name: "Web Design", path: "/portfolio/web-design" },
        { name: "Mobile Apps", path: "/portfolio/mobile-apps" },
      ],
    },
    { name: "Clients", path: "/clients" },
    { name: "Web Hosting", path: "/web-hosting" },
    { name: "Careers", path: "/career" },
  ];


  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0 2em" }}>
     
        <HeadingTypography>Askari</HeadingTypography>

        
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            alignItems: "center",
            gap: "2em",
          }}
        >
          {navItems.map((item, index) => (
            <NavbarTextTypography
              key={index}
              onClick={() => navigate(item.path)}
              sx={{
                padding: "0 5px",
                cursor: "pointer",
                borderRight: index !== navItems.length - 1 ? "1px solid #ccc" : "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {item.name}
            </NavbarTextTypography>
          ))}
          <NavIcons />
        </Box>

   
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {navItems.map((item, index) => (
              <MenuItem key={index} onClick={() => navigate(item.path)}>
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
