const differenceInDays = require('date-fns/differenceInDays/index.js');
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import StripeCheckout from 'react-stripe-checkout';


const ItemReservation = ({ currentItem, dates, user}) => {
  const start = dates[0];
  const end = dates[1];
  const diffInDays = differenceInDays(new Date(end), new Date(start));

  const reserve = () => {
    console.log('current item ->', currentItem);
    // e.preventDefault();
    axios.post('/reserve/insertReserve', {
      startDate: dates[0],
      endDate: dates[1],
      price: currentItem.price,
      total: currentItem.price * diffInDays,
      userId: user.id,
      itemId: currentItem.id
    }).then(() => 
      console.log('ReserveSuccess'))
      .catch((err) => console.error('ReserveErr'));
  };

  const makePayment = token => {
    const body = {
      token, 
      product: currentItem,
    };
    const headers = {
      'Content-Type': 'application/json'
    };
    return axios.post('/payment/pay', body)
      .then((response) => {
        reserve();
        console.log(response);
      }).catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div>
        <h4>Reservation Info</h4>
        {/* <p>StartDate={dates[0]} - EndDate={dates[1]}</p> */}
        <p>Price: ${currentItem.price} x {diffInDays} nights</p>
        <p>Total: ${diffInDays * currentItem.price }</p>
        <StripeCheckout
          stripeKey="pk_test_51KCqrBFCYowGjKeLmllgUqBP54eEAQyAbtozJjg02KiCT2JhpmgAvLUiXR8C7OpumJNxfbOjhFmPDtztJCc4vjVI00rIlpowFQ"
          token={makePayment}
          amount={diffInDays * currentItem.price * 100}>
          <Button 
            variant="contained"
            id="outlined-basic"
            color="error">
              Pay and Reserve Item
          </Button>
        </StripeCheckout>
      </div>
    </div>
  );
};

export default ItemReservation;