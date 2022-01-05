const { Router } = require('express');
const reserveRoute = Router();
const {newReserve, getAllReserve, getReserveByItemId} = require('../helpers/reservationHelper');

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
      // console.log(data, 'DATA');
      res.sendStatus(201).send(data);
    }).catch((err) => res.status(500));
});

reserveRoute.get('/allReserve', (req, res) => {
  getAllReserve()
    .then((data) => {
      res.status(200).send(data);
    }).catch((err) => res.sendStatus(500));
});

reserveRoute.get('/itemReserve/:itemId', (req, res) => {
  getReserveByItemId(req.params.itemId)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.sendStatus(500));
});

module.exports = reserveRoute;