import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Switch from '@mui/material/Switch';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const DarkMode = ({authUser}) => {

  const [darkMode, setDarkMode] = useState(null);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  const setTheme = ( themeBol ) => {
    if (!themeBol) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

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
    <ThemeProvider theme={theme}>
      <Paper elevation={0}>
        <LightModeIcon style={{ color: darkMode ? 'grey' : '#f4c732' }}></LightModeIcon>
        <Switch onChange={handleToggle} />
        <ModeNightIcon style={{ color: darkMode ? '#40457e' : 'grey' }}></ModeNightIcon>
      </Paper>
    </ThemeProvider>
  );

};

export default DarkMode;