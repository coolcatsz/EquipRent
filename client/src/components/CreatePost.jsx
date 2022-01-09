import React, { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const CreatePost = ({user, currentItem, allItemPost, handleClose}) => {

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // console.log(postReview,);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  // console.log(user.id,'USER', currentItem.id, 'CREATE');

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
      handleClose();
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
          // onClose={handleClose}
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
              <Button type='submit' onClose={handleClose}>Post Review</Button>
            </form>
          </div>
        </Box>
      </div>

      {/* <div>
        <Button variant="outlined" onClick={handleClickOpen}>
        Review
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Write a Review</DialogTitle>
          <DialogContent>
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
            </Box>
          </DialogContent>
          <DialogContent>
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
          </DialogContent>
          <DialogActions>
            <form onSubmit={postReview}>
              <Button onClose={handleClose} type='submit' >
              Post Review
              </Button>
            </form>
          </DialogActions>
        </Dialog>
      </div> */}
    </div>
  );
};

export default CreatePost;