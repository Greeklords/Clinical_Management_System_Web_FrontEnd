import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from '../Resources/ChamalMedicare.png';
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountMenu from './AccountMenu';
import {useDispatch, useSelector} from "react-redux";
import menu_config,
      {patient_menu_config,
       doctor_menu_config,
       administrator_menu_config,
       labAssistant_menu_config,
       receptionist_menu_config } from "./config/navbar/menu.config";
import {logOutUser} from "./auth/redux/authActions";
import {toggleTheme} from "./auth/redux/authActions";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Header = (props) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const { open, setOpen } = props;
    const dispatch = useDispatch();
    const signOutHandler = async () => {
        dispatch(logOutUser());
        setOpen(false);
        navigate('/login');
    };
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
    const themeMode = useSelector((state) => state.authReducer.theme);
    const user = useSelector((state) => state.authReducer.user);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            {isAuthenticated ? (
                <React.Fragment>
                    <AppBar position="fixed" open={open}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                            <div style={{ flexGrow: 1 }}>
                                <a href="/">
                                    <img
                                        src={logo}
                                        alt="logo"
                                        style={{
                                            padding: '10px',
                                            maxWidth: '150px',
                                        }}
                                    />
                                </a>
                            </div>
                            <IconButton
                                sx={{ ml: 1 }}
                                onClick={() => dispatch(toggleTheme())}
                                color="inherit"
                            >
                                {themeMode === 'dark' ? (
                                    <Brightness7Icon />
                                ) : (
                                    <Brightness4Icon />
                                )}
                            </IconButton>
                            <AccountMenu
                                logOut={signOutHandler}
                            />
                        </Toolbar>
                    </AppBar>

                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? (
                                    <ChevronLeftIcon />
                                ) : (
                                    <ChevronRightIcon />
                                )}
                            </IconButton>
                        </DrawerHeader>
                        {(user.role === 'patient'
                                ? patient_menu_config
                                : user.role === 'doctor'
                                    ? doctor_menu_config
                                    : user.role === 'receptionist'
                                        ? receptionist_menu_config
                                        : user.role === 'lab-assistant'
                                            ? labAssistant_menu_config
                                            : user.role === 'administrator'
                                                ? administrator_menu_config
                                                : menu_config
                        ).map((listItem) =>
                            !listItem.sub ? (
                                <React.Fragment key={listItem.name}>
                                    <Divider sx={{ margin: '10px' }} />
                                    <ListItem
                                        button
                                        key={listItem.name}
                                        onClick={() => navigate(listItem.to)}
                                    >
                                        <ListItemIcon>{listItem.icon}</ListItemIcon>
                                        <ListItemText primary={listItem.name} />
                                    </ListItem>
                                </React.Fragment>
                            ) : (
                                <NestedList
                                    key={listItem.name}
                                    listItem={listItem}
                                    navigate={navigate}
                                />
                            )
                        )}
                    </Drawer>
                </React.Fragment>
            ) : (
                <UserAppBar />
            )}
        </React.Fragment>
    );
};

const NestedList = (props) => {
    const [listOpen, setListOpen] = React.useState(false);
    const { listItem, navigate } = props;
    const handleClick = () => {
        setListOpen(!listOpen);
    };
    return (
        <React.Fragment>
            <Divider sx={{ margin: '10px' }} />
            <ListItem button key={listItem.name} onClick={handleClick}>
                <ListItemIcon>{listItem.icon}</ListItemIcon>
                <ListItemText primary={listItem.name} />
                {listOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={listOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {listItem.sub.map((subListItem) => (
                        <ListItem
                            button
                            key={subListItem.name}
                            onClick={() => navigate(subListItem.to)}
                        >
                            <ListItemIcon />
                            <ListItemText primary={subListItem.name} />
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </React.Fragment>
    );
};

const UserAppBar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: '100%',
            }}
        >
            <Toolbar>
                <div style={{ flexGrow: 1 }}>
                    <a href="/">
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                padding: '10px',
                                maxWidth: '150px',
                            }}
                        />
                    </a>
                </div>
            </Toolbar>
        </AppBar>
    );
};
export default Header;
