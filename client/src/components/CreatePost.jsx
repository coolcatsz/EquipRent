import React, { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const CreatePost = ({user, currentItem, allItemPost, handleClose}) => {

  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const postReview = (e) => {
    e.preventDefault();
    axios.post('/post/insertPost', {
      rating,
      description,
      itemId: currentItem,
      userId: user
    }).then(() => {
      // console.log('Success Post');
      setRating(0);
      setDescription('');
    }).then(() => allItemPost())
      .catch((err) => console.error('PostReview Err'));
  };

  return (
    <div>
      <div>
        <Typography component="legend">Write Review</Typography>
        <Box
          sx={{
            '& > legend': { mt: 2 },
          }}
        >
          <Typography component="legend">Rate this item</Typography>
          <Rating
            name="simple-controlled"
            size="large"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <div>
            <Link to={`/item/${currentItem}`}>
              <form onSubmit={postReview}>
                <TextField
                  id="filled-multiline-static"
                  label="Write a Review"
                  multiline
                  rows={4}
                  variant="filled"
                  autoFocus
                  margin="dense"
                  fullWidth
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
                <Button type='submit' onClose={handleClose} >Post Review</Button>
              
              </form>
            </Link>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default CreatePost;