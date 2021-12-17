const path = require('path');
const passport = require('passport');
const express = require('express');
const session = require('express-session');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const app = express();
const { db, User, ItemImg, Reservation, Post, Item } = require('../db/index.js');
const authRouter = require('./routes/auth-router.js');
require('../config/passport-setup.js');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(CLIENT_PATH));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: 'secret',
  saveUninitialized: false,
  resave: true
}));

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, //one day
  keys: [keys.session.cookieKey]
}));

//routes
app.use(authRouter);
app.get('/auth', (req, res) => console.log('body:', req.body));
app.get('/logout', (req, res) => console.log('You Have Been Logged Out'));

module.exports = {
  app,
};