import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'

const AppointmentBanner = () => {
   
     const appointmentBg={
         background:`url(${bg})`,
         backgroundColor:'DarkRed',
         backgroundBlendMode: 'darken , luminosity',
        
     }

    return (
       <Container style={appointmentBg} sx={{marginTop:'200px',mb:16,borderRadius:2,width:'82%'}}>
           <Grid container spacing={2}>
               <Grid xs={12} md={6}>
               <img
                style={{width:450,marginTop:'-120px'}}
               src={doctor} alt="" />
               </Grid>
        
        
               <Grid xs={12} md={6} sx={{textAlign:'left' ,px:2}}>
                <Typography variant='h5' sx={{color:'whiteSmoke',my:2}}>
                   Appointment
                </Typography>
                <Typography variant='h4' sx={{color:'white'}}>
                    Make And Appointment <br />
                    Today
                </Typography>
                <Typography variant='h6' sx={{mt:2,color:'yellow' ,fontSize:'17px',textAlign:'justify',fontWeight:'300'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic a soluta autem dolor non, pariatur nulla ducimus ipsa blanditiis  autem dolor non, pariatur nulla ducimus ipsa blanditiis modi corrupti. 
                </Typography>
                <Button variant='contained' sx={{my:2,mb:3,backgroundColor:'DarkOrchid',fontWeight:'500',wordSpacing:2}}>
                    More Data
                </Button>
               </Grid>
           </Grid>
       </Container>
    );
};

export default AppointmentBanner;