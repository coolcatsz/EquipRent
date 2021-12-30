const { Router } = require('express');
const reserveRoute = Router();
const {newReserve} = require('../helpers/reservationHelper');

reserveRoute.post('/insertReserve', (req, res) => {
  // console.log(req.body);
  const {startDate, endDate, price, total, itemId, userId} = req.body;
  const reserve = {
    startDate: startDate,
    endDate: endDate,
    price: price,
    total: total,
    userId: userId,
    itemId: itemId,
  };
  return newReserve(reserve)
    .then((data) => {
      console.log(data, 'DATA');
      res.sendStatus(201).send(data);
    }).catch((err) => res.status(500));
});

module.exports = reserveRoute;