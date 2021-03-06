import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Home from '@mui/icons-material/Home';
import axios from 'axios';
import Listings from './UserListings.jsx';
import RentedItems from './UserReserves.jsx';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@material-ui/core/Paper';
import ProfileEdit from './ProfileEdit.jsx';

const Profile = ({ authUser, listingClick }) => {
  const { userId } = useParams();
  const [profile, setProfile] = useState({});

  const currSignedUser = () => {
    axios.get(`/users/show/${userId}`)
      .then(({data}) => setProfile(data))
      .catch((err) => console.error('SignedUserErr'));
  };

  useEffect(() => {
    currSignedUser();
  }, [userId]);

  return (
    <div>
      <div style={{display: 'inline-flex', marginLeft: 60, marginTop: 70, height: '100vh'}}>
        <div className='user-info'>
          <Card sx={{ maxWidth: 300 }}>
            <Paper elevation={0}>
              <CardMedia
                component="img"
                alt="Item Img"
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
            </Paper>
          </Card>
        </div>
        <div style={{marginLeft: '70px'}}>
          <div>
            <div>
              <Typography>
                <h2>Hi I'm {profile.username}</h2>
                <ProfileEdit authUser={authUser} profile={profile} currSignedUser={currSignedUser}/>
              </Typography>
            </div>
            <div>
              <Typography>
                <h3>About</h3>
                <Home /> U.S.A
                <p>{profile.description}</p>
              </Typography>
            </div>
            <Divider variant="middle"/>
          </div>
          <div>
            <Typography>
              <h2>{profile.username}'s listings</h2>
              <Listings listingClick={listingClick}/>
            </Typography>
          </div>
          <Divider variant="middle"/>
          <div>
            <Typography>
              <h2>{profile.username}'s rented items</h2>
              <RentedItems profile={profile} authUser={authUser} rentalClick={listingClick}/>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Profile;