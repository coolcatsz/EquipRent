const path = require('path');
const passport = require('passport');
const express = require('express');
const bodyParser = require('body-parser');
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const app = express();
const { db, User, ItemImg, Reservation, Post, Item } = require('../db/index.js');
const authRouter = require('./routes/auth-router.js');
const passportSetup = require('../config/passport-setup.js');


app.use(bodyParser.json());
app.use(express.static(CLIENT_PATH));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/auth', authRouter);

module.exports = {
  app,
};