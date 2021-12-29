import React, { useState, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

const ActiveChat = ({socket, user, room}) => {

  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);



  
  const messageData = {
    room: room,
    author: user,
    message: currentMessage,
    time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
  };

  const sendMessage = () => {
    if (currentMessage !== '') {
    }
    socket.emit('send_message', messageData);
    setMessageList((list) => [...list, messageData]);
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
      setCurrentMessage('');
    });
  }, [socket]);

  return (
    <div>
      <div className='chat-header'>
        <p>Live Chat</p>
      </div>
      <div className='chat-body'>
        <ScrollToBottom className='message-container'>
          {
            messageList.map((messageBody) => {
              return <div className='message' id={user === messageBody.author ? 'you' : 'other'}>
                <div>
                  <div className='message-content'>
                    <p>{messageBody.message}</p>
                  </div>
                  <div className='message-meta'>
                    <p id='time'>{messageBody.time}</p>
                    <p id='author'>{messageBody.author}</p>
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
            event.key === 'Enter' && sendMessage;
          }} />
        <button onClick={sendMessage} >&#9658;</button>
      </div>
    </div>
  );
};

export default ActiveChat;