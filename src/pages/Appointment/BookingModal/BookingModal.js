import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBooking, handleClose, booking, date }) => {
  const { name, time, id } = booking;
    

    //booking submit function
    const handleBookingSubmit = (e) => {
    alert("submit success");
    handleClose()
    e.preventDefault();
  };


  return (
    <Modal
      open={openBooking}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {name}
        </Typography>

        <form onSubmit={handleBookingSubmit}>
          <TextField
            disabled
            id="filled-basic"
            label={time}
            variant="outlined"
            sx={{ m: 1, width: "94%", textAlign: "center" }}
          />

          <form>
            <TextField
              id="filled-basic"
              placeholder="Your Name"
              variant="outlined"
              sx={{ m: 1, width: "94%", textAlign: "center" }}
            />
          </form>

          <TextField
            id="filled-basic"
            placeholder="Your Phone"
            variant="outlined"
            type="number"
            sx={{ m: 1, width: "94%", textAlign: "center" }}
          />

          <TextField
            id="filled-basic"
            placeholder="Your Email"
            variant="outlined"
            type="email"
            sx={{ m: 1, width: "94%", textAlign: "center" }}
          />

          <TextField
            disabled
            id="filled-basic"
            label={date.toDateString()}
            variant="outlined"
            sx={{ m: 1, width: "94%", textAlign: "center" }}
          />

          <Button variant="contained" type="submit" sx={{textAlign:"right",mt:1,ml:36,px:4}}>
            Send
          </Button>

        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
