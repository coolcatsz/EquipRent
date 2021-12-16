const Pool = require('pg-promise');
const { db, User, ItemImg, Reservation, Post, Item } = require('../db/index.js');
const {fakeUser, fakeItem, fakePost} = require('./fakeData.js');

const seedData = () => {
  console.log(fakeUser);
};

seedData();