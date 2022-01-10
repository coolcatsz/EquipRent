const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');
require('dotenv').config();

const {BASEURL} = process.env;
// const BASEURL = 'http://localhost';
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: `${BASEURL}:3000`,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
});
//run when client connects
io.on('connection', (socket) => {
  console.log(`User Connected with id of: ${socket.id}`);

  socket.on('join_room', (data, user) => {
    socket.join(data);
    console.log(`${user} with id: ${socket.id} joined room: ${data}`);
  });

  socket.on('send_message', (data) => {
    console.log('message: ', data);
    socket.to(data.room).emit('receive_message', data);
  });
  socket.on('disconnect', () => {
    console.log(`user disconnected ${socket.id}`);
  });

});

server.listen(3001, () => {
  console.log('server running');
});