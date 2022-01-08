const { Router } = require('express');
const paymentRoute = Router();
const uuid = require('uuid');
const stripe = require("stripe")("sk_test_51KCqrBFCYowGjKeLUHgfCrwEJK7wr5bdzorkpqPlsrNtpaf7aPApfl5xQse2LUcvgMKC2Wf1r3J0ZldHjiv0mO8x00bljFi7rM");

paymentRoute.post('/pay', (req, res) => {
  const {product, token} = req.body;
  const idempotencyKey = uuid.v4();
  console.log(idempotencyKey);

  return stripe.customers.create({
    email: token.email,
    source: token.id,
    // mode: 'payment',
  }).then(customer => {
    stripe.charges.create({
      amount: product.price * 100,
      currency: 'usd',
      customer: customer.id,
      // eslint-disable-next-line camelcase
      receipt_email: token.email,
      description: 'rental of item',
    }, {idempotencyKey});
  })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err));
});

module.exports = paymentRoute;