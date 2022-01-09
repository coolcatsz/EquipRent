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

const CreatePost = ({user, currentItem, allItemPost}) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    }).then(() => allItemPost())
      .catch((err) => console.error('PostReview Err'));
  };

  const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  ));

  const ref = React.createRef();

  return (
    <div>
      {/* <div>
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
        </Box>
        <div>
          <form onSubmit={postReview}>
            <input className='create-input' type='text' value={rating} onChange={event => setRating(event.target.value)} placeholder='Rate 1 - 5' />
            <input className='create-body-textarea' value={description} onChange={event => setDescription(event.target.value)}placeholder='Review Body'/>
            <button className='create-submit-button' type='submit' onClose={handleClose}>Add</button>
          </form>
        </div>
      </div> */}

      <div>
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
              <FancyButton ref={ref} onClose={handleClose} >
              Post Review
              </FancyButton>
            </form>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default CreatePost;