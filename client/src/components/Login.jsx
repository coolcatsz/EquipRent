import React, { useState, useContext } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';


const Login = () => {
  return (
    <div>
      
      {/* <MenuItem
        color="inherit"
        size="large"
      > */}
      <LoginIcon fontSize="small"/>
      <a href='/auth/google' style={{ textDecoration: 'none' }}>Login With Google</a>
      {/* </MenuItem> */}
    </div>
  );

};



export default Login;