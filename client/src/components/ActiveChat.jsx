import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import ScrollToBottom from 'react-scroll-to-bottom';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
const baseurl = require('../../../config/keys.js').BASEURL.url;
const socket = io.connect(`${baseurl}`, {path: '/app1socket'});

const ActiveChat = ({ googleUser}) => {
  


  const { room } = useParams();

  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const currentDate = moment().format('h:mm a');
  // console.log('date:', currentDate);

  
  const messageData = {
    thumbnail: googleUser.thumbnail,
    room: room,
    author: googleUser.username,
    message: currentMessage,
    time: currentDate
  };
  
  const sendMessage = () => {
    if (currentMessage !== '') {
      socket.emit('send_message', messageData);
      setMessageList(() => {
        return [...messageList, messageData];
      });
    }
    // console.log('messageList', messageList);
    setCurrentMessage('');
  };
  
  useEffect(() => {

    socket.emit('join_room', room, googleUser.username);

    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
      console.log('list', messageList);
    });
  }, []);

  return (
    <Paper>
      <div className="Chat">
        <div className='chat-window'>
          <div className='chat-header'>
            <p>{`${room}`}</p>
          </div>
          <div className='chat-body'>
            <ScrollToBottom className='message-container'>
              {
                messageList.map((messageBody, i) => {
                  return <div key={i} className='message' id={googleUser.username === messageBody.author ? 'you' : 'other'}>
                    <div>
                      <div className='message-meta'>
                        <p id='author'>{messageBody.author}</p>
                        {/* <Avatar>
                          <img width={'100%'} src={`${messageData.thumbnail}`} alt="profile pic" />
                        </Avatar> */}
                      </div>
                      <div className='message-content'>
                        <p>{messageBody.message}</p>
                        <span id='time'>{messageBody.time}</span>
                      </div>
                    </div>
                  </div>;
                })
              }
            </ScrollToBottom>
          </div>
          <div className='chat-footer'>
            <input
              type="text"
              value={currentMessage}
              placeholder='Type Message'
              onChange={(event) => setCurrentMessage(event.target.value)}
              onKeyPress={(event) => {
                event.key === 'Enter' && sendMessage();
              }} />
            <button onClick={sendMessage} >&#9658;</button>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default ActiveChat;