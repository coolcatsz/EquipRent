import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import axios from 'axios';

const LogOut = () => (
  <div>
    <MenuItem>
      <Logout fontSize="small"/>
      <a href='/logout' style={{ textDecoration: 'none' }}>Log Out</a>
    </MenuItem>
  </div>
);

export default LogOut;