import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const Bookings=[
    {   id:1,
        name:'Cavity Protection',
        time:'9am - 10am',
        space:'5'
    },
    {   id:2,
        name:'Teeth  Protection',
        time:'10am - 11am',
        space:'7'
    },
    {   id:3,
        name:'Teeth  white',
        time:'11am - 12pm',
        space:'3'
    },
    {   id:4,
        name:'Pediatric Dental',
        time:'1pm - 2pm',
        space:'9'
    },
    {   id:5,
        name:'Oral Protection',
        time:'9am - 10am',
        space:'3'
    },
    {   id:6,
        name:'Cavity Titment',
        time:'9am - 10am',
        space:'5'
    }
]


const AvailableAppointment = ({date}) => {
    return (
        <Container>
            <h2 style={{marginBottom:'40px',color:'maroon',fontSize:'1.9rem'}}> <span style={{color:'red'}}> Date :</span> {date.toDateString()}</h2>
            <Grid container spacing={3}>
               {
                   Bookings.map(booking=><Booking
                   key={booking.id}
                   date={date}
                   booking={booking}
                   ></Booking>)
               }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;