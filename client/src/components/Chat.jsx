import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';


import ActiveChat from './ActiveChat.jsx';


const Chat = () => {
  
  const socket = io.connect('http://localhost:3001');


  const [user, setUser] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (user !== '' && room !== '') {
      socket.emit('join_room', room);
    }
    setShowChat(true);
  };


  return (
    <div className="Chat">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Chat about an Item</h3>
          <input
            type="text"
            placeholder="username"
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room Name"
            onKeyDown={(event) => event.key === 'Enter' && joinRoom()}
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join Room</button>
        </div>
      ) : (
        <ActiveChat socket={socket} username={user} room={room} />
      )}
    </div>
  );


};

export default Chat;