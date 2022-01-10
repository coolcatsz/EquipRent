import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const CreatePost = ({user, currentItem}) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      setRating(0);
      setDescription('');
    }).then(() => allItemPost())
      .catch((err) => console.error('PostReview Err'));
  };

  return (
    <div>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
        Review
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Write a Review</DialogTitle>
          <form id="my-form-id" onSubmit={postReview}>
            <DialogContent>
              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              />
              <Typography component="legend">Rate this item</Typography>
              <Rating
                name="simple-controlled"
                size="large"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
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
              <Button type="submit" form="my-form-id" onClick={handleClose}>Post</Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    </div>
  );
};

export default CreatePost;
