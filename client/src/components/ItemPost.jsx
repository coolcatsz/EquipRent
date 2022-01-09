import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ItemPost = ({ itemReview, currentItem }) => {
  // console.log(currentItem, 'REVIEWITEM');

  if (itemReview.length !== 0) {
    return (
      <div>
        <h4>Item Post</h4>
        {
          itemReview.map((post) => {
            return (
              <div key={post.id}>
                <div>

                </div>
                <div>
                  <ul>
                    <li>Rating: {post.rating}</li>
                    <li>Description: {post.description}</li>
                  </ul>
                </div>
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