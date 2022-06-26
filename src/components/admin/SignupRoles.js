import * as React from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { registerRoles, registerUser } from '../auth/redux/authActions';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SignupRoles() {
    const dispatch = useDispatch();
    const navigate = useNavigate();  
    const [role,setRole] = useState("");  
    const [firstName,setFName] = useState("");
    const [lastName,setLName] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");     
    const [dob, setDob] = React.useState(new Date('2014-08-18'));   
    const [password,setPassword] = useState("");
    const [confirmPassword,setconfirmPassword] = useState(""); 

    const registerThisUser = () => {
        dispatch(registerRoles({ 
            role,
            firstName, 
            lastName,
            email,
            phoneNumber,
            dob,
            password,
            confirmPassword,
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
                navigate('/signupRoles')
            }
        }
    )
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
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Account
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
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                required           
                value={role}
                label="role"
                autoComplete="role"
                autoFocus
                onChange={(e) => setRole(e.target.value)}
              >            
                <MenuItem value={'patient'}>Patient</MenuItem>
                <MenuItem value={'lab-assistant'}>Lab Assistant</MenuItem>
                <MenuItem value={'receptionist'}>Receptionist</MenuItem>
                <MenuItem value={'doctor'}>Doctor</MenuItem>
              </Select>
            </FormControl>
          </Box>                           
                
                        
        <TextField
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
            autoComplete="firstname"
            autoFocus
            onChange={(e) => setFName(e.target.value)}
          /> 
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastname"
          label="Last Name"
          name="lastname"
          autoComplete="lastname"
          autoFocus
          onChange={(e) => setLName(e.target.value)}
          />  
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phonenumber"
            label="Phone Number"
            name="phonenumber"
            autoComplete="phonenumber"
            autoFocus
            onChange={(e) => setPhoneNumber(e.target.value)}
          />          
          
          <Stack spacing={3}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            value={dob}
            onChange={(newValue) => setDob(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
          </Stack>
           
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"                
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Passoword"                
            id="confirmPassword"
            autoComplete="current-password"
            onChange={(e) => setconfirmPassword(e.target.value)}
          />          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
            { error &&  <Alert severity="error">{errorMessage}</Alert>}
          <Grid container>           
          </Grid>         
        </Box>
      </Box>


        </Grid>
    </Grid>
  
  );
}
