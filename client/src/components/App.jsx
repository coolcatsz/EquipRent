import React, { useState, useEffect } from 'react';
import Nav from './Navbar.jsx';
import Profile from './Profile.jsx';
import Lender from './Lender.jsx';
import Chat from './Chat.jsx';
import { Button } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Link, useRouteMatch } from 'react-router-dom';
import Login from './Login.jsx';
import ItemList from './ItemList.jsx';
import SingleItem from './SingleItem.jsx';
import CreatePost from './CreatePost.jsx';
import BookmarkList from './BookmarkList.jsx';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { io } from 'socket.io-client';


const App = () => {

  const [itemList, setItemList] = useState([]);
  const [user, setUser] = useState(null);
  const [currentItem, setCurrentItem] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [person, setPerson] = useState({});

  const authUser = () => {
    axios.get('/auth/verify')
      .then(({ data }) => {
        // console.log(data, "userdata");
        setUser(data);
      }).catch((err) => {
        console.error('AuthErr');
      });
  };

  const getAllItem = () => {
    axios.get('/item/allItem')
      .then(({ data }) => {
        // console.log(data, 'DATA');
        setItemList(data);
      }).catch((err) => console.error('GetAxiosErr'));
  };

  const oneItem = (item) => {
    // console.log('curritem', item);
    setCurrentItem(item);
  };

  const addBookmark = () => {
    axios.post('/mark/bookmark', {
      userId: user.id,
      itemId: currentItem.id
    }).then(() => console.log('BookMarkSuccess'))
      .catch((err) => console.error('BookMarkErr'));
  };

  const appUsers = () => {
    axios.get('/users/allUser')
      .then(({data}) => setAllUsers(data))
      .catch((err) => console.error('Appusers Err'));
  };

  const oneUser = (person) => {
    // console.log(person), 'PERSON';
    setPerson(person);
  };

  const notify = (data) => toast(`User ID #${data.user_id} received a reservation!`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  useEffect(() => {
    getAllItem();
    authUser();
    appUsers();
    /*
    initializing the socket connection inside of useEffect ensures that only a single connection is made, since useEffect is getting passed an empty array as 2nd arg
    */
    const socket = io.connect('http://localhost:3006');
    socket.on('connect', data => {
      socket.emit('ready for data', {});
    });
    socket.on('update', data => {
      notify(JSON.parse(data.message.payload));
      console.log('DATA RECEIVED notify FROM DB: ', data.message.payload);
    });

  }, []);

  return (

    <div>
      <Paper elevation={0}>
        { user ? (
          <div>
            <Nav setItemList={setItemList} authUser={user.id}/>
            <ToastContainer />
            <Routes>
              <Route exact path ="/profile/:userId" element={<Profile authUser={user}/>}/>
              <Route exact path ='/lender' element={<Lender user={user}/>}/>
              <Route exact path ='/chat' element={<Chat/>}/>
              <Route exact path ='/' element={<ItemList itemList={itemList} handleClick={oneItem} user={user} addBookmark={addBookmark} />}/>
              <Route exact path ='/item' element={ <SingleItem user={user} currentItem={currentItem} addBookmark={addBookmark} appUser={allUsers} userClick={oneUser}/> } />
              <Route exact path ='/bookmark' element={ <BookmarkList user={user} itemList={itemList} currentItem={currentItem} /> } />
            </Routes>
          </div>
        ) : (
          <Nav />
        )}
      </Paper>
    </div>
  );
};

export default App;