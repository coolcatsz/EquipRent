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
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';
import SearchStub from './SearchStub.jsx';

import { useBetween } from 'use-between';
import { useSharedUser } from './User.jsx';

import LogOut from './LogOut.jsx';
//ok

const NavBar = ({ setItemList }) => {

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
      .then(() => setIsLoggedIn(false));
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
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="/"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            EquipRent
          </Typography>
          <SearchStub setItemList={setItemList} />
          <Button
            size="large"
            component={Link}
            to="/lender"
            color="inherit"
          >
            Be a Lender
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
              to="/profile"
            >
              <Avatar /> Profile
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
          Account Settings
            </MenuItem>
            <MenuItem
              component={LogOut}
            >
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
          Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;