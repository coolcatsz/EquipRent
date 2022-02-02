import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreatePost from './CreatePost.jsx';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const SingleRentedItem = ({rentItem, rentalClick}) => {

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
      <Grid container spacing={1} style={{marginLeft: '10px', marginTop: '10px'}}>
        <div>
          <Link to={`/item/${bookedItem.id}`}>
            <img
              src={userReserveImg.imgUrl}
              style ={{width: 135, height: 200, border: '1px solid grey', borderRadius: '20px', boxShadow: '5px 9px 16px -11px rgba(0,0,0,0.97)'}}
              onClick={() => rentalClick(bookedItem)}
            >
            </img>
          </Link>
          <p>{bookedItem.type}</p>
          <CreatePost user={rentItem.userId} currentItem={rentItem.itemId} allItemPost={allItemPost} />
        </div>
      </Grid>
    </div>
  );
};

export default SingleRentedItem;