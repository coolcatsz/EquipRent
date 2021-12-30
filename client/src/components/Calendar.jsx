import React, {useState} from 'react';
import {TextField, Box, Stack} from '@mui/material';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
// import ItemReservation from './ItemReservation.jsx';


const Calendar = ({ currentItem, user }) => {
  const [dates, setDates] = useState([null, null]);
  console.log(dates);
  return (
    <><div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          value={dates}
          onChange={(newValue) => {
            setDates(newValue);
          } }
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )} />
      </LocalizationProvider>
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DateRangePicker
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
          </Stack>
        </LocalizationProvider>
        {/* <ItemReservation currentItem={currentItem} dates={dates} user={user}/> */}
      </div>
    </div></>
  );
};

export default Calendar;