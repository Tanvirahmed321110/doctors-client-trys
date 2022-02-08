import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Comment = () => {
    return (
       <Container sx={{backgroundColor:'#0D2926',my:8}}>
           <Typography variant='h4' sx={{color:'white',pt:4}}>
               Your Comment
           </Typography>
         <TextField id="filled-basic"
           label='Your Name'
           variant="filled"
           type='text'
           sx={{backgroundColor:'whitesmoke',width:'80%',my:4,borderRadius:1}}
           />
         <TextField id="filled-basic"
           label='Subject'
           variant="filled"
           type='text'
           sx={{backgroundColor:'whitesmoke',width:'80%',my:2,borderRadius:1}}
           />

         <TextField
            id="standard-multiline-static"
            multiline
            rows={6}
            defaultValue="Text Your Message..."
            variant="standard"
           type='text'
           sx={{backgroundColor:'whitesmoke',width:'80%',my:2,borderRadius:1,pl:.5}}
           />
             <br />

           <Box sx={{textAlign:'left',ml:14,py:4}}>
           <Button variant="contained" sx={{px:3,py:1,letterSpacing:1,fontSize:'17px',fontWeight:500}}>
              Submit
           </Button>
           </Box>

       </Container>
    );
};

export default Comment;