// const { Reservation } = require('#db/index.js');
const { Reservation } = require('/home/user/EquipRent/db/index.js');

const newReserve = (reservation) => Reservation.create({
  startDate: reservation.startDate,
  endDate: reservation.endDate,
  price: reservation.price,
  total: reservation.total,
  userId: reservation.userId,
  itemId: reservation.itemId
});

module.exports.newReserve = newReserve;