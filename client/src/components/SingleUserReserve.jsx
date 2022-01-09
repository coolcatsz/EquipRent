import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreatePost from './CreatePost.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SingleRentedItem = ({rentItem, authUser}) => {
  // console.log(rentItem, authUser.id, 'User');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [bookedItem, setBookedItem] = useState({});
  const [userReserveImg, setUserReserveImg] = useState({});
  const [itemReview, setItemReview] = useState([]);

  const rentalItem = () => {
    axios.get(`/item/itemById/${rentItem.itemId}`)
      .then(({data}) => setBookedItem(data))
      .catch((err) => console.log('error'));
  };

  const reserveImg = () => {
    axios.get(`/item/itemImg/${rentItem.itemId}`)
      .then(({data}) => setUserReserveImg(data[0]))
      .catch((err) => console.error('ReserveImg Err'));
  };

  const allItemPost = () => {
    axios.get(`/post/itemPost/${rentItem.itemId}`)
      .then(({ data }) => {
        // console.log(data, 'DATA');
        setItemReview(data);
      }).catch((err) => console.error('ItemPost Err'));
  };

  useEffect(() => {
    rentalItem();
    reserveImg();
    allItemPost();
  }, []);

  return (
    <div>
      <img src={userReserveImg.imgUrl} style ={{width: '200px', height: '200px'}}></img>
      <h4>{bookedItem.brand}</h4>
      <div>
        { rentItem.userId === authUser.id ? (
          <><Button onClick={handleOpen}>Review</Button><Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CreatePost user={rentItem.userId} currentItem={rentItem.itemId} allItemPost={allItemPost} handleClose={handleClose} handleOpen={handleOpen}/>
            </Box>
          </Modal></>
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default SingleRentedItem;