import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const ProfileEdit = ({authUser}) => {
  const {userId} = useParams();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addProfileInfo = (describe) => {
    axios.put(`users/about/${userId}`, {description: describe})
      .then((data) => console.log(data))
      .catch((data) => console.log(err, 'profileEditErr'));
  };

  if (Number(userId) === authUser.id) {
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>Edit Profile</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update Profile</DialogTitle>
          <form id="my-form-id" >
            <DialogContent>
              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              />
              <Typography component="legend">About</Typography>
              <TextField
                id="filled-multiline-static"
                label=""
                multiline
                rows={4}
                variant="filled"
                autoFocus
                margin="dense"
                fullWidth
                // value={description}
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
    );
  } else {
    return null;
  }
};

export default ProfileEdit;