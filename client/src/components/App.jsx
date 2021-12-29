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
import Paper from '@material-ui/core/Paper';
import axios from 'axios';



const App = () => {

  const [itemList, setItemList] = useState([]);
  const [user, setUser] = useState(null);
  const [currentItem, setCurrentItem] = useState({});

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
    console.log('curritem');
    setCurrentItem(item);
  };

  useEffect(() => {
    getAllItem();
    authUser();
  }, []);

  return (

    <div>
      <Paper elevation={0}>
        { user ? (
          <div>
            <Nav setItemList={setItemList}/>
            <Routes>
              <Route exact path ='/profile' element={<Profile/>}/>
              <Route exact path ='/lender' element={<Lender user={user}/>}/>
              <Route exact path ='/chat' element={<Chat/>}/>
              <Route exact path ='/' element={<ItemList itemList={itemList} handleClick={oneItem}/>}/>
              <Route exact path ='/item' element={ <SingleItem user={user} currentItem={currentItem}/> } />
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