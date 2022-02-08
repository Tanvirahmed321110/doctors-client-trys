import { Container, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import React from 'react';

const Footer = () => {
    return (
        <Container sx={{paddingLeft:'5%',width:'90%'}}>
          <Grid container spacing={3} sx={{my:3 ,ml:3}}>
            <Grid xs={6} md={3} sx={{textAlign:'left',mb:7}}>
              <Typography variant='h5' sx={{textAlign:'left',fontWeight:'600',color:'maroon'}}>
                 Our Service
              </Typography> <br />
              <Typography sx={{color:'navy',fontWeight:'500',ml:2}}>
               * Dental  <br />
               * Treet   <br />
               * Cavity  <br />
               * Treet White     
             </Typography>    
            </Grid>


            <Grid xs={6} md={3} sx={{textAlign:'left'}}>
              <Typography variant='h5' sx={{textAlign:'left',fontWeight:'600',color:'maroon'}}>
               <AddLocationAltIcon></AddLocationAltIcon>   Our Location
              </Typography> <br />
              <Typography sx={{color:'blue',fontWeight:'400',ml:2}}>
               Main Dhaka  <br />
               Rangpur (Sub)  <br />
               Sylet (Sub)  <br />
               Commila (Sub)    
             </Typography>    
            </Grid>

            
            <Grid xs={6} md={3} sx={{textAlign:'left'}}>
              <Typography variant='h5' sx={{textAlign:'left',fontWeight:'600',color:'maroon'}}>
                Social Media  
              </Typography> <br />
              <Typography sx={{color:'purple',fontWeight:'400'}}>

               <a target='blank' href="http://www.facebook.com"><FacebookIcon></FacebookIcon> FaceBook</a> <br />

               <a target='blank' href="http://www.youTube.com"><YouTubeIcon> </YouTubeIcon> YouTube</a> <br />

               <a href="http://www.twitter.com"><TwitterIcon> </TwitterIcon> Twitter</a>  <br />
               <a href=""></a> 

               <a href="http://www.inistragram.com"><InstagramIcon> </InstagramIcon> Instagram</a>   
             </Typography>    
            </Grid>
            

            <Grid xs={6} md={3} sx={{textAlign:'left'}}>
              <Typography variant='h5' sx={{textAlign:'left',fontWeight:'600',color:'maroon'}}>
                <ContactPhoneIcon></ContactPhoneIcon>   Contact Us
              </Typography> <br />

              <Typography sx={{color:'purple',fontWeight:'400',ml:2}}>
               Bangladesh  <br />

               Dhaka 1201-Tejgao <br />
               <a target='blank' href="+8801518350989">Phone</a> <br />
               <a href="mailto:foysalahmed321110@gamil.com">Email</a>     
             </Typography>    
            </Grid>
          </Grid>
          <Typography sx={{mb:1}}>
              CopyRight &copy; 2022 <span style={{fontSize:'0.7rem',fontWeight:300}}>Create By Tanvir</span>
          </Typography>
        </Container>
    );
};

export default Footer;