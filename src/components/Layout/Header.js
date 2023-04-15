import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
<<<<<<< HEAD
          <NavLink to={"/about"}>About</NavLink>
=======
          <NavLink to={"/forrecipe"}>Menu</NavLink>
>>>>>>> c7f3f72cd05db9bbcf52c73bc37aa9c465b839ed
        </li>
        <li>
          <NavLink to={"/foringre"}>Contact</NavLink>
        </li>
        <li>
<<<<<<< HEAD
          <NavLink to={"/contact"}>Sign in</NavLink>
=======
          <NavLink to={"/foringre"}>Contact</NavLink>
>>>>>>> c7f3f72cd05db9bbcf52c73bc37aa9c465b839ed
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
<<<<<<< HEAD

                <li>          <NavLink to={"/about"}>About</NavLink>
=======
                <li>
                  <NavLink to={"/forrecipe"}>Menu</NavLink>
>>>>>>> c7f3f72cd05db9bbcf52c73bc37aa9c465b839ed
                </li>
                <li>
                  <NavLink to={"/foringre"}>Contact</NavLink>
                </li>
                <li>
<<<<<<< HEAD
          <NavLink to={"/contact"}>Sign in</NavLink>
        </li>
=======
                  <NavLink to={"/foringre"}>Contact</NavLink>
                </li>
>>>>>>> c7f3f72cd05db9bbcf52c73bc37aa9c465b839ed
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
