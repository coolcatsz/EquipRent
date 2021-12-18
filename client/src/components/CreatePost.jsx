import React from 'react';
import axios from 'axios';

const CreatePost = () => {
  return (
    <div className='create'>
      <div className='create-editor'>
        <h2>Write a Review</h2>
        <form>
          <input className='create-input' type='text' placeholder='Review' />
          <button className='create-submit-button' type='submit' >Save post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;