import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Login from "../src/components/auth/Login";
import Home from "./components/home/Home";
import ForgotPassword from "./components/auth/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Register from "./components/auth/Register";
import ResetPassword from "./components/auth/ResetPassword";
import Dashboard from "./components/dashboard/Dashboard";
import Attendance from "./components/receptionist/Attendance";
import SignupRoles from "./components/admin/SignupRoles";
import Chart from "./components/charts";
import DoctorProfile from "./components/admin/DoctorProfile";
import AddNewSchedule from "./components/doctor/AddNewSchedule";
import ConfirmNewSchedule from "./components/admin/ConfirmNewSchedule";
import CheckAppointment from "./components/doctor/CheckAppointment";
import CheckIncomeDetails from "./components/doctor/CheckIncomeDetails";
import AppointmentHistory from "./components/AppointmentHistory";
import PatientAppointmentHistory from "./components/user/PatientAppointmentHistory";
import TransferList from "./components/receptionist/TransferList";


const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const App=()=> {
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <BrowserRouter>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <Header open={open} setOpen={setOpen} DrawerHeader={DrawerHeader} />
                    <Main open={open}>
                        <DrawerHeader />
                        <Routes>
                            <React.Fragment>
                                <Route path="/" element={<PrivateRoute/>} >                                    
                                    <Route path="/"  element={<Home/>}/>
                                </Route>

                                <Route path="/chart" element={<PrivateRoute/>} >                                    
                                    <Route path="/chart"  element={<Chart/>}/>
                                </Route>

                                <Route path="/confirmNewSchedule" element={<PrivateRoute/>} >                                    
                                    <Route path="/confirmNewSchedule"  element={<ConfirmNewSchedule/>}/>
                                </Route>

                                <Route path="/addNewSchedule" element={<PrivateRoute/>} >                                    
                                    <Route path="/addNewSchedule"  element={<AddNewSchedule/>}/>
                                </Route>

                                <Route path="/checkIncomeDetails" element={<PrivateRoute/>} >                                    
                                    <Route path="/checkIncomeDetails"  element={<CheckIncomeDetails/>}/>
                                </Route>

                                <Route path="/appointmenthistory" element={<PrivateRoute/>} >                                    
                                    <Route path="/appointmenthistory"  element={<AppointmentHistory/>}/>
                                </Route>

                                <Route path="/onlineprofile/:id" element={<PrivateRoute/>} >                                    
                                    <Route path="/onlineprofile/:id"  element={<PatientAppointmentHistory/>}/>
                                </Route>

                                <Route path="/getUser/:id" element={<PrivateRoute/>} >                                    
                                    <Route path="/getUser/:id"  element={<DoctorProfile/>}/>
                                </Route>
                            </React.Fragment>
                        </Routes>
                    </Main>
                    <Routes>
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup"  element={<Register/>}/>
                        <Route path="/forgot-password"  element={<ForgotPassword/>}/>
                        <Route path="/reset-password/:userId/:token"  element={<ResetPassword/>}/>

                        
                        <Route path="/dashboard"  element={<Dashboard/>}/>
                        <Route path="/markDoctorAttendance"  element={<Attendance/>}/>                                               
                        <Route path="/signupRoles"  element={<SignupRoles/>}/>                      
                        <Route path="/get/:id"  element={<CheckAppointment/>}/>                      
                        <Route path="/transfer"  element={<TransferList/>}/> 
                    </Routes>
                </Box>
            </BrowserRouter>
        </React.Fragment>
    );
}
export default App;

