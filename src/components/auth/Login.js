import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './redux/authActions';
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
    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup
        .string('Enter your password')
        .min(5, 'Password should be of minimum 5 characters length')
        .required('Password is required'),
});

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginThisUser = (email, password) => {
        dispatch(loginUser({ email, password, navigate }));
    };
    const loading = useSelector((state) => state.authReducer.loading);
    const error = useSelector((state) => state.authReducer.error);
    const errorMessage = useSelector((state) => state.authReducer.errorMessage);
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            loginThisUser(values.email, values.password)
        },
    });

    useEffect(
        ()=>{
            if(isAuthenticated){
                navigate('/')
            }
        },[]
    )

  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
                <form onSubmit={formik.handleSubmit}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    type="email"
                    label="Email Address"
                    autoFocus
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />
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
                    Sign In
                  </Button>
                    { error &&  <Alert severity="error">{errorMessage}</Alert>}
                  <Grid container>
                    <Grid item xs>
                      <Link href="/forgot-password" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </form>
          </Box>
        </Grid>
      </Grid>
  );
}
