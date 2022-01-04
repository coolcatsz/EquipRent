const { Reservation } = require('../../db');

const newReserve = (reservation) => Reservation.create({
  startDate: reservation.startDate,
  endDate: reservation.endDate,
  price: reservation.price,
  total: reservation.total,
  userId: reservation.userId,
  itemId: reservation.itemId
});

module.exports.newReserve = newReserve;