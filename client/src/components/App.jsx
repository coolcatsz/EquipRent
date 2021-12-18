import React, { useState, useEffect } from 'react';
import Nav from './Navbar.jsx';
import Profile from './Profile.jsx';
import Lender from './Lender.jsx';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Link, useRouteMatch } from 'react-router-dom';
import ItemList from './ItemList.jsx';
import CreatePost from './CreatePost.jsx';

const App = () => {

  const [itemList, setItemList] = useState([]);

  const getAllItem = () => {
    axios.get('/item//allItem')
      .then(({ data }) => {
        console.log(data, 'DATA');
        setItemList(data);
      }).catch((err) => console.error('GetAxiosErr'));
  };

  useEffect(() => {
    getAllItem();
  }, []);


  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" >
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/lender' element={<Lender/>}/>
          {/* <Route path='/' element={<ItemList itemList={itemList}/>}/> */}
        </Route>
      </Routes>
      <CreatePost/>
    </div>

  );
};

export default App;