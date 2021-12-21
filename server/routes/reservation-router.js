const { Router } = require('express');
const reserveRoute = Router();
const {newReserve} = require('../helpers/reservationHelper');

reserveRoute.post('/insertReserve', (req, res) => {
  console.log(req.body);
});

module.exports = reserveRoute;