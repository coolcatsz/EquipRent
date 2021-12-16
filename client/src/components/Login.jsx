import React, { useState, useContext } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';


const Login = () => (
  <div>
    <LoginIcon fontSize="small"/>
    <Button style={{textTransform: 'none'}}>
      <MenuItem
        color="inherit"
        size="large"
      >
        <a href='/auth/google' style={{ textDecoration: 'none' }}>Login With Google</a>
      </MenuItem>
    </Button>
    {/* <Button>
      <MenuItem
        color="inherit"
        size="large"
        component={Link}
        to="/auth/google"
      >
      </MenuItem>
     
    </Button> */}
  </div>
);
export default Login;