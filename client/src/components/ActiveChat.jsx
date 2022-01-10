import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import ScrollToBottom from 'react-scroll-to-bottom';

const ActiveChat = ({socket, username, room, googleUser}) => {

  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  
  const messageData = {
    thumbnail: googleUser.thumbnail,
    room: room,
    author: username,
    message: currentMessage,
    time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
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
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className='chat-window'>
      <div className='chat-header'>
        <p>{`Item: ${room}`}</p>
      </div>
      <div className='chat-body'>
        <ScrollToBottom className='message-container'>
          {
            messageList.map((messageBody, i) => {
              return <div key={i} className='message' id={username === messageBody.author ? 'you' : 'other'}>
                <div>
                  <div className='message-meta'>
                    {/* <img width={'100%'} src={`${messageData.thumbnail}`} alt="profile pic" /> */}
                    <p id='author'>{messageBody.author}</p>
                  </div>
                  <div className='message-content'>
                    <p>{messageBody.message}</p>
                    {/* <p id='time'>{messageBody.time}</p> */}
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
  );
};

export default ActiveChat;