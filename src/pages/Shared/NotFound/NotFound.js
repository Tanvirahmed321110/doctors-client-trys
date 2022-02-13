import { Container,Box,Button } from '@mui/material';
import {Link} from 'react-router-dom'
import React from 'react';

const NotFound = () => {
    return (
       <Box sx={{backgroundColor:'white'}}>
           <Container sx={{backgroundColor:'palegreen',p:2,mt:6,borderRadius:2}}>
           
            <h1>Sorry! Page Not Found</h1>
           
           <img style={{width:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXKg1Y7mSWoqI2LG9qlMHhkMSYkYY0XamGQ&usqp=CAU" alt="" />
           <br />

            
            <Link to="/"><Button variant='contained' sx={{textDecoration:'none',px:5,fontSize:'1.4rem',mt:4,backgroundColor:'black'}}>
                Go To Home
            </Button> 
          </Link>    
            
          
       </Container>
       </Box>
    );
}; 

export default NotFound;