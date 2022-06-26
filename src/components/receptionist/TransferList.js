import axios from 'axios';
import * as React from 'react';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function TransferList(){    

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const items = JSON.parse(window.localStorage.getItem('chamal-medicare-auth-cart-list'));
  //   if (items) {
  //   setItems(items);
  //   }
  // }, []);

  const [userId, setUserId] = useState({})
  const { id } = useParams()   

  //var response=await axios.get(`http://localhost:8080/user/get/all?branch_id=${localStorage.getItem("branch_id")}`);
    useEffect(() => {
        if ( id ) {
            axios.get(`http://localhost:4000/user/getUser/62b486add198e07703043587`)
                .then(res => {
                    console.log(res)
                    setUserId(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);  
  
    return(
        <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline/>
        <Grid container rowSpacing={3}/>    
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        <Grid container component="main" sx={{ height: '100vh'}}>
          <CssBaseline/>
          <Grid container rowSpacing={1}/>    
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={6}> 
          <Typography sx ={{fontSize: 30, textAlign:'right'}}> User data</Typography>  
          </Grid>

          <Grid container rowSpacing={1}/>

          <Grid item xs={5}> 
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginLeft:5}}>
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h5" component="div">
                    User data : {userId._id}
                  </Typography>
                </Grid>          
              </Grid>              
            </Box>
            <Divider variant="middle" />                   
            </Box>    
          </Grid>

      </Grid>
      </Grid>
    </Grid>        
    </Grid>        
    );
}