import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";


const Booking = ({booking,date}) => {

    const {name,time,space}=booking
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleOpen = () => setBookingOpen(true);
    const handleClose = () => setBookingOpen(false);

    return (
 <>  
   <Grid item xs={12} sm={6} md={4}>
       <Paper elevation={3} sx={{py:3,backgroundColor:'whitesmoke',mb:4}}>
         <Typography sx={{color:'purple',fontWeight:600,wordSpacing:2}} variant="h5">
          {name}
         </Typography>
         <Typography variant="h6">
          {time}
         </Typography>
         <Typography variant="caption">
          {space} Space Available
         </Typography> <br />
          <Button onClick={handleOpen} variant="contained" sx={{color:'white',mt:1}}>
              Book Here
          </Button>
       </Paper>
      </Grid>

      <BookingModal
      date={date}
      booking={booking}
      openBooking={openBooking}
      handleClose={handleClose}
      >
      </BookingModal>
   </>   
    
  );
};

export default Booking;
