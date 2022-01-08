require('dotenv').config();
const { Router } = require('express');
const paymentRoute = Router();
const uuid = require('uuid');
const stripeSecret = process.env.STRIPE_SECRET;
const stripe = require('stripe')(stripeSecret);

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