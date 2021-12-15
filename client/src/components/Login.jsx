import React, { useState, useContext } from 'react';
import axios from 'axios';


const Login = () => (
  <header className="masthead">
    <div className="container position-relative">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="text-center">
            <div className="col-auto"><a href='/auth/google'>Log In</a></div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Login;