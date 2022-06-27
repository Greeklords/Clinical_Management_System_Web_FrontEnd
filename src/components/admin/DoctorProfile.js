import * as React from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctorProfile, registerUser } from '../auth/redux/authActions';
import axios from 'axios';


export default function DoctorProfile() {  

  const [userId, setUserId] = useState({})
  const { id } = useParams()   

  //var response=await axios.get(`http://localhost:8080/user/get/all?branch_id=${localStorage.getItem("branch_id")}`);
    useEffect(() => {
        if ( id ) {
            axios.get(`http://localhost:4000/localhost:4000/user/getUser?id=${id}`)
                .then(res => {
                    console.log(res)
                    setUserId(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);   

    const [registrationNumber,setregistrationNumber] = useState(""); 
    const [university,setuniversity] = useState(""); 
    const [degree,setdegree] = useState(""); 
    const [experience,setexperience] = useState(""); 
    const [workingHospital,setworkingHospital] = useState(""); 
    const [address,setaddress] = useState(""); 
    const [chargePerPatient,setchargePerPatient] = useState(""); 
    const [languages,setlanguages] = useState(""); 
    const [category,setcategory] = useState(""); 
      
    function handleRegister(e){
      e.preventDefault();
  
      const newReceptionist = { 
        userId,              
        registrationNumber,
        university,
        degree,
        experience,
        workingHospital,
        address,
        chargePerPatient,
        languages,
        category,      
      }

      axios.post("http://localhost:4000/doctor/addProfile",newReceptionist).then(()=>{
        alert("Doctor Profile Added")      
      }).catch((err)=>{
        alert(err)
      })      
    }  

    const [items, setItems] = useState([]);

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('user'));
      if (items) {
      setItems(items);
      }
    }, []);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const [registrationNumber,setregistrationNumber] = useState(""); 
    // const [university,setuniversity] = useState(""); 
    // const [degree,setdegree] = useState(""); 
    // const [experience,setexperience] = useState(""); 
    // const [workingHospital,setworkingHospital] = useState(""); 
    // const [address,setaddress] = useState(""); 
    // const [chargePerPatient,setchargePerPatient] = useState(""); 
    // const [languages,setlanguages] = useState(""); 
    // const [category,setcategory] = useState(""); 

    // const registerThisUser = () => {
    //     dispatch(addDoctorProfile({ 
    //         // role,            
    //         registrationNumber,
    //         university,
    //         degree,
    //         experience,
    //         workingHospital,
    //         address,
    //         chargePerPatient,
    //         languages,
    //         category,
    //         navigate }));
    // };
    // const error = useSelector((state) => state.authReducer.error);
    // const errorMessage = useSelector((state) => state.authReducer.errorMessage);
    // const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);

    // const handleRegister = (event) => {
    //     event.preventDefault();
    //     registerThisUser();          
    // };

    // useEffect(
    //     ()=>{
    //         if(isAuthenticated){
    //             navigate('/addProfile/:id')
    //         }
    //     }
    // )    
  return (
    <Grid container component="main" sx={{ height: '100vh'}}>
    <CssBaseline/>
    <Grid container rowSpacing={3}/>      
    
        <Grid item xs={6} marginLeft={25}>
            
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
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Doctor Profile
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleRegister}
          sx={{ 
            mt: 1,
            my: 8,
            mx: 4,            
            flexDirection: 'column',            
            }}                              
        >
        <Grid container spacing={2}/>         
        
        
              <TextField
                margin="normal"
                required
                fullWidth
                name="userId"
                label= {userId._id}               
                id="userId"                
                onChange={(e) => setUserId(e.target.value)}
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                name="registrationNumber"
                label="Registration Number"                
                id="registrationNumber"                
                onChange={(e) => setregistrationNumber(e.target.value)}
              /> 

              <TextField
                margin="normal"
                required
                fullWidth
                name="university"
                label="University"                
                id="university"                
                onChange={(e) => setuniversity(e.target.value)}
              /> 

              <TextField
                margin="normal"
                required
                fullWidth
                name="degree"
                label="Degree"                
                id="degree"                
                onChange={(e) => setdegree(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="experience"
                label="Experience"                
                id="experience"                
                onChange={(e) => setexperience(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="workingHospital"
                label="Working Hospital"                
                id="workingHospital"                
                onChange={(e) => setworkingHospital(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="address"
                label="Address"                
                id="address"                
                onChange={(e) => setaddress(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="chargePerPatient"
                label="Charge per patient"                
                id="chargePerPatient"                
                onChange={(e) => setchargePerPatient(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="languages"
                label="Languages"                
                id="languages"                
                onChange={(e) => setlanguages(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="category"
                label="Category"                
                id="category"                
                onChange={(e) => setcategory(e.target.value)}
              />
                 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Doctor Profile
          </Button>
            
          <Grid container>           
          </Grid>         
        </Box>
      </Box>


        </Grid>
    </Grid>
  
  );
}


// <Typography>User id: {userId.firstName}</Typography>
