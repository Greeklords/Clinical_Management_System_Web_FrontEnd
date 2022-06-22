import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import Divider from '@mui/material/Divider';

export default function CheckAppointment() { 
  const [notes,getNotes] = React.useState('');
  
  const url = 'http://localhost:4000/';

  React.useEffect(()=> {
    getAllNotes();
  });

  const getAllNotes=()=>{
    axios.get('${url}past')
    .then((response)=>{
      const allNotes = response.data.notes.getNotes;
      getNotes(allNotes);
    })    
    .catch(error => console.error('Error: ${error}'));
  }
  return (
    <Grid container component="main" sx={{ height: '100vh'}}>
    <CssBaseline/>
    <Grid container rowSpacing={1}/>    
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

    <Grid item xs={6}> 
    <Typography sx ={{fontSize: 30, textAlign:'right'}}>Check Appointments</Typography>  
    </Grid>

    <Grid container rowSpacing={1}/>

    <Grid item xs={5}> 
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginLeft:5}}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
              Patient name
            </Typography>
          </Grid>          
        </Grid>
        <Typography color="text.secondary" variant="body2">          
          Date : 17/6/2022          
        </Typography>
        <Typography color="text.secondary" variant="body2">       
          Time : 6.43 PM
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
        >
          Cancel
        </Button>      
      </Box>    
    </Grid>


    <Grid item xs={5}> 
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginLeft:5}}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
              Patient name
            </Typography>
          </Grid>          
        </Grid>
        <Typography color="text.secondary" variant="body2">          
          Date : 17/6/2022          
        </Typography>
        <Typography color="text.secondary" variant="body2">       
          Time : 6.43 PM
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
        >
          Cancel
        </Button>      
      </Box>    
    </Grid>
    </Grid>
    </Grid>
  );
}



// import React from "react";
// import SidebarHeader from "../sidebar/SidebarHeader";
// import Sidebar from "../sidebar/User.sidebar";
//import '../../Styles/userdashboard.css';

// export default function DoctorDashboard() {
//   const styles = {
//     contentDiv: {
//       display: "flex",            
//     },
//     contentMargin: {
//       marginLeft: "1rem",
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

//         <h4 className="appointmenttitle">CHECK DAILY APPOINTMENTS</h4>                 
          
//           <div class="cardAppoinment card">
//               <div class="card-body">
//                 <h4 class="card-title">20</h4>        

//                 <div class="row">
//                 <div class="col-md-4 form-group text-center">
//                     <a href="#" class="btn btn-primary">Confirm Appointment</a>
//                 </div>                
//                 <div class="col-md-4 form-group text-center">
//                 <a href="#" class="cancel btn btn-primary">Cancel Appointment</a>
//                 </div>
//                 </div>
                
//               </div>
//           </div>

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
