import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { useSharedUser } from './User.jsx';
import Divider from '@mui/material/Divider';
import Home from '@mui/icons-material/Home';
import axios from 'axios';
import Listings from './UserListings.jsx';
import RentedItems from './UserReserves.jsx';

const Profile = ({authUser, appUser}) => {
  const { userId } = useParams();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const currSignedUser = () => {
      axios.get(`/users/show/${userId}`)
        .then(({data}) => setProfile(data))
        .catch((err) => console.error('SignedUserErr'));
    };
    currSignedUser();
  }, [userId]);

  return (
    <div>
      <div>
        <div className='user-info'>
          <img src={profile.thumbnail} alt="a user's portrait"/>
          <h2>{profile.username}</h2>
          <h4>{profile.email}</h4>
          <Button>
            <Link to={'/lender'} style={{ textDecoration: 'none' }}>Upload Listing</Link>
          </Button>
        </div>
        <div>
          <div>
            <h2>Hi I'm {profile.username}</h2>
            <p>Joined in {profile.createdAt}</p>
            <h3>About</h3>
            <Home /> U.S.A
            <p>{profile.description}</p>
            <Divider variant="middle"/>
          </div>
          <div>
            <h3>{profile.username}'s listings</h3>
            <Listings/>
          </div>
          <Divider variant="middle"/>
          <div>
            <h3>{profile.username}'s reserved items</h3>
            <RentedItems profile={profile} />
          </div>
        </div>
      </div>
    </div>
  );

};

export default Profile;