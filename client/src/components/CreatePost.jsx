import React, { useState } from 'react';
import axios from 'axios';


const CreatePost = ({user, currentItem, allItemPost , authUser}) => {
  // console.log(postReview,);

  const [rating, setRating] = useState('');
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
      setRating('');
      setDescription('');
    }).then(() => allItemPost())
      .catch((err) => console.error('PostReview Err'));
  };

  return (
    <div className='create'>
      <div className='create-editor'>
        <h2>Write a Review</h2>
        <form onSubmit={postReview}>
          <input className='create-input' type='text' value={rating} onChange={event => setRating(event.target.value)} placeholder='Rate 1 - 5' />
          <input className='create-body-textarea' value={description} onChange={event => setDescription(event.target.value)}placeholder='Review Body'/>
          <button className='create-submit-button' type='submit'>Add</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;