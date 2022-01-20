import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Switch from '@mui/material/Switch';
import Paper from '@material-ui/core/Paper';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const DarkMode = ({authUser, darkMode, setTheme, theme }) => {

  const addTheme = (darkMode) => {
    axios.put(`/users/theme/${authUser}`, {theme: darkMode})
      .then((data) => console.log(data))
      .catch(err => console.error(err, 'frontErr'));
  };

  const handleToggle = (e) => {
    setTheme(e.target.checked);
    addTheme(e.target.checked);
  };

  return (
    <Paper elevation={0}>
      <LightModeIcon style={{ color: darkMode ? 'grey' : '#f4c732' }}></LightModeIcon>
      <Switch onChange={handleToggle} />
      <ModeNightIcon style={{ color: darkMode ? '#40457e' : 'grey' }}></ModeNightIcon>
    </Paper>
  );

};

export default DarkMode;