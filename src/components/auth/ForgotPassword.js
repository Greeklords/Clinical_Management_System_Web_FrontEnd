import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from "./redux/authActions";
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
});

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const forgotPasswordHandler= (email) => {
    dispatch(forgotPassword({ email, navigate }));
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const error = useSelector((state) => state.authReducer.error);
  const errorMessage = useSelector((state) => state.authReducer.errorMessage);
  const successMessage = useSelector((state) => state.authReducer.successMessage);

  const formik = useFormik({
    initialValues: {
        email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      forgotPasswordHandler(values.email)
    },
});
  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
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
              Forgot Password
            </Typography>
            <Grid container mt='20px' >
              <Grid item md={8} margin='auto'>
              <Typography align='center' variant="subtitle1" >Lost your password? Please enter email address. You will receive a link to create a new password via email.</Typography>
              </Grid>
            </Grid>
            <Box
                component="form"
                noValidate
                onSubmit={formik.handleSubmit}
                sx={{ mt: 1 }}
            >
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
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={loading}
              >
                Reset Password
              </Button>
              { error &&  <Alert severity="error">{errorMessage}</Alert>}
              { !error && successMessage !== "" && <Alert severity="success">{successMessage}</Alert>}
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/FnA5pAzqhMM/1600x900)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                  t.palette.mode === 'light'
                      ? t.palette.grey[50]
                      : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
        />
      </Grid>
  );
}
