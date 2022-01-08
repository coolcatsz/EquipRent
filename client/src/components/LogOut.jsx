import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import axios from 'axios';
import ListItemIcon from '@mui/material/ListItemIcon';
const LogOut = () => (
  <div>
    <Button style={{textTransform: 'none'}}>
      <MenuItem
      >
        <ListItemIcon>
          <Logout fontSize="medium" />
        </ListItemIcon>
        <a href='/logout' style={{ textDecoration: 'none' }}>Log Out</a>
      </MenuItem>
    </Button>
  </div>
);

export default LogOut;