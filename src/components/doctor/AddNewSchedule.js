import * as React from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../auth/redux/authActions';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

export default function AddNewSchedule() {
    const dispatch = useDispatch();
    const navigate = useNavigate();  
    const [doctorID,setDoctorID] = useState("");      
    const [newSchedule,setNewSchedule] = React.useState(new Date('2014-08-18'));    

    const registerThisUser = () => {
        dispatch(registerUser({ 
            doctorID,
            newSchedule,            
            navigate }));
    };
    const error = useSelector((state) => state.authReducer.error);
    const errorMessage = useSelector((state) => state.authReducer.errorMessage);
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);

    const handleRegister = (event) => {
        event.preventDefault();
        registerThisUser();          
    };

    useEffect(
        ()=>{
            if(isAuthenticated){
                navigate('/addNewSchedule')
            }
        }
    )
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
    <CssBaseline />  
    <Grid item xs={6} marginLeft={25} marginTop={5}>
     <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <CalendarMonthIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add New Schedule
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleRegister}
          sx={{ mt: 1 }}
        >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
          <TextField
                margin="normal"
                required
                fullWidth
                id="doctorID"
                label="Doctor ID"
                name="doctorID"
                autoComplete="doctorID"
                autoFocus
                onChange={(e) => setDoctorID(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Stack spacing={3}>
          <DesktopDatePicker
            label="New Schedule"
            inputFormat="MM/dd/yyyy"
            value={newSchedule}
            onChange={(newSchedule) => setNewSchedule(newSchedule)}
            renderInput={(params) => <TextField {...params} />}
          />
          </Stack>
        </Grid>            
        </Grid>          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add New Schedule
          </Button>
            { error &&  <Alert severity="error">{errorMessage}</Alert>}   
        </Box>
      </Box>
      </Grid> 
    </Grid>
  );
}


// import React from "react";
// import SidebarHeader from "../sidebar/SidebarHeader";
// import Sidebar from "../sidebar/User.sidebar";
// import '../../Styles/userdashboard.css';

// export default function AddNewSchedule() {
//   const styles = {
//     contentDiv: {
//       display: "flex",            
//     },
//     contentMargin: {
//       marginLeft: "20px",
//       width: "100%",
//     },    
//   };
//   return (
//     <div>    
//       <SidebarHeader/>
            
//       <div style={styles.contentDiv}>
//         <Sidebar/>
//         <div style={styles.contentMargin}>

//         <nav class="navbar navbar-light bg-light">
//         <a class="navbar-brand" href="#">          
//         </a>
//         </nav>                 

//           <div class="shadowNewSchedule shadow-lg p-4 mb-5 bg-white">
//               <form>               
//                 <h4>--ADD NEW SCHEDULE--</h4>
//                 <h1></h1>

//                 <div class="form-row">
//                   <div class="col-12">
//                     <label for="validationCustom03">Doctor ID</label>
//                     <input type="text" class="form-control" id="validationCustom03" placeholder="A001" required/>
//                     <div class="invalid-feedback">
//                       Please provide a valid ID.
//                     </div>
//                   </div>

//                   <div class="col-12">
//                     <label for="validationCustom03">New schedule</label>
//                     <input type="date" class="form-control" id="validationCustom03" placeholder="new schedule" required/>                    
//                   </div>                 

//                 </div>

//                 <div class="form-group">
//                   <div class="form-check">           
//                   </div>
//                 </div>

//                 <button class="signup btn btn-primary" type="submit">Add New Schedule</button>                      

//               </form>
//               </div>       
//         </div>
//       </div>

//       <div class="footer-c py-2">
//             <div class="container text-center">
//                 <p class="text-light mb-0 py-2">© 2022 Chamal MedicarePLC. All risghts reserved.</p>
//                 <h6 class="text-light mb-0 py-2">Solution by Greeklords</h6>
//             </div>
//         </div>
        
//     </div>
//   );
// }
