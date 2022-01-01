import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreatePost from './CreatePost.jsx';
import ItemPost from './ItemPost.jsx';
import Calendar from './Calendar.jsx';
import Button from '@mui/material/Button';

const SingleItem = ({user, currentItem, addBookmark}) => {
  // console.log(currentItem, 'CURR');
  const [itemReview, setItemReview] = useState([]);
  const [singleItemImg, setSingleItemImg] = useState({});

  const oneItemImg = () => {
    axios.get(`/item/itemImg/${currentItem.id}`)
      .then(( {data} ) => {
        // console.log(data[0], 'SINGLE DATA');
        setSingleItemImg(data[0]);
      }).catch((err) => console.error('GetAxiosErr'));
  };

  const allItemPost = () => {
    axios.get(`/post/itemPost/${currentItem.id}`)
      .then(({ data }) => {
        // console.log(data, 'DATA');
        setItemReview(data);
      }).catch((err) => console.error('ItemPost Err'));
  };

  // const updateAvailability = () => {
  //   axios.put(`/item/available/${currentItem.id}`)
  //     .then(() => console.log(currentItem.id))
  //     .catch((err) => console.error('puterror'));
  // };

  useEffect(() => {
    allItemPost();
    oneItemImg();
  }, []);

  let image;
  if (currentItem.id === singleItemImg.itemId) {
    image = singleItemImg.imgUrl;
  }
  return (
    <div>
      <div>
        <h2>Item Info</h2>
        <div>
          <img
            src={`${image}`}
            style ={{width: '200px', height: '200px', border: '5px solid black'}}
          ></img>
        </div>
        <Button
          onClick={addBookmark}
        >
            Bookmark
        </Button>
        <div>
          <ul>
            <li>Brand: {currentItem.brand}</li>
            <li>Type: {currentItem.type}</li>
            <li>Condition: {currentItem.condition}</li>
            <li>Description: {currentItem.description}</li>
            <li>Price: ${currentItem.price}</li>
            <li>Product Value: ${currentItem.value}</li>
          </ul>
        </div>
      </div>
      <Calendar currentItem={currentItem} user={user} />
      <CreatePost user={user} currentItem={currentItem} allItemPost={allItemPost} />
      <div className='create-preview'>
        <ItemPost itemReview={itemReview}/>
      </div>
    </div>
  );
};

export default SingleItem;