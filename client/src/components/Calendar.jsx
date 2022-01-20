import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {TextField, Box, Stack, Button} from '@mui/material';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import ItemReservation from './ItemReservation.jsx';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import Paper from '@material-ui/core/Paper';

const Calendar = ({ currentItem, user }) => {
  const [dates, setDates] = useState([null, null]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const reserveDateOfItem = () => {
    axios.get(`/reserve/itemReserve/${currentItem.id}`)
      .then(({data}) => {
        data.forEach((dateValue) => {
          setStartDate(dateValue.startDate);
          setEndDate(dateValue.endDate);
        });
      }).catch((err) => console.error('ReserveDate Err'));
  };

  useEffect(() => {
    reserveDateOfItem();
  }, []);

  return (
    <>
      <div>

        {(dates[1] === null ) ? (
          <div>
            <Paper elevation={0} style={{color: 'black'}}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDateRangePicker
                  displayStaticWrapperAs="desktop"
                  disablePast
                  value={dates}
                  onChange={(newValue) => {
                    setDates(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
              <div style={{marginLeft: '100px', marginTop: '20px'}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={1}>
                    <Paper elevation={0}>
                      <DateRangePicker
                        disablePast
                        readOnly
                        startText="start"
                        endText="end"
                        value={dates}
                        onChange={(newValue) => {
                          value = newValue;
                        }}
                        renderInput={(startProps, endProps) => (
                          <React.Fragment>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps} />
                          </React.Fragment>
                        )}
                      />
                    </Paper>
                  </Stack>
                </LocalizationProvider>
                <Button variant="contained" id="outlined-basic" color="success" style={{marginLeft: '130px'}}>Check Availability</Button>
              </div>
            </Paper>
          </div>
        ) : (
          <div>
            <Paper elevation={0} style={{color: 'black'}}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDateRangePicker
                  displayStaticWrapperAs="desktop"
                  disablePast
                  value={dates}
                  onChange={(newValue) => {
                    setDates(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )} />
              </LocalizationProvider>
              <div style={{marginLeft: '100px', marginTop: '20px'}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Paper elevation={0}>
                    <DesktopDateRangePicker
                      disablePast
                      readOnly
                      startText="Start"
                      value={dates}
                      onChange={(newValue) => {
                        setDates(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField {...startProps} />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField {...endProps} />
                        </React.Fragment>
                      )}
                    />
                  </Paper>
                </LocalizationProvider>
              </div>
              <div style={{marginLeft: '200px'}}>
                <ItemReservation currentItem={currentItem} dates={dates} user={user}/>
              </div>
            </Paper>
          </div>
        )}
      </div>
    </>
  );
};

export default Calendar;