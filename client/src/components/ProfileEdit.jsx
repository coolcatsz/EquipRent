import React, {useEffect} from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const ProfileEdit = ({authUser, currSignedUser}) => {
  const {userId} = useParams();
  const [open, setOpen] = React.useState(false);

  const addProfileInfo = (describe) => {
    axios.put(`/users/about/${authUser.id}`, {description: describe})
      .then((data) => console.log(data, 'dataDescribe'))
      .catch((err) => console.log(err, 'profileEditErr'));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                onChange={(e) => {
                  addProfileInfo(e.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button type="submit" form="my-form-id" component={Link} to={`/profile/${authUser.id}`} onClick={() => {
                handleClose();
                currSignedUser();
              }}>Save</Button>
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