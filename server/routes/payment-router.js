const { Router } = require('express');
const paymentRoute = Router();
const uuid = require('uuid');
// const stripe = require("stripe")("pk_test_51KCqrBFCYowGjKeLmllgUqBP54eEAQyAbtozJjg02KiCT2JhpmgAvLUiXR8C7OpumJNxfbOjhFmPDtztJCc4vjVI00rIlpowFQ");

paymentRoute.post('/pay', (req, res) => {
  const {product, token} = req.body;
  const idempotencyKey = uuid();

  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(customer => {
    stripe.charges.create({
      amount: product.price * 100,
      currency: 'usd',
      customer: customer.id,
      // eslint-disable-next-line camelcase
      receipt_email: token.email,
      description: `rental of ${item.brand}`
    }, {idempotencyKey});
  })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err));
});

module.exports = paymentRoute;