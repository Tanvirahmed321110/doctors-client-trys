import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Box, height, padding } from "@mui/system";
import { Button, Container, Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";

const bannerBg = {
  background: `url(${bg})`,
  backgroundColor: "whiteSmoke",
  borderRadius: "6px",
};

const Banner = () => {
  return (
    <Box>
      <Container style={bannerBg} sx={{ my: 12, p: 4, width: "82%",mt:6 }}>
        <Box sx={{ p: 4 }}>
          <Grid container spacing={4}>
            <Grid xs={12} md={7} sx={{ textAlign: "left", pr: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
                Your New Smile <br />
                Start Here
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  fontSize: "17px",
                  my: 2,
                  textAlign: "justify",
                }}
              >
                dolor sit amet consectetur adipisicing elit. Tenetur eaque unde
                maxime, repudiandae quo dolorum temporibus expedita repudiandae
                quo dolorum temporibus expedita animi eius rem sapiente enim
                quas ad sunt, tempore qui deleniti deserunt autem.
              </Typography>
              <Button variant="contained" sx={{ mb: 4 }}>
                Get Appointment
              </Button>
            </Grid>
            
            <Grid xs={12} md={5}>
              <img
                style={{ width: "110%", margin: "0 auto" }}
                src={chair}
                alt=""
              />
            </Grid>
          </Grid>
        </Box>
      </Container>


      <Grid
        container
        spacing={2}
        sx={{ width: "78%", margin: "0 auto", marginTop: "-130px",mb:16}}
      >
        <Grid xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{
              boxSizing: "border-box",
              height: "90px",
              backgroundColor: "navy",
              color: "white",
              py: 2,
              ml: 2,
              borderRadius: 2,
            }}
          >
            <AccessTimeIcon sx={{ fontSize: "1.9rem" }}> </AccessTimeIcon>{" "}
            Opening Hours
             <Typography sx={{fontWeight:'300',fontSize:'14px'}}>
               Lorem ipsum dolor sit.
             </Typography>
          </Typography>
        </Grid>



        <Grid xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{
              boxSizing: "border-box",
              height: "90px",
              backgroundColor: "maroon",
              ml: 2,
              color: "white",
              py: 2,
              borderRadius: 2,
            }}
          >
            <PersonPinCircleIcon
              sx={{ fontSize: "1.9rem" }}
            ></PersonPinCircleIcon>{" "}
            Visit Our Location
            <Typography sx={{fontWeight:'300',fontSize:'14px'}}>Dhaka-1201,tejgao</Typography>
          </Typography>
        </Grid>
        <Grid xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{
              boxSizing: "border-box",
              height: "90px",
              backgroundColor: "purple",
              ml: 2,
              color: "white",
              py: 2,
              borderRadius: 2,
            }}
          >
            <span>
              <AddIcCallIcon
                sx={{ textAlign: "center", fontSize: "2rem" }}
              ></AddIcCallIcon>
            </span>{" "}
            Contact us now
            <Typography sx={{fontWeight:'300',fontSize:'14px'}}>+8097468</Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
