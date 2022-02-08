import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Service = (props) => {
    const {name,img,destcription}=props.service
    return (
       <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 ,boxShadow:0,margin:'0 auto'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{width:'auto',height:'89px',margin:'10px auto'}}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'1.6rem',color:'DarkSlateGrey',fontWeight:700}}>
            {name}
          </Typography>
        <Typography variant="body2" sx={{textAlign:'justify',boxShadow:1,p:1,borderRadius:2}} color="text.secondary">
              {destcription}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
       </Grid>
    );
};

export default Service;