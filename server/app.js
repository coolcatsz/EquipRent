const path = require('path');
const passport = require('passport');
const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const session = require('express-session');
const bodyParser = require('body-parser');
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const app = express();
const { db, User, ItemImg, Reservation, Post, Item } = require('../db/index.js');
const authRouter = require('./routes/auth-router.js');
const postRoute = require('./routes/post-router.js');
const itemRoute = require('./routes/item-router.js');
const searchRoute = require('./routes/search-router.js');
const reserveRoute = require('./routes/reservation-router.js');
const bookmarkRoute = require('./routes/bookmark-router.js');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');
require('../config/passport-setup.js');
require('dotenv').config();
const { notifSocket } = require('./sockets/notif-sockets.js');

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(CLIENT_PATH));

//socket io stuff
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
});
//run when client connects
io.on('connection', (socket) => {
  // console.log(`User Connected ${socket.id}`);

  socket.on('join_room', (data) => {
    socket.join(data);
    // console.log(`user with id: ${socket.id} joined room: ${data}`);
  });

  socket.on('send_message', (data) => {
    // console.log('message: ', data);
    socket.to(data.room).emit('receive_message', data);
  });
  socket.on('disconnect', () => {
    console.log(`user disconnected ${socket.id}`);
  });

});

server.listen(3001, () => {
  console.log('server running');
});

app.use(cookieSession({
  keys: [process.env.COOKIE_KEY],
  maxAge: 24 * 60 * 60 * 1000, //one day
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());
// app.use(session({
//   secret: 'secret',
//   saveUninitialized: false,
//   resave: true
// }));

//routes
app.use(authRouter);
app.use('/post', postRoute);
app.use('/item', itemRoute);
app.use('/reserve', reserveRoute);
app.use('/search', searchRoute);
app.use('/mark', bookmarkRoute);
app.get('/auth', (req, res) => console.log('body:', req.body));
app.get('/logout', (req, res) => console.log('You Have Been Logged Out'));


module.exports = {
  app,
};