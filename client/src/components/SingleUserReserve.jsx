import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreatePost from './CreatePost.jsx';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const SingleRentedItem = ({rentItem}) => {

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
      .then(({ data }) => setItemReview(data))
      .catch((err) => console.error('ItemPost Err'));
  };

  useEffect(() => {
    rentalItem();
    reserveImg();
    allItemPost();
  }, []);
  return (
    <div>
      <Grid container spacing={1} style={{marginLeft: '20px'}}>
        <Typography>
          <img src={userReserveImg.imgUrl} style ={{width: 170, height: 200}}></img>
          <p>{bookedItem.type}</p>
          <CreatePost user={rentItem.userId} currentItem={rentItem.itemId} allItemPost={allItemPost} />
        </Typography>
      </Grid>
    </div>
  );
};

export default SingleRentedItem;