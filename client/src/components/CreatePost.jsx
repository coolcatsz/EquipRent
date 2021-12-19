import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({user, currentItem}) => {

  const [rating, setRating] = useState(null);
  const [description, setDescription] = useState('');

  // console.log(user.id,'USER', currentItem.id, 'CREATE');

  const postReview = (e) => {
    e.preventDefault();
    axios.post('/post/insertPost', {
      rating: rating,
      description: description,
      itemId: currentItem.id,
      userId: user.id
    }).then(() => {
      // console.log('Success Post');
      setDescription('');
    }).catch((err) => console.error('PostReview Err'));
  };

  return (
    <div className='create'>
      <div className='create-editor'>
        <h2>Write a Review</h2>
        <form onSubmit={e => e.preventDefault()}>
          <input className='create-input' type='text' value={rating} onChange={event => setRating(event.target.value)} placeholder='Rate 1 - 5' />
          <textarea className='create-body-textarea' value={description} onChange={event => setDescription(event.target.value)}placeholder='Review Body'/>
          <button className='create-submit-button' type='submit' onClick={postReview}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;