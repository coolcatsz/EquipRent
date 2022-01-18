import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSharedUser } from './User.jsx';
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
            <Paper elevation={0}>
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
            </Paper>
          </Card>
        </div>
        <div style={{marginLeft: '150px'}}>
          <div>
            <div>
              <Typography>
                <h2>Hi I'm {profile.username}</h2>
                <ProfileEdit authUser={authUser}/>
                {/* <Button>Edit Profile</Button> */}
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
              <Listings />
            </Typography>
          </div>
          <Divider variant="middle"/>
          <div>
            <Typography>
              <h2>{profile.username}'s rented items</h2>
              <RentedItems profile={profile} authUser={authUser} />
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Profile;