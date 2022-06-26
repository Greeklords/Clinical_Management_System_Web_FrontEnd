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

export default function ResetPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const token = params.token;
    const userId = params.userId;
    const [isResetLinkValid,setIsResetLinkValid] = useState(false);


    const resetPasswordHandler= (password) => {
        dispatch(resetPassword({ password, userId, token, navigate }));
    };
    const error = useSelector((state) => state.authReducer.error);
    const errorMessage = useSelector((state) => state.authReducer.errorMessage);

    const formik = useFormik({
      initialValues: {
          password: '',
          confirmPassword: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        resetPasswordHandler(values.password, values.confirmPassword)
      },
    });

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
                onSubmit={formik.handleSubmit}
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
