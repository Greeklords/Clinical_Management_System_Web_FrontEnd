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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './redux/authActions';
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


export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [role, setRole] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const loginThisUser = () => {
        dispatch(loginUser({ email, password, role, navigate }));
    };
    const loading = useSelector((state) => state.authReducer.loading);
    const error = useSelector((state) => state.authReducer.error);
    const errorMessage = useSelector((state) => state.authReducer.errorMessage);
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);

    const handleSubmit = (event) => {
        event.preventDefault();
        loginThisUser();
    };
    useEffect(
        ()=>{
            if(isAuthenticated){
                navigate('/')
            }
        },[]
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
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
            <MenuItem value={10}>patient</MenuItem>            
            <MenuItem value={20}>doctor</MenuItem>            
            <MenuItem value={40}>receptionist</MenuItem>
            <MenuItem value={50}>lab assistant</MenuItem>
          </Select>
        </FormControl>
      </Box>
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
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
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
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}
