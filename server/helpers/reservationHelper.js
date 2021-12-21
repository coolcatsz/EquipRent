const { db } = require('#db/index.js');

const newReserve = (reservation) => Reservation.create({
  startDate: reservation.startDate,
  endDate: reservation.endDate,
  price: reservation.price,
  total: reservation.total
});

module.exports.newReserve = newReserve;