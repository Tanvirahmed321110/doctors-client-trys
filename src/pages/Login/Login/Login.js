import {
  Button,
  Container, 
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import loginImage from "../../../images/login.png";

const Login = () => {
     
     const [loginData,setLoginData]=useState({})

        //function onChange use in form input
    const handelOnChange=(e)=>{   
       const inputName=e.target.name
       const inputValue=e.target.value
       const newLoginData={...loginData}
       newLoginData[inputName]=inputValue
       setLoginData(newLoginData)
       console.log(inputName , ' : ' ,inputValue)
    }
   
       //function handelLoginSubmit use in form
   const handelLoginSubmit=(e)=>{
       alert('click btn')
       e.reset()
       e.preventDefault()
   }


  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} sx={{ mt: 8}}>
          <Box
            sx={{
              ml:5,  
              boxShadow: "whiteSmoke 2px 2px 10px 10px",
              borderRadius: "10px",
              pb: 8,
              width: "80%",
            }}
          >
            <Typography
              sx={{
                pt: 8,
                mt: 6,
                mb: 4,
                fontSize: "29px",
                letterSpacing: 0.5,
                fontWeight: 400,
              }}
              variant="h6"
            >
              Login
            </Typography>
        
           <form onSubmit={handelLoginSubmit}>
           <TextField
              sx={{ width: "76%" }}
              id="standard-textarea"
              label="Your Email"
              name="emailInput"
              onChange={handelOnChange}
              type="email"
              variant="standard"
            />{" "}
            <br /> <br />
            <TextField
              sx={{ width: "76%" }}
              id="standard-textarea"
              label="Password"
              name="passwordInput"
              onChange={handelOnChange}
              type="password"
              variant="standard"
            />{" "}
            <br />
            <Box sx={{ textAlign: "left", ml: 6.5, mt: 1 }}>
              <Link to="#"> Forget Your Password ?</Link>
            </Box>
            <br /> <br />
            <Button type="submit" variant="contained" sx={{mt:0, width: "76%" }}>
              Login
            </Button> 

            <NavLink  to="/register"><Button variant="text" sx={{mt:1,wordSpacing:1}}>New User? GO To Register</Button>
            </NavLink>
            </form>
          </Box>
           

        </Grid>
        <Grid item xs={12} md={6} sx={{mt:4}}>
          <img style={{ width: "90%" }} src={loginImage} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
