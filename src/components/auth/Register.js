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
import { useFormik } from 'formik';
import * as Yup from 'yup';


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

const validationSchema = Yup.object({  
  role: Yup.string().required('Role is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup
      .string('Enter your last name')      
      .required('Last name is required'),
  email: Yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  phoneNumber: Yup
      .string()
      .required("Phone number is required")
      .matches(/^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,"Invalid phone number"), 
  password: Yup
      .string('Enter your password')
      .min(5, 'Password should be of minimum 5 characters length')
      .required('Password is required'),
  confirmPassword: Yup
      .string()
      .when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        )
      })  
});

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [role,setRole] = useState("");  
    const [dob, setDob] = React.useState(new Date('2014-08-18T21:11:54'));
    
    const registerThisUser = (role,firstName,lastName,email,phoneNumber,dob,password,confirmPassword,) => {
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
    const error = useSelector((state) => state.authReducer.error);
    const errorMessage = useSelector((state) => state.authReducer.errorMessage);
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);

    // const handleRegister = (event) => {
    //     event.preventDefault();
    //     registerThisUser();
    // };

    const formik = useFormik({
      initialValues: {
          firstName: '',
          lastName:'',
          email: '',
          phoneNumber:'',
          // dob:new Date('2014-08-18T21:11:54'),
          password: '',
          confirmPassword:''
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
          registerThisUser(values.role,values.firstName,values.lastName, values.email,values.phoneNumber,values.dob,values.password,values.confirmPassword)
      },
    });

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
              onSubmit={formik.handleSubmit}
              sx={{ mt: 1 }}
            >
                <Grid container xs={12}>
                    <Grid item xs={12} padding='0 10px'>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                          <Select
                            required                            
                            label="role"
                            autoComplete="role"
                            autoFocus
                            value={formik.values.role}
                            onChange={formik.handleChange}
                            error={formik.touched.role && Boolean(formik.errors.role)}
                            helperText={formik.touched.role && formik.errors.role}
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
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
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
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
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
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
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
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                      />
                    </Grid>
                    <Grid xs={12} lg={6} padding='0 10px'>
                        <Stack spacing={3} paddingTop='16px'>
                            <DesktopDatePicker
                                label="Date desktop"
                                inputFormat="MM/dd/yyyy"
                                container="inline"
                                inputStyle={{ textAlign: 'center' }}                                
                                onChange={(newValue) => setDob(newValue)}
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
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
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
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
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
