import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import Calender from '../../Shared/Calender/Calender';


const AppointmentHeader = ({date,setDate}) => {
    
    return (
        <Container>
            <Grid container spacing={2}  sx={{width:'100%'}}>
              <Grid item xs={12} md={7}>
                 <Calender date={date} setDate={setDate}></Calender>
              </Grid>
              <Grid item xs={12} md={5}>
                 <img style={{width:'90%'}} src={chair} alt="" />
              </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;