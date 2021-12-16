const { Client } = require('pg');
const { User, ItemImg, Reservation, Post, Item } = require('../db/index.js');
const {fakeUser, fakeItem, fakePost, fakeImg} = require('./fakeData.js');
require('dotenv').config();
const {
  DATABASE,
  USER_NAME,
  USER_PASSWORD,
  HOST,
  DB_PORT,
} = process.env;

const client = new Client({
  database: DATABASE,
  user: USER_NAME,
  password: USER_PASSWORD,
  host: HOST,
  port: DB_PORT,
});

const seedData = () => {
  client.connect()
    .then(() => console.log('new connection'))
    .then(() => User.sync())
    .then(() => Promise.all(fakeUser.map((data) => User.create(data))))
    .then(() => console.log('user done'))
    .then(() => Item.sync())
    .then(() => Promise.all(fakeItem.map((data) => Item.create(data))))
    .then(() => console.log('item done'))
    .then(() => Post.sync())
    .then(() => Promise.all(fakePost.map((data) => Post.create(data))))
    .then(() => console.log('Post done'))
    .then(() => ItemImg.sync())
    .then(() => Promise.all(fakeImg.map((data) => ItemImg.create(data))))
    .then(() => console.log('Post done'))
    .catch((err) => console.error(err));
};

seedData();