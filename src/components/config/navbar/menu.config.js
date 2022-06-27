import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import HelpIcon from '@mui/icons-material/Help';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ChatIcon from '@mui/icons-material/Chat';
import BiotechIcon from '@mui/icons-material/Biotech';
import HistoryIcon from '@mui/icons-material/History';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

export const menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },    
    {
        name: 'Reports',
        icon: <FolderSharedIcon />,
        sub: [
            { name: 'Medical Reports', to: '/ReqMedicalReportList' },
            { name: 'Lab reports', to: '/requestLabReport' },            
        ],
    },    
    { name: 'Helps & Services', to: '#', icon: <HelpIcon /> },
    { name: 'Ratings & Reviews', to: '#', icon: <StarIcon /> },
];

export const patient_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },
    { name: 'Find a doctor', to: '/viewDoctorCard', icon: <PersonSearchIcon /> },    
    {
        name: 'Reports',
        icon: <FolderSharedIcon />,
        sub: [
            { name: 'Medical Reports', to: '#' },
            { name: 'Lab reports', to: '/requestLabReport' },            
        ],
    },
    { name: 'Appointment', to: '/onlineprofile/:id', icon: <HistoryIcon /> },
    { name: 'Helps & Services', to: '#', icon: <HelpIcon /> },
    { name: 'Ratings & Reviews', to: '#', icon: <StarIcon /> },
];

export const doctor_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },    
    { name: 'Medical Request', to: '/ReqMedicalReportList', icon: <MedicalInformationIcon />},      
    { name: 'Profile', to: '/getUser/:id', icon: <AccountCircleIcon />},      
    { name: 'Appointment', to: '/checkAppoinment', icon: <HistoryIcon /> },
    { name: 'New Schedule', to: '/addNewSchedule', icon: <CalendarMonthIcon /> },
    { name: 'Income details', to: '/checkIncomeDetails', icon: <InsertChartIcon /> },
    { name: 'Chat Area', to: '/ChatArea', icon: <ChatIcon /> }, 
    { name: 'Ratings & Reviews', to: '#', icon: <StarIcon /> },    
];
export const administrator_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },       
    { name: 'Requested Schedules', to: '/confirmNewSchedule', icon: <CalendarMonthIcon /> },
    { name: 'Chat Area', to: '/ChatArea', icon: <ChatIcon /> }, 
    { name: 'Dashboard', to: '/chart', icon: <InsertChartIcon /> },    
    { name: 'Appointments', to: '/appointmenthistory', icon: <HistoryIcon /> }, 
];

export const labAssistant_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },
    { name: 'Checkup details', to: '#', icon: <FolderSharedIcon /> },      
    { name: 'Lab reports', to: '#', icon: <BiotechIcon /> },    
];

export const receptionist_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },  
    { name: 'Chat Area', to: '/ChatArea', icon: <ChatIcon /> }, 
    { name: 'Appointments', to: '/appointmenthistory', icon: <HistoryIcon /> },
    { name: 'Make an appointment', to: '/physicalpatientAdd', icon: <BookOnlineIcon /> },   
];


export default menu_config;