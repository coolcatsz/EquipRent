import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import '../css/Chat.css';

import ActiveChat from './ActiveChat.jsx';

const socket = io.connect('http://localhost:3001');

const Chat = ({googleUser}) => {
  


  const [user, setUser] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (user !== '' && room !== '') {
      socket.emit('join_room', room, user);
    }
    setShowChat(true);
  };


  return (
    <div className="Chat">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Message About an Item</h3>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter Item Name"
            onKeyDown={(event) => event.key === 'Enter' && joinRoom()}
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Chat</button>
        </div>
      ) : (
        <ActiveChat socket={socket} username={user} room={room} googleUser={googleUser} />
      )}
    </div>
  );


};

export default Chat;