import axios from 'axios';
import * as React from 'react';
import {useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { array } from 'yup';

export default function AppointmentHistory(){    

  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/profile/displaydoctors`)
      .then((res) => {          
        console.log(res.data);
        setComments(res.data);
      })      
      .catch((error) => {
        console.log(error);
      });
  }, []);

    return(
        <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline/>
        <Grid container rowSpacing={3}/>    
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        <Grid item xs={6} marginLeft={25} marginTop={10}> 
            <div>            
                {comments.map((row, index) => (
                <p key={index}>
                    ID : {row._id} ,
                    Full name : {row.fullName} ,                   
                    Degree : {row.degree}                    
                </p>
                ))}
            </div>
        </Grid>

        </Grid>  
        </Grid>  
    );
}