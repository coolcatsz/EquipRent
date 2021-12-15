import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Link, useRouteMatch } from 'react-router-dom';

import Login from './Login.jsx';

const App = () => {


  return (
    <div>
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