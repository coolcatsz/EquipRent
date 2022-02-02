import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
const moment = require('moment');

const SinglePost = ({post}) => {
  console.log(post);
  const [user, setUserInfo] = useState({});

  const postUser = () => {
    axios.get(`/users/show/${post.userId}`)
      .then(({data}) => setUserInfo(data))
      .catch((err) => console.error('SignedUserErr'));
  };

  useEffect(() => {
    postUser();
  }, []);

  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 700, marginLeft: '50px' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar sx={{ width: 32, height: 32 }}>
              <img src={user.thumbnail} width={'100%'} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText >
            <Typography>{user.username}</Typography>
            {moment(post.createdAt).fromNow()}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Rating name="read-only" value={post.rating} readOnly />
            <Typography variant="h6">{post.description}</Typography>
          </ListItemText>
        </ListItem>
        <Divider variant="middle" component="li" />
      </List>
    </div>
  );
};

export default SinglePost;