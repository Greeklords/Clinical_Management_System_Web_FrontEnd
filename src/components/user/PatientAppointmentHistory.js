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

export default function PatientAppointmentHistory(){    

  const [appointment, setAppointment] = useState({})
  const params = useParams();
  const userId = params.userId;
  // const { id } = useParams() 

    useEffect(() => {
        if ( userId ) {
            axios.get(`http://localhost:4000/onlinePatient/onlineprofile/${userId}`)
                .then(res => {
                    console.log(res)
                    setAppointment(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ userId ]);    
    
    //localhost:4000/onlinePatient/onlineprofile/:id

    function cancelAppointment(e){
      e.preventDefault();          
      
        axios.delete(`http://localhost:4000/onlinePatient/onlineprofile/${userId}`).then(()=>{        
          window.location.reload(false);
        }).catch((err)=>{
          alert(err)
        })      
    }
    

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
          <Typography sx ={{fontSize: 30, textAlign:'right'}}> My Appointment History</Typography>  
          </Grid>

          <Grid container rowSpacing={1}/>

          <Grid item xs={5}> 
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginLeft:5}}>
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h5" component="div">
                    Doctor name : {appointment.doctorname}
                  </Typography>
                </Grid>          
              </Grid>
              <Typography color="text.secondary" variant="body2">          
                Date : {appointment.date}         
              </Typography>
              <Typography color="text.secondary" variant="body2">       
                Time : 6.43 PM
              </Typography>
              <Typography color="text.secondary" variant="body2">       
                Charge : {appointment.charges}
              </Typography>
            </Box>
            <Divider variant="middle" />        
              <Button
                type="submit"          
                variant="contained"
                sx={{ mt: 3, mb: 2, marginLeft:2}}                                  
              >
                Reschedule
              </Button>  
              <Button          
                type="submit"          
                variant="contained"
                sx={{ mt: 3, mb: 2, marginLeft:3 }} 
                onClick={cancelAppointment}                    
              >
                Cancel
              </Button>      
            </Box>    
          </Grid>

      </Grid>
      </Grid>
    </Grid>        
    </Grid>        
    );
}