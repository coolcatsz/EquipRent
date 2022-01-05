const { Reservation } = require('../../db');

const newReserve = (reservation) => Reservation.create({
  startDate: reservation.startDate,
  endDate: reservation.endDate,
  price: reservation.price,
  total: reservation.total,
  userId: reservation.userId,
  itemId: reservation.itemId
});

const getAllReserve = () => Reservation.findAll();

const getReserveByItemId = (itemId) => Reservation.findAll({
  where: {
    itemId
  }
});

module.exports.newReserve = newReserve;
module.exports.getAllReserve = getAllReserve;
module.exports.getReserveByItemId = getReserveByItemId;