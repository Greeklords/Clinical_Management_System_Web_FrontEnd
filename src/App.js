import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Login from "../src/components/auth/Login";
import Home from "../src/components/home/Home";
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
import DisplayData from "./components/DisplayData";
import PhysicalPatientAdd from "./components/PhysicalPatientAdd";
import OnlinePatientAdd from "./components/OnlinePatientAdd";
import ReciCard from "./components/ReciCard";
import LabCard from "./components/LabCard";
import AllAppointment from "./components/AllAppointment";
import Lab from "./components/Lab";
import History from "./components/History";
import LabReport from "./components/LabReport";
import NavBar from "./components/navigationbar";
import ReciNavBar from "./components/Recinavigationbar";
import Rohitha from "./components/Rohitha";
import CheckUpDetails from "./components/Lab_Report/CheckUpDetails";
import RequestLabReport from "./components/Lab_Report/RequestLabReport";
import LabReportList from "./components/Lab_Report/LabReportList";
import LabReportIssue from "./components/Lab_Report/LabReportIssue";
import ViewDoctorCard from "./components/View_Doctor_Profile/ViewDoctorCard";
import DisplayDoctorCard from "./components/View_Doctor_Profile/DisplayDoctorCard";
import ViewDoctorsProfile from "./components/View_Doctor_Profile/ViewDoctorsProfile";
import Payment from "./components/Payment";
import Reci from "./components/Reci";
import Dog from "./components/Dog";
import Kol from "./components/Kol";
import ChatArea from './components/chat/ChatArea.js';
import Signaturepadarea from './components/Signaturepad';
import ReqMedicalReportList from './components/medical_certificate/reqest_medical';
import CanReqestMedicalCertificate from './components/medical_certificate/RequestMedicalForPatients';
import MedicalCertificate from './components/medical_certificate/medicalCertificate';
import MedicalIssueForm from './components/medical_certificate/doctorIssueForm';
import Patientreq_view from './components/medical_certificate/patientrequestview';
import ReqestForm from './components/medical_certificate/reqestform';
import UserresView from './components/medical_certificate/PatentResView';
import Imguplad from './components/medical_certificate/imgUpload';
import ImageView from './components/medical_certificate/ImgView';
import RecepView from './components/medical_certificate/RecepView';
import AppointmentHistory from "./components/AppointmentHistory";
import PatientAppointmentHistory from "./components/user/PatientAppointmentHistory";
import Income from "./components/charts/Income";
import DoctorManagement from "./components/admin/DoctorManagement";
import ReceptionistManagement from "./components/admin/ReceptionistManagement";
import LabAssistantManagement from "./components/admin/LabAssistantManagement";
import OfferForm from "./components/offers/offerform";

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

const drawerWidth = 300;


//RecepView
//Card
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
                                    <Route exact path='/' element={<Home/>}/>
                                    <Route exact path="/physicalpatientAdd"  element={<PhysicalPatientAdd/>}/>
                                    <Route exact path="/onlinePatientAdd"  element={<OnlinePatientAdd/>}/>
                                    <Route exact path="/receptionistProfile"  element={<ReciCard/>}/>
                                    <Route exact path="/viewDoctorCard"  element={<ViewDoctorCard/>}/>
                                    <Route exact path="/displayDoctorCard/:id"  element={<DisplayDoctorCard/>}/>
                                    <Route exact path="/labAssistantProfile"  element={<LabCard/>}/>
                                    <Route exact path="/lab"  element={<Lab/>}/>
                                    <Route exact path="/reci"  element={<Reci/>}/>
                                    <Route exact path="/uploadLabReport"  element={<LabReport/>}/>
                                    <Route exact path="/history"  element={<History/>}/>
                                    <Route exact path="/nav"  element={<NavBar/>}/>
                                    <Route exact path="/rohitha"  element={<Rohitha/>}/>
                                    <Route exact path="/reciNav"  element={<ReciNavBar/>}/>
                                    <Route exact path="/allAppointment"  element={<AllAppointment/>}/>
                                    <Route exact path="/checkUpDetails"  element={<CheckUpDetails/>}/>
                                    <Route exact path="/labReportList"  element={<LabReportList/>}/>
                                    <Route exact path="/labReportIssue"  element={<LabReportIssue/>}/>
                                    <Route exact path="/requestLabReport"  element={<RequestLabReport/>}/>
                                    <Route exact path="/payment"  element={<Payment/>}/>
                                    <Route exact path="/viewDoctorsProfile"  element={<ViewDoctorsProfile/>}/>
                                    <Route exact path="/dog"  element={<Dog/>}/>
                                    <Route exact path="/kol"  element={<Kol/>}/>
                                    <Route exact path="/ChatArea"  element={<ChatArea/>}/>
                                    <Route exact path="/Signaturepad"  element={<Signaturepadarea/>}/>
                                    <Route exact path="/ReqMedicalReportList"  element={<ReqMedicalReportList/>}/>
                                    <Route exact path="/CanReqestMedicalCertificate"  element={<CanReqestMedicalCertificate/>}/>
                                    <Route exact path="/MedicalCertificate"  element={<MedicalCertificate/>}/>
                                    <Route exact path="/MedicalIssueForm"  element={<MedicalIssueForm/>}/>
                                    <Route exact path="/Patientreq_view"  element={<Patientreq_view/>}/>
                                    <Route exact path="/ReqestForm"  element={<ReqestForm/>}/>
                                    <Route exact path="/UserresView"  element={<UserresView/>}/>
                                    <Route exact path="/Img_uplad"  element={<Imguplad/>}/>
                                    <Route exact path="/ImageView"  element={<ImageView/>}/>
                                    <Route exact path="/RecepView"  element={<RecepView/>}/>
                                    <Route path="/displaydata"  element={<DisplayData/>}/>

                                    <Route path="/signupRoles"  element={<SignupRoles/>}/>
                                    <Route path="/checkAppoinment"  element={<CheckAppointment/>}/>
                                    <Route path="/chart"  element={<Chart/>}/>
                                    <Route path="/checkIncomeDetails"  element={<CheckIncomeDetails/>}/>
                                    <Route path="/addNewSchedule"  element={<AddNewSchedule/>}/>
                                    <Route path="/confirmNewSchedule"  element={<ConfirmNewSchedule/>}/>
                                    <Route path="/appointmenthistory"  element={<AppointmentHistory/>}/>
                                    <Route path="/onlineprofile/:id"  element={<PatientAppointmentHistory/>}/>
                                    <Route path="/profile"  element={<DoctorProfile/>}/>
                                    <Route path="/dashboard"  element={<Dashboard/>}/>
                                    <Route path="/markDoctorAttendance"  element={<Attendance/>}/>
                                    <Route path="/doctor-management"  element={<DoctorManagement/>}/>
                                    <Route path="/receptionist-management"  element={<ReceptionistManagement/>}/>
                                    <Route path="/lab-assistant-management"  element={<LabAssistantManagement/>}/>
                                    <Route path="/profile/:id"  element={<DoctorProfile/>}/>
                                </Route>
                            </React.Fragment>
                        </Routes>
                    </Main>
                    <Routes>
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup"  element={<Register/>}/>
                        <Route path="/forgot-password"  element={<ForgotPassword/>}/>
                        <Route path="/reset-password/:userId/:token"  element={<ResetPassword/>}/>
                        <Route path="/income"  element={<Income/>}/>
                        <Route path="/issueOffers" element={<OfferForm/>}/>
                    </Routes>
                </Box>
            </BrowserRouter>
        </React.Fragment>
    );
}
export default App;


