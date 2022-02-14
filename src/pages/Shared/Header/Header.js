import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ height: "85px", backgroundColor: "indigo" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, backgroundColor: "gray" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "500",
              wordSpacing: 4,
              fontSize: "1.7rem",
              mt: 2,
              letterSpacing: 0.5,
            }}
          >
            <span
              style={{ fontSize: "29px", color: "yellow", fontWeight: "700" }}
            >
              D
            </span>
            ental Service
          </Typography>

          <Link to="/">
            <Button sx={{ color: "white", fontSize: "15px" }}>
              <HomeIcon />
              Home
            </Button>
          </Link>
          <Link to="/appointment">
            <Button sx={{ color: "white", fontSize: "15px" }}>
              Appointment
            </Button>
          </Link>


            {/* <Link to="/#comment">
            <Button 
            sx={{ color: "white", fontSize: "15px"}}
            onClick={()=>window.location.replace("/#comment")}
            >
              Comment
            </Button>
            </Link>  */}
    
    <HashLink smooth to="#comment"> <Button 
            sx={{ color: "white", fontSize: "15px"}}
            onClick={()=>window.location.replace("/#comment")}
            >
              Comment
            </Button></HashLink>


          <NavLink to="/login">
            <Button sx={{ fontSize: "15px",color:'white',textDecoration:'none' }} color="inherit">
              {" "}
              <ExitToAppIcon></ExitToAppIcon> Login
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
