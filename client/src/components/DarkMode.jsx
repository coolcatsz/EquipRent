import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Switch from '@mui/material/Switch';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const DarkMode = () => {
  
  // const [dark, setDark] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  //setting the users state
  const addTheme = () => {
    axios.patch('/users/theme/:id')
      .then(data => res.send(data))
      .catch(err => console.error(err));
  };


  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0}>
        <LightModeIcon style={{ color: darkMode ? 'grey' : '#f4c732' }}></LightModeIcon>
        <Switch onChange={() => setDarkMode(!darkMode)} />
        <ModeNightIcon style={{ color: darkMode ? '#40457e' : 'grey' }}></ModeNightIcon>
      </Paper>
    </ThemeProvider>
  );

};

export default DarkMode;