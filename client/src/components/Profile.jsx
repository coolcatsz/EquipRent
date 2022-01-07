import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import { useSharedUser } from './User.jsx';
import Divider from '@mui/material/Divider';
import Home from '@mui/icons-material/Home';
import axios from 'axios';
import Listings from './UserListings.jsx';
import RentedItems from './UserReserves.jsx';

const Profile = ({appUser, authUser, user, allUsers}) => {
  const { currentUser, changeCurrentUser } = useSharedUser();
  // console.log('should be the current user', currentUser);
  const {username, email, thumbnail } = currentUser;

  console.log(appUser.id, authUser.id);
  const updateUser = (obj) => {
    axios.put('/auth/verify', {email: currentUser.email})
      .then(changeCurrentUser(Object.apply(currentUser, obj)))
      .catch(err => console.error(err))
      .finally(() => {
      });
  };
  return (
    <div>
      <div>
        <div className='user-info'>
          <img src={thumbnail} alt="a user's portrait"/>
          <h2>{username}</h2>
          <h4>{email}</h4>
          <Button>
            <Link to={'/lender'} style={{ textDecoration: 'none' }}>Upload Listing</Link>
          </Button>
        </div>
        <div>
          <div>
            <h2>Hi I'm {username}</h2>
            <p>Joined in {currentUser.createdAt.substring(0, 4)}</p>
            <h3>About</h3>
            <Home /> U.S.A
            <p>{currentUser.description}</p>
            <Divider variant="middle"/>
          </div>
          <div>
            <h3>{username}'s listings</h3>
            <Listings/>
          </div>
          <Divider variant="middle"/>
          <div>
            <h3>{username}'s reserved items</h3>
            <RentedItems authUser={authUser} user={user} appUser={appUser} allUsers={allUsers} />
          </div>
        </div>
      </div>
    </div>
  );

};

export default Profile;
