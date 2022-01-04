import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Payment = () => {

  const [product, setProduct] = useState({});

  const makePayment = token => {
    const body = {
      token, 
      product
    };
    const headers = {
      'Content-Type': 'application/json'
    };
    // axios.post('/payment')
    return fetch('http://localhost:3000/payment/pay', {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log();
      const {status} = response;
      console.log(status);
    })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_51KCqrBFCYowGjKeLmllgUqBP54eEAQyAbtozJjg02KiCT2JhpmgAvLUiXR8C7OpumJNxfbOjhFmPDtztJCc4vjVI00rIlpowFQ"
        token={makePayment}
        name="Rent Some Equipment"
        amount={item.price * 100}
      />
    </div>
  );
};

export default Payment;