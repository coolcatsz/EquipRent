const { db, User, ItemImg, Reservation, Post, Item } = require('#db/index.js');

const findAllItem = () => Item.findAll();

module.exports.findAllItem = findAllItem;