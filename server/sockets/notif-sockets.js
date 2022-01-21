const { app } = require('../app.js');
const { createServer } = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const {BASEURL} = process.env;
// const BASEURL = 'http://localhost';

//instantiating pg.client so we can call the pg.Client.on event handler inside of the socket event handler
const { Client } = require('pg');

const {
  DATABASE,
  USER_NAME,
  USER_PASSWORD,
  HOST,
} = process.env;

const pgClient = new Client({
  database: DATABASE,
  user: USER_NAME,
  password: USER_PASSWORD,
  host: HOST,
});

pgClient.connect();

const query = pgClient.query('LISTEN reserve_event');

const httpServer = createServer(app);

const io = new Server(httpServer, {
  path: '/app2socket',
  cors: {
    origin: `${BASEURL}:3000`,
    methods: ['GET', 'POST']
  }
});

httpServer.listen(3006, () => {
  console.log('listening on port 3006');
});

io.on('connection', function (socket) {
  socket.emit('connected', { connected: true });

  socket.on('ready for data', function (data) {
    pgClient.on('notification', function(title) {
      socket.emit('update', { message: title });
    });
    // console.log('ready 4 data :)');
  });
});

module.exports = {
  notifSocket: io
};
