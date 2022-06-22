import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {useNavigate, useParams} from "react-router-dom";
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from "./redux/authActions";
import {useEffect, useState} from "react";
import createRequest from '../../utils/axios';

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


export default function ResetPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const token = params.token;
    const userId = params.userId;
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [isResetLinkValid,setIsResetLinkValid] = useState(false);


    const resetPasswordHandler= () => {
        dispatch(resetPassword({ password, userId, token, navigate }));
    };
    const error = useSelector((state) => state.authReducer.error);
    const errorMessage = useSelector((state) => state.authReducer.errorMessage);

    async function fetchData() {
        try{
            const result = await createRequest().get(`user/forgot-password/${userId}/${token}`);
            if(result){
                setIsResetLinkValid(true)
            }
        }catch (e){
            setIsResetLinkValid(false);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        resetPasswordHandler();
    };
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
    if(!isResetLinkValid){
        return <div></div>
    }
    return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} margin='20vh auto' elevation={6} square display='flex' flexDirection='column' justifyContent='center'>
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
              Reset Password
            </Typography>
            <Grid container mt='20px' >
              <Grid item md={8} margin='auto'>
              <Typography align='center' variant="subtitle1" >Please enter a new password</Typography>
              </Grid>
            </Grid>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
            >
                <Grid container xs={12}>
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
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Grid>
                </Grid>
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
      </Grid>
  );
}
