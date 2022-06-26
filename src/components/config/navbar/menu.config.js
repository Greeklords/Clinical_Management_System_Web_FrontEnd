import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import HelpIcon from '@mui/icons-material/Help';
import FolderSharedIcon from '@mui/icons-material/FolderShared';

export const menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },    
    {
        name: 'Reports',
        icon: <FolderSharedIcon />,
        sub: [
            { name: 'Medical Reports', to: '#' },
            { name: 'Lab reports', to: '#' },            
        ],
    },    
    { name: 'Helps & Services', to: '#', icon: <HelpIcon /> },
    { name: 'Ratings & Reviews', to: '#', icon: <StarIcon /> },
];

export const patient_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },    
    {
        name: 'Reports',
        icon: <FolderSharedIcon />,
        sub: [
            { name: 'Medical Reports', to: '#' },
            { name: 'Lab reports', to: '#' },            
        ],
    },
    { name: 'Appointment', to: '/onlineprofile/:id', icon: <WorkHistoryIcon /> },
    { name: 'Helps & Services', to: '#', icon: <HelpIcon /> },
    { name: 'Ratings & Reviews', to: '#', icon: <StarIcon /> },
];

export const doctor_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },    
    { name: 'Medical Request', to: '/transfer', icon: <FolderSharedIcon />},      
    { name: 'Profile', to: '/getUser/:id', icon: <FolderSharedIcon />},      
    { name: 'Appointment', to: '/get/:id', icon: <HelpIcon /> },
    { name: 'New Schedule', to: '/addNewSchedule', icon: <HelpIcon /> },
    { name: 'Income details', to: '/checkIncomeDetails', icon: <HelpIcon /> },
    { name: 'Ratings & Reviews', to: '#', icon: <StarIcon /> },
];
export const administrator_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },       
    { name: 'Requested Schedules', to: '/confirmNewSchedule', icon: <HelpIcon /> }, 
    { name: 'Dashboard', to: '/chart', icon: <HelpIcon /> },    
];

export const labAssistant_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },
    { name: 'Checkup details', to: '#', icon: <HomeIcon /> },      
    { name: 'Lab reports', to: '#', icon: <HelpIcon /> },    
];

export const receptionist_menu_config = [
    { name: 'Home', to: '/', icon: <HomeIcon /> },  
    { name: 'Appointments', to: '/appointmenthistory', icon: <WorkHistoryIcon /> }, 
];


export default menu_config;
