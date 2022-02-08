import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import fluoride  from "../../../images/fluoride.png"
import cavity  from "../../../images/cavity.png"
import whitening  from "../../../images/whitening.png"
import Service from '../Servicce/Service';
const Services = () => {

    const services=[
        {
            name:'Fluoride Treatment',
            id:0,
            destcription:' Find Best Dentist New York. Large Selection. Always Sale. Cheap Prices. Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply. Services: Compare, Search, Find Products, Many Offers.',
            img:fluoride
        },
        {
            name:'Treat Cavity',
            id:0,
            destcription:' The teeth are the hardest substances in the human body. Besides being essential for chewing, the teeth play an important role in speech. Parts of the teeth include: ... Pulp: The softer, living inner structure . beauty of treat',
            img:cavity
        },
        {
            name:'Whitening Treatment',
            id:0,
            destcription:' Find Best Dentist New York. Large Selection. Always Sale. Cheap Prices. Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply. Services: Compare, Search, Find Products, Many Offers.',
            img:whitening
        }
        
    ]

    return (
       <Container  sx={{mt:6 ,textAlign:'center'}}>
           <Typography variant='h5' sx={{color:'gray',fontWeight:600,fontSize:'1.6rem'}}>
               Our Services 
           </Typography>
           <Typography variant='h4' sx={{color:'Crimson',fontWeight:600,mt:2, mb:4,wordSpacing:1}}>
               We Provide This Services
           </Typography>
           <Grid container spacing={4}>
              {
                  services.map(service=><Service
                  key={service.name}
                  service={service}
                  ></Service>
                    
                    )
              }
           </Grid>
       </Container>
    );
};

export default Services;