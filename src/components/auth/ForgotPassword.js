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


export default function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');

  const forgotPasswordHandler= () => {
    dispatch(forgotPassword({ email, navigate }));
  };
  const error = useSelector((state) => state.authReducer.error);
  const errorMessage = useSelector((state) => state.authReducer.errorMessage);

  const handleSubmit = (event) => {
    event.preventDefault();
    forgotPasswordHandler();
  };

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
                onSubmit={handleSubmit}
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
                  onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
              >
                Reset Password
              </Button>
              { error &&  <Alert severity="error">{errorMessage}</Alert>}
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
