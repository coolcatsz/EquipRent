import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import { useSharedUser } from './User.jsx';
import axios from 'axios';


const Profile = () => {
  const { currentUser, changeCurrentUser } = useSharedUser();
  // console.log('should be the current user', currentUser);
  const {username, email, thumbnail } = currentUser;


  const updateUser = (obj) => {
    axios.put('/auth/verify', {email: currentUser.email})
      .then(changeCurrentUser(Object.apply(currentUser, obj)))
      .catch(err => console.error(err))
      .finally(() => {
      });
  };


  return (
    <div>
      <div className='user-info'>
        <img src={thumbnail} alt="a user's portrait"/>
        <h2>{username}</h2>
        <h4>{email}</h4>
      </div>
      <Button>
        <Link to={'/lender'} style={{ textDecoration: 'none' }}>Upload Listing</Link>
      </Button>
      <Button>
        <Link to={'/item'} style={{ textDecoration: 'none' }}>Write a Review</Link>
      </Button>
    </div>
  );

};

export default Profile;
