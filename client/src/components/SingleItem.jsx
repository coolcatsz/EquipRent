import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreatePost from './CreatePost.jsx';
import ItemPost from './ItemPost.jsx';


const SingleItem = ({user, currentItem}) => {
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
      <h1>Single Item Info page</h1>
      <CreatePost user={user} currentItem={currentItem} allItemPost={allItemPost} />
      <div className='create-preview'>
        <ItemPost itemReview={itemReview}/>
      </div>
    </div>
  );
};

export default SingleItem;