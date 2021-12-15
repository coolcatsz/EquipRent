import React from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import Nav from './Navbar.jsx';
import Profile from './Profile.jsx';
import Lender from './Lender.jsx';
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
    </div>
  );
};

export default App;