import axios from 'axios';
import * as React from 'react';
import {useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AppointmentHistory(){    

  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/onlinePatient/displayOnline`)
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
            <Typography variant="h3" component="h2">
              Appointment History
            </Typography>
            <br/> 

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 750 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Doctor name</TableCell>
                  <TableCell align="right">Channeled date</TableCell>
                  <TableCell align="right">Channeling fee</TableCell>
                  <TableCell align="right">First name</TableCell>
                  <TableCell align="right">Last name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comments.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.doctorname}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.charges}</TableCell>
                    <TableCell align="right">{row.firstname}</TableCell>
                    <TableCell align="right">{row.lastname}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
                
            </div>
        </Grid>
      
        </Grid>  
        </Grid>  
    );
}