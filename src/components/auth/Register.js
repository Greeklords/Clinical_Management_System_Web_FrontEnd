import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './redux/authActions';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'All rights reserved.Chamal Medicare © '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [role,setRole] = useState("");
    const [firstName,setFName] = useState("");
    const [lastName,setLName] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [dob,setDob] = useState(new Date('2014-08-18'));
    const [password,setPassword] = useState("");
    const [confirmPassword,setconfirmPassword] = useState("");

    const registerThisUser = () => {
        dispatch(registerUser({
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
    const loading = useSelector((state) => state.authReducer.loading);
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
                navigate('/login')
            }
        }
    )
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
    <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/8JKNDO0Jtcc/1600x900)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square display='flex' flexDirection='column' justifyContent='center'>
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
              <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleRegister}
              sx={{ mt: 1 }}
            >
                <Grid container xs={12}>
                    <Grid item xs={12} padding='0 10px'>
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
                    </Grid>
                    <Grid item xs={12} lg={6} padding='0 10px'>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        autoComplete="firstName"
                        autoFocus
                        onChange={(e) => setFName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6} padding='0 10px'>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lastName"
                        autoFocus
                        onChange={(e) => setLName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} padding='0 10px'>
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
                    </Grid>
                    <Grid xs={12} lg={6} padding='0 10px'>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phoneNumber"
                        label="Phone Number"
                        name="phoneNumber"
                        autoComplete="phoneNumber"
                        autoFocus
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={12} lg={6} padding='0 10px'>
                        <Stack spacing={3} paddingTop='16px'>
                            <DesktopDatePicker
                                label="Date desktop"
                                inputFormat="yyyy-MM-dd"
                                value={dob}
                                container="inline"
                                inputStyle={{ textAlign: 'center' }}
                                onChange={(date) => setDob(date)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </Grid>
                    <Grid xs={12} padding='0 10px'>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Grid>
                    <Grid xs={12} padding='0 10px'>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="current-password"
                        onChange={(e) => setconfirmPassword(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} padding='0 10px'>
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
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
                        <Grid item>
                          <Link href="/login" variant="body2">
                            {"Already have an account? Sign In"}
                          </Link>
                        </Grid>
                      </Grid>
                      <Copyright sx={{ mt: 5 }} />
                    </Grid>
                </Grid>
            </Box>
          </Box>
        </Grid>
  </Grid>
  );
}
