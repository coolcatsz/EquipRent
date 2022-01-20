import React from 'react';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

const ProfileEdit = ({authUser}) => {
  const {userId} = useParams();
  if (Number(userId) === authUser.id) {
    return (
      <div>
        <Button>Edit Profile</Button>
      </div>
    );
  } else {
    return null;
  }
};

export default ProfileEdit;