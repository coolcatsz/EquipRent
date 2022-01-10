import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { useSharedUser } from './User.jsx';
import Divider from '@mui/material/Divider';
import Home from '@mui/icons-material/Home';
import axios from 'axios';
import Listings from './UserListings.jsx';
import RentedItems from './UserReserves.jsx';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Profile = ({ authUser }) => {
  // console.log(authUser, 'AuthUser');
  const { userId } = useParams();
  const [profile, setProfile] = useState({});

  const userRentListings = () => {
    axios.get(`/item/userItem/${userId}`)
      .then(({data}) => console.log(data, 'data'))
      .catch((err) => console.error('listings error'));
  };

  useEffect(() => {
    const currSignedUser = () => {
      axios.get(`/users/show/${userId}`)
        .then(({data}) => setProfile(data))
        .catch((err) => console.error('SignedUserErr'));
    };
    currSignedUser();
    userRentListings;
  }, [userId]);

  return (
    <div>
      <div style={{display: 'inline-flex', padding: '30px', marginLeft: '70px'}}>
        <div className='user-info'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Item Img"
              style ={{ width: '100px', height: '100px', padding: '20px', marginLeft: '15px'}}
              image={profile.thumbnail}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.username}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {profile.email}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div style={{marginLeft: '150px'}}>
          <div>
            <div>
              <h2>Hi I'm {profile.username}</h2>
              <Button>Edit Profile</Button>
            </div>
            <div>
              <h3>About</h3>
              <Home /> U.S.A
              <p>{profile.description}</p>
            </div>
            <Divider variant="middle"/>
          </div>
          <div>
            <h2>{profile.username}'s listings</h2>
            <Listings />
          </div>
          <Divider variant="middle"/>
          <div>
            <h2>{profile.username}'s rented items</h2>
            <RentedItems profile={profile} authUser={authUser} />
          </div>
        </div>
      </div>
    </div>
  );

};

export default Profile;