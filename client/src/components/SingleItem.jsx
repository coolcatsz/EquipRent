import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreatePost from './CreatePost.jsx';
import ItemPost from './ItemPost.jsx';


const SingleItem = ({user, currentItem}) => {
  console.log(currentItem, 'CURR');
  const [itemReview, setItemReview] = useState([]);

  const allItemPost = () => {
    axios.get(`/post/itemPost/${currentItem.id}`)
      .then(({ data }) => {
        console.log(data, 'DATA');
        setItemReview(data);
      }).catch((err) => console.error('ItemPost Err'));
  };

  useEffect(() => {
    allItemPost();
  }, []);

  return (
    <div>
      <div>
        <h2>Item Info</h2>
        <div>
          <ul>
            <li>Brand: {currentItem.brand}</li>
            <li>Type: {currentItem.type}</li>
            <li>Condition: {currentItem.condition}</li>
            <li>Description: {currentItem.description}</li>
            <li>Price: {currentItem.price}</li>
            <li>Product Value: {currentItem.value}</li>
          </ul>
        </div>
      </div>
      <CreatePost user={user} currentItem={currentItem} allItemPost={allItemPost} />
      <div className='create-preview'>
        <ItemPost itemReview={itemReview}/>
      </div>
    </div>
  );
};

export default SingleItem;