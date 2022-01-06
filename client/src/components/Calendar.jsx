import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import MomentUtils from 'moment';
import {TextField, Box, Stack, Button} from '@mui/material';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import ItemReservation from './ItemReservation.jsx';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
const isWithinInterval = require('date-fns/isWithinInterval/index');

const Calendar = ({ currentItem, user }) => {
  const [dates, setDates] = useState([null, null]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const disableDates = (date) => {
    // return isWithinInterval(new Date(), {
    //   start: new Date (startDate),
    //   end: new Date (endDate)
    // });
  };

  // console.log(disableDates);
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

  // console.log(startDate, 'start');
  // console.log(endDate, 'endDate');
  return (
    <>
      {(dates[1] === null ) ? (
        <div>
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
              shouldDisableDate={disableDates}
              // maxDate={endDate}
              // minDate={startDate}
            />
          </LocalizationProvider>
          <div style={{marginLeft: '100px'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={1}>
                <DateRangePicker
                  disablePast
                  startText="start"
                  endText="end"
                  value={dates}
                  onChange={(newValue) => {
                    value = newValue;
                  }}
                  shouldDisableDate={disableDates}
                  // maxDate={endDate}
                  // minDate={startDate}
                  // {...rest}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </Stack>
            </LocalizationProvider>
            <Button variant="contained" id="outlined-basic" color="error" style={{marginLeft: '130px'}}>Check Availability</Button>
          </div>
        </div>
      ) : (
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDateRangePicker
              displayStaticWrapperAs="desktop"
              disablePast
              value={dates}
              onChange={(newValue) => {
                setDates(newValue);
              }}
              shouldDisableDate={disableDates}
              // maxDate={endDate}
              // minDate={startDate}
              // {...rest}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )} />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDateRangePicker
              disablePast
              startText="Desktop start"
              value={dates}
              onChange={(newValue) => {
                setDates(newValue);
              }}
              shouldDisableDate={disableDates}
              // maxDate={endDate}
              // minDate={startDate}
              // {...rest}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
          <div>
            <ItemReservation currentItem={currentItem} dates={dates} user={user}/>
          </div>
        </div>
      )}
    </>
  );
};

export default Calendar;