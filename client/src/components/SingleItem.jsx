import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreatePost from './CreatePost.jsx';

const SingleItem = ({user, currentItem}) => {
  // console.log(user.id, currentItem, 'SINGLE');
  return (
    <div>
      <h1>Single Item Info page</h1>
      <CreatePost user={user} currentItem={currentItem}/>
    </div>
  );
};

export default SingleItem;