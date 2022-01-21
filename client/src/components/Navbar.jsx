import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Bookmarks from '@mui/icons-material/Bookmarks';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';
import SearchStub from './SearchStub.jsx';
import DarkMode from './DarkMode.jsx';
import Paper from '@material-ui/core/Paper';
import EmailIcon from '@mui/icons-material/Email';

import logo from '../img/logo.png';



import { useBetween } from 'use-between';
import { useSharedUser } from './User.jsx';

import LogOut from './LogOut.jsx';
//ok

const NavBar = ({ setItemList, authUser, darkMode, setTheme, theme, getAllItem }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState(null);


  const handleLogin = () => {
    setIsLoggedIn();
  };
  // const clickLogin = () => {
  //   setToggleLogin(!toggleLogin);
  // };


  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    axios.get('/logout')
      .then(() => setIsLoggedIn(false))
      .catch((err) => console.error('handleLogout error'));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { currentUser, changeCurrentUser } = useSharedUser();
  React.useEffect(() => {
    axios.get('/auth/verify')
      .then(({data}) => {
        setIsLoggedIn(!!data);
        setUser(data);
        changeCurrentUser(data);
      })
      .catch(err => console.error(err))
    ;
  }, []);


  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Paper>
          <Toolbar>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              width={'100%'}
              sx={{ mr: 2 }}
              component={Link}
              to="/"
            >
              <img height="30" width="65" alt="logo" src={logo} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontSize: 25 }}
              fontFamily='Roboto'
            >
            EquipRent
            </Typography>
            <DarkMode authUser={authUser} theme={theme} darkMode={darkMode} setTheme={setTheme}/>
            <SearchStub setItemList={setItemList} />
            <Button
              size="large"
              component={Link}
              to="/lender"
              color="inherit"
            >
            Be a Lender
            </Button>
            <Button
              size="large"
              component={Link}
              to="/map"
              color="inherit"
            >
           Map
            </Button>
            <Button
              size="large"
              component={Link}
              to="/chat"
              color="inherit"
            >
              <EmailIcon/>
            </Button>
            {
              (user && user.thumbnail) ?

                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                  <Tooltip title="Account">
                    <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                      <Avatar sx={{ width: 32, height: 32 }}>
                        <img src={user.thumbnail} width={'100%'} />
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                :
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                  <Tooltip title="Account">
                    <IconButton size="small" sx={{ ml: 2 }}>
                      <a href='/auth/google' style={{ textDecoration: 'none' }}>
                        <GoogleIcon/>
                      </a>
                    </IconButton>
                  </Tooltip>
                </Box>
            }
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem
                color="inherit"
                size="large"
                component={Link}
                to={`/profile/${authUser}`}
              >
                <Avatar /> Profile
              </MenuItem>
              <Divider />
              <MenuItem
                component={Link}
                to="/bookmark"
              >
                <ListItemIcon>
                  <Bookmarks fontSize="small" />
                </ListItemIcon>
              BookMarks
              </MenuItem>
              <MenuItem
                component={LogOut}
              >
              Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </Paper>
      </AppBar>
    </Box>
  );
};

export default NavBar;