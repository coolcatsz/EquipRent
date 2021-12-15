import React from 'react';
import Nav from './Navbar.jsx';
import Profile from './Profile.jsx';
import Lender from './Lender.jsx';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Link, useRouteMatch } from 'react-router-dom';

import Login from './Login.jsx';

const App = () => {


  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" >
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/lender' element={<Lender/>}/>
        </Route>
      </Routes>
      <h1>EquipRent</h1>

      <div>
        <Button>
          <Login/>
        </Button>
      </div>
    </div>

  );
};

export default App;