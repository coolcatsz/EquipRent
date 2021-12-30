import React, { useState } from 'react';
import axios from 'axios';
const differenceInDays = require('/Users/chhotisherpa/EquipRent/node_modules/date-fns/differenceInDays/index.js');
import { Button } from '@mui/material';

const ItemReservation = ({ currentItem, dates, user}) => {
  const start = dates[0];
  const end = dates[1];
  const diffInDays = differenceInDays(new Date(end), new Date(start));

  const reserve = (e) => {
    e.preventDefault();
    axios.post('/reserve/insertReserve', {
      startDate: dates[0],
      endDate: dates[1],
      price: currentItem.price,
      total: currentItem.price * diffInDays,
      userId: user.id,
      itemId: currentItem.id
    }).then(() => console.log('ReserveSuccess'))
      .catch((err) => console.error('ReserveErr'));
  };

  return (
    <div>
      <div>
        <h4>Add reservation post body here</h4>
        {/* <p>StartDate={dates[0]} - EndDate={dates[1]}</p> */}
        <p>Price: {currentItem.price}</p>
        <p>Total: {diffInDays * currentItem.price }</p>
        <Button
          onClick={reserve}
        >RESERVE
        </Button>
      </div>
    </div>
  );
};

export default ItemReservation;