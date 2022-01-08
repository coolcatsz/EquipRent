import React, {useState, useEffect} from 'react';
import axios from 'axios';


const ItemPost = ({ itemReview }) => {

  if (itemReview.length !== 0) {
    return (
      <div>
        <h4>Item Post</h4>
        {
          itemReview.map((post) => {
            // console.log(post, 'POST');
            return (
              <div key={post.id}>
                <ul>
                  <li>Rating: {post.rating}</li>
                  <li>Description: {post.description}</li>
                </ul>
              </div>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div>
        <h4>No Reviews Yet</h4>
      </div>
    );
  }
};

export default ItemPost;